/* オンラインランキング（Supabase REST 直叩き・ビルド不要）。
   セットアップ手順とテーブル作成SQLは docs/ranking-setup.md。
   下の SUPABASE_URL / SUPABASE_ANON_KEY を貼るだけで有効化。
   未設定なら window.Ranking.configured===false となり、ゲームは通常どおり動作する。
   ※ anon キーはクライアント公開前提の鍵。RLS（行レベルセキュリティ）で保護する設計。 */
(function(){
  // ▼▼▼ ここに Supabase プロジェクトの値を貼る（docs/ranking-setup.md 参照） ▼▼▼
  var SUPABASE_URL='https://dzghgirrczizoqemhplg.supabase.co';        // 例: https://abcdefgh.supabase.co
  var SUPABASE_ANON_KEY='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR6Z2hnaXJyY3ppem9xZW1ocGxnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODIzOTY4OTAsImV4cCI6MjA5Nzk3Mjg5MH0._qzlmTsR1E-CNK3QvU43AdQWdZcmbWm9LvlxdF46OYs';   // 例: eyJhbGciOi... （anon public key）
  // ▲▲▲ window.RANKING_CONFIG = {url,key} でも上書き可（別ファイルに分けたい場合） ▲▲▲

  var cfg=(window.RANKING_CONFIG||{});
  var BASE=(cfg.url||SUPABASE_URL||'').replace(/\/+$/,'');
  var KEY=cfg.key||SUPABASE_ANON_KEY||'';
  var configured=!!(BASE&&KEY);

  function headers(extra){
    var h={apikey:KEY,Authorization:'Bearer '+KEY};
    if(extra)for(var k in extra)h[k]=extra[k];
    return h;
  }
  function clampName(n){n=(''+(n||'')).trim().slice(0,16);return n||'ゲスト';}
  function clampInt(v,max){v=Math.floor(+v||0);return Math.max(0,Math.min(max,v));}

  window.Ranking={
    configured:configured,
    // 上位取得：preset一致のみ・score降順。limit既定50。
    top:function(preset,limit){
      if(!configured)return Promise.reject(new Error('ranking not configured'));
      var q=BASE+'/rest/v1/scores?select=name,score,depth,bal,created_at'
            +'&order=score.desc,created_at.asc&limit='+(limit||50);
      if(preset)q+='&bal=eq.'+encodeURIComponent(preset);
      return fetch(q,{headers:headers()}).then(function(r){
        if(!r.ok)throw new Error('HTTP '+r.status);
        return r.json();
      });
    },
    // スコア送信：entry={name,score,depth,bal}。挿入行を返す。
    submit:function(entry){
      if(!configured)return Promise.reject(new Error('ranking not configured'));
      var body={
        name:clampName(entry.name),
        score:clampInt(entry.score,100000000),
        depth:clampInt(entry.depth,100000),
        bal:(entry.bal||'standard')
      };
      return fetch(BASE+'/rest/v1/scores',{
        method:'POST',
        headers:headers({'Content-Type':'application/json',Prefer:'return=representation'}),
        body:JSON.stringify(body)
      }).then(function(r){
        if(!r.ok)return r.text().then(function(t){throw new Error('HTTP '+r.status+' '+t);});
        return r.json();
      });
    }
  };
})();
