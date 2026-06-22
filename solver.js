(function(root, factory){
  const E = (typeof require !== 'undefined') ? require('./engine.js') : root.PuzzleEngine;
  const mod = factory(E);
  if (typeof module !== 'undefined' && module.exports) module.exports = mod;
  else root.PuzzleSolver = mod;
})(typeof self !== 'undefined' ? self : this, function(E){

  function totalPot(inv){ let s=0; for (const k in inv) s+=inv[k]; return s; }

  function key(b, inv){
    return E.toStr(b) + '|' + Object.keys(inv).sort().map(function(k){ return k+':'+inv[k]; }).join(',');
  }

  // Lower bound on potions required to fully clear -> sound prune (never rejects a solvable state).
  // Each present color costs >=1 potion if you hold that color (>=1 hit), otherwise every block of
  // that color must be individually blackened (cost = its count), since colored blocks are never
  // swept as collateral.
  function lowerBound(b){
    const cnt = {};
    for (let r=0;r<b.length;r++){ for (let c=0;c<b[0].length;c++){ const v=b[r][c]; if (v && v!=='K') cnt[v]=(cnt[v]||0)+1; } }
    return cnt;
  }
  // Minimum potions still required (admissible: never overestimates) -> sound prune / IDA* heuristic.
  function lowerBoundNeed(b, inv){
    const cnt = lowerBound(b);
    let need = 0;
    for (const col in cnt){ need += (inv[col] > 0) ? 1 : cnt[col]; }
    return need;
  }
  function feasible(b, inv){
    return lowerBoundNeed(b, inv) <= totalPot(inv);
  }

  function moveScore(res){
    if (res.outcome === 'hit') return 100 + (res.cleared||0) + (res.blacks||0)*3;
    return 0;
  }

  function genMoves(b, inv){
    const C = E.cols(b), moves = [], seen = new Set();
    for (let c=0;c<C;c++){
      for (const color in inv){
        if (inv[color] <= 0) continue;
        const res = E.applyThrow(b, c, color);
        if (res.outcome === 'invalid' || res.outcome === 'fizzle') continue;
        if (E.boardsEqual(res.board, b)) continue; // no-op
        const k = E.toStr(res.board);
        if (seen.has(k)) continue;                 // 同じ結果盤面になる別列着地はまとめる
        seen.add(k);
        moves.push({ c: c, color: color, res: res });
      }
    }
    return moves;
  }

  // Find one clearing sequence within the inventory. Returns the solution path or null.
  function solve(b0, inv0, opts){
    opts = opts || {};
    const maxNodes = opts.maxNodes || 3000000;
    const dead = new Set();
    let nodes = 0, exceeded = false, found = null;
    const path = [];

    function dfs(b, inv){
      if (E.isEmpty(b)){ found = path.slice(); return true; }
      if (exceeded) return false;
      if (++nodes > maxNodes){ exceeded = true; return false; }
      if (totalPot(inv) === 0) return false;
      const k = key(b, inv);
      if (dead.has(k)) return false;
      if (!feasible(b, inv)){ dead.add(k); return false; }

      const moves = genMoves(b, inv);
      moves.sort(function(m1,m2){ return moveScore(m2.res) - moveScore(m1.res); });
      for (let i=0;i<moves.length;i++){
        const m = moves[i];
        const niv = Object.assign({}, inv); niv[m.color]--;
        path.push({ col: m.c, color: m.color, outcome: m.res.outcome, cleared: m.res.cleared, blacks: m.res.blacks, blackened: m.res.blackened });
        if (dfs(m.res.board, niv)) return true;
        path.pop();
      }
      dead.add(k);
      return false;
    }

    const ok = dfs(E.clone(b0), Object.assign({}, inv0));
    return { solvable: ok, solution: ok ? found : null, potionsUsed: ok ? found.length : null, nodes: nodes, exceeded: exceeded };
  }

  // Count distinct clearing sequences, capped (to gauge how "one-track" a puzzle is).
  function countSolutions(b0, inv0, cap, opts){
    cap = cap || 100;
    opts = opts || {};
    const maxNodes = opts.maxNodes || 3000000;
    const memo = new Map();
    let nodes = 0, exceeded = false;

    function dfs(b, inv){
      if (E.isEmpty(b)) return 1;
      if (exceeded) return 0;
      if (++nodes > maxNodes){ exceeded = true; return 0; }
      if (totalPot(inv) === 0) return 0;
      const k = key(b, inv);
      if (memo.has(k)) return memo.get(k);
      if (!feasible(b, inv)){ memo.set(k, 0); return 0; }

      const moves = genMoves(b, inv);
      let total = 0;
      for (let i=0;i<moves.length && total<cap;i++){
        const m = moves[i];
        const niv = Object.assign({}, inv); niv[m.color]--;
        total += dfs(m.res.board, niv);
        if (total >= cap){ total = cap; break; }
      }
      memo.set(k, total);
      return total;
    }

    const n = dfs(E.clone(b0), Object.assign({}, inv0));
    return { count: n, capped: n >= cap, nodes: nodes, exceeded: exceeded };
  }

  // Shortest clearing sequence within the inventory (iterative deepening + admissible prune).
  function solveMin(b0, inv0, opts){
    opts = opts || {};
    const maxNodes = opts.maxNodes || 4000000;
    let nodes = 0, exceeded = false, found = null;
    const startLB = lowerBoundNeed(b0, inv0);
    const cap = Math.min(opts.maxDepth || 60, totalPot(inv0));
    for (let limit = startLB; limit <= cap && !found && !exceeded; limit++){
      const dead = new Map(); // state key -> largest remaining budget known to fail
      const path = [];
      (function dfs(b, inv, depth){
        if (found || exceeded) return;
        if (E.isEmpty(b)){ found = path.slice(); return; }
        if (++nodes > maxNodes){ exceeded = true; return; }
        const rem = limit - depth;
        if (rem <= 0 || totalPot(inv) === 0) return;
        if (lowerBoundNeed(b, inv) > rem) return;
        const k = key(b, inv);
        const f = dead.get(k);
        if (f !== undefined && f >= rem) return;
        const moves = genMoves(b, inv);
        moves.sort(function(m1,m2){ return moveScore(m2.res) - moveScore(m1.res); });
        for (let i=0;i<moves.length && !found;i++){
          const m = moves[i];
          const niv = Object.assign({}, inv); niv[m.color]--;
          path.push({ col:m.c, color:m.color, outcome:m.res.outcome, cleared:m.res.cleared, blacks:m.res.blacks, blackened:m.res.blackened });
          dfs(m.res.board, niv, depth+1);
          path.pop();
        }
        if (!found) dead.set(k, rem);
      })(E.clone(b0), Object.assign({}, inv0), 0);
    }
    return { solvable: !!found, solution: found, potionsUsed: found ? found.length : null, nodes: nodes, exceeded: exceeded };
  }

  // Tightest inventory that still clears the board (authoring aid for 詰将棋):
  // assume ample potions of every color, take an optimal solution, report its per-color usage.
  function minInventory(b0, colors, opts){
    opts = opts || {};
    const big = opts.perColor || (b0.length * b0[0].length);
    const inv = {}; for (let i=0;i<colors.length;i++) inv[colors[i]] = big;
    const r = solveMin(b0, inv, { maxNodes: opts.maxNodes || 4000000, maxDepth: opts.maxDepth });
    if (!r.solvable) return { solvable: false, nodes: r.nodes, exceeded: r.exceeded };
    const tight = {};
    for (let s=0;s<r.solution.length;s++){ const c=r.solution[s].color; tight[c]=(tight[c]||0)+1; }
    return { solvable: true, moves: r.solution.length, inventory: tight, solution: r.solution, nodes: r.nodes, exceeded: r.exceeded };
  }

  // --- Random solvable-board generation (for the random/score mode "only serve solvable boards") ---
  function randomFill(R, C, colors, minH, maxH, rng){
    const b = Array.from({length:R}, function(){ return new Array(C).fill(null); });
    for (let c=0;c<C;c++){
      const h = minH + Math.floor(rng()*(maxH-minH+1));
      for (let i=0;i<h;i++) b[R-1-i][c] = colors[Math.floor(rng()*colors.length)];
    }
    return b;
  }

  function generateSolvable(opts){
    const R = opts.rows, C = opts.cols, colors = opts.colors;
    const attempts = opts.attempts || 300;
    const rng = opts.rng || Math.random;
    const perColor = opts.perColor || (R*C);
    for (let i=0;i<attempts;i++){
      const b = randomFill(R, C, colors, opts.minH || 2, opts.maxH || 3, rng);
      if (E.isEmpty(b)) continue;
      const inv = {}; for (let j=0;j<colors.length;j++) inv[colors[j]] = perColor;
      const r = solve(b, inv, { maxNodes: opts.maxNodes || 500000 });
      if (r.solvable){
        // tighten inventory to what the found solution actually uses
        const used = {}; for (let j=0;j<colors.length;j++) used[colors[j]] = 0;
        for (let s=0;s<r.solution.length;s++) used[r.solution[s].color]++;
        return { board: b, generousInv: inv, minInvFound: used, solution: r.solution, attempts: i+1, nodes: r.nodes };
      }
    }
    return null;
  }

  return { solve, solveMin, minInventory, countSolutions, generateSolvable, randomFill, key, feasible, totalPot, lowerBoundNeed };
});
