(function(root, factory){
  const mod = factory();
  if (typeof module !== 'undefined' && module.exports) module.exports = mod;
  else root.PuzzleEngine = mod;
})(typeof self !== 'undefined' ? self : this, function(){
  const DIRS = [[1,0],[-1,0],[0,1],[0,-1]];

  function clone(b){ return b.map(function(r){ return r.slice(); }); }
  function rows(b){ return b.length; }
  function cols(b){ return b[0].length; }
  function inBounds(b,y,x){ return y>=0 && y<b.length && x>=0 && x<b[0].length; }

  function topRow(b,c){
    for (let r=0; r<b.length; r++){ if (b[r][c] !== null) return r; }
    return -1;
  }
  function isEmpty(b){
    for (let r=0; r<b.length; r++){ for (let c=0; c<b[0].length; c++){ if (b[r][c] !== null) return false; } }
    return true;
  }

  function flood(b,r,c,color){
    const R=b.length, C=b[0].length;
    const seen = Array.from({length:R}, function(){ return new Array(C).fill(false); });
    const out=[], st=[[r,c]];
    while (st.length){
      const a=st.pop(), y=a[0], x=a[1];
      if (!inBounds(b,y,x) || seen[y][x] || b[y][x] !== color) continue;
      seen[y][x]=true; out.push([y,x]);
      for (let i=0;i<4;i++) st.push([y+DIRS[i][0], x+DIRS[i][1]]);
    }
    return out;
  }

  function gravity(b){
    const R=b.length, C=b[0].length;
    for (let c=0;c<C;c++){
      const v=[];
      for (let r=0;r<R;r++){ if (b[r][c] !== null) v.push(b[r][c]); }
      for (let r=0;r<R;r++){ const i=r-(R-v.length); b[r][c] = i>=0 ? v[i] : null; }
    }
    return b;
  }

  // Like gravity, but reports how each surviving block moved: [{col, from, to}] (only when it moved).
  function gravityWithFall(b){
    const R=b.length, C=b[0].length, fall=[];
    for (let c=0;c<C;c++){
      const surv=[];
      for (let r=R-1;r>=0;r--){ if (b[r][c] !== null) surv.push({ row:r, val:b[r][c] }); }
      for (let r=0;r<R;r++) b[r][c]=null;
      for (let i=0;i<surv.length;i++){
        const to=R-1-i, from=surv[i].row;
        b[to][c]=surv[i].val;
        if (from!==to) fall.push({ col:c, from:from, to:to });
      }
    }
    return fall;
  }

  // 実ブロック群 real を消去（隣接する黒も巻き込む）→ 重力。アニメ用差分つきで返す。
  function resolveHit(b, real, color, landed){
    const bset = new Set(), blacks = [];
    for (let i=0;i<real.length;i++){
      const y=real[i][0], x=real[i][1];
      for (let d=0; d<4; d++){
        const ny=y+DIRS[d][0], nx=x+DIRS[d][1];
        if (inBounds(b,ny,nx) && b[ny][nx]==='K'){
          const kk=ny*1000+nx;
          if (!bset.has(kk)){ bset.add(kk); blacks.push([ny,nx]); }
        }
      }
    }
    for (let i=0;i<real.length;i++) b[real[i][0]][real[i][1]] = null;
    for (let i=0;i<blacks.length;i++) b[blacks[i][0]][blacks[i][1]] = null;
    const fall = gravityWithFall(b);
    return { board: b, outcome:'hit', cleared: real.length, blacks: blacks.length, color: color, clearedCells: real, blackCells: blacks, fall: fall, landed: landed };
  }

  // 薬は「仮想ブロック」として列を落下し、積みの上（空き列なら最下段）に着地する。
  // 着地点から4方向につながった同色の実ブロックを消す（つながる同色が無ければ真下を黒化＝不発）。
  // 戻り値にアニメ用差分: clearedCells / blackCells / blackenedCell / fall / landed(着地点)。
  // outcome: 'hit' | 'miss' | 'fizzle'(空き列で何も起きず) | 'invalid'。
  function applyThrow(board, col, color){
    const R = board.length;
    const tr = topRow(board, col);
    const pr = (tr < 0) ? R-1 : tr-1;     // 着地セル（積みの上 or 最下段）
    const b = clone(board);
    if (pr < 0){                          // 列が満杯: 最上段に直接作用（縮退ケース）
      if (b[tr][col] === color) return resolveHit(b, flood(b, tr, col, color), color, [tr,col]);
      b[tr][col] = 'K';
      return { board: b, outcome:'miss', blackened: board[tr][col], color: color, blackenedCell: [tr,col], fall: gravityWithFall(b), landed: [tr,col] };
    }
    b[pr][col] = color;                   // 仮想ブロックを着地
    const group = flood(b, pr, col, color);
    const real = [];
    for (let i=0;i<group.length;i++){ if (group[i][0]!==pr || group[i][1]!==col) real.push(group[i]); }
    b[pr][col] = null;                    // 仮想ブロックは盤面に残らない
    if (real.length > 0) return resolveHit(b, real, color, [pr,col]);
    if (tr >= 0){                         // 何ともつながらない → 真下を黒化（不発）
      b[tr][col] = 'K';
      return { board: b, outcome:'miss', blackened: board[tr][col], color: color, blackenedCell: [tr,col], fall: gravityWithFall(b), landed: [pr,col] };
    }
    return { board: board, outcome:'fizzle', color: color, landed: [pr,col] };  // 空き列・隣に同色なし
  }

  function boardsEqual(a,b){
    if (a.length !== b.length || a[0].length !== b[0].length) return false;
    for (let r=0;r<a.length;r++){ for (let c=0;c<a[0].length;c++){ if (a[r][c] !== b[r][c]) return false; } }
    return true;
  }

  // String form: rows joined by '/', '.' = empty, 'K' = black, letters = colors.
  function parse(str){
    return str.trim().split('/').map(function(line){
      return line.split('').map(function(ch){ return ch === '.' ? null : ch; });
    });
  }
  function toStr(b){
    return b.map(function(r){ return r.map(function(v){ return v || '.'; }).join(''); }).join('/');
  }

  return { DIRS, clone, rows, cols, inBounds, topRow, isEmpty, flood, gravity, gravityWithFall, applyThrow, boardsEqual, parse, toStr };
});
