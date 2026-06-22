(function(root, factory){
  const m = factory();
  if (typeof module !== 'undefined' && module.exports) module.exports = m;
  else root.REWARDS = m;
})(typeof self !== 'undefined' ? self : this, function(){
  // v1: 1キャラ・段階差分。layers は重ねて表示する画像（base＋差分overlay）。
  // unlock: {type:'clearCount', value:N} 累計クリア数 / {type:'tierClear', value:'beginner'|...} 帯コンプ
  // 実アートは assets/rewards/ を差し替え＋ここを編集すれば反映（将来 layers を Live2D 参照に差し替え可能）。
  return {
    scenes: [
      {
        id: 'scene1',
        name: 'ご褒美 1',
        stages: [
          { id:'s1_1', label:'差分 1', layers:['assets/rewards/scene1/stage1.png'], unlock:{type:'clearCount', value:1},            hint:'最初の1面クリアで解放（入口は浅く）' },
          { id:'s1_2', label:'差分 2', layers:['assets/rewards/scene1/stage2.png'], unlock:{type:'tierClear', value:'beginner'},     hint:'初級コンプで解放' },
          { id:'s1_3', label:'差分 3', layers:['assets/rewards/scene1/stage3.png'], unlock:{type:'tierClear', value:'intermediate'}, hint:'中級コンプで解放' },
          { id:'s1_4', label:'差分 4', layers:['assets/rewards/scene1/stage4.png'], unlock:{type:'tierClear', value:'advanced'},     hint:'上級コンプで解放（極めた者へ）' }
        ]
      },
      {
        id: 'scene2',
        name: 'ご褒美 2',
        stages: [
          { id:'s2_1', label:'差分 1', layers:['assets/rewards/scene2/stage1.png'], unlock:{type:'clearCount', value:5},             hint:'累計5クリアで解放' },
          { id:'s2_2', label:'差分 2', layers:['assets/rewards/scene2/stage2.png'], unlock:{type:'clearCount', value:12},            hint:'累計12クリアで解放' },
          { id:'s2_3', label:'差分 3', layers:['assets/rewards/scene2/stage3.png'], unlock:{type:'tierClear', value:'intermediate'}, hint:'中級コンプで解放' },
          { id:'s2_4', label:'差分 4', layers:['assets/rewards/scene2/stage4.png'], unlock:{type:'tierClear', value:'advanced'},     hint:'上級コンプで解放' }
        ]
      },
      {
        id: 'scene3',
        name: 'ご褒美 3',
        stages: [
          { id:'s3_1', label:'差分 1', layers:['assets/rewards/scene3/stage1.png'], unlock:{type:'clearCount', value:20},            hint:'累計20クリアで解放' },
          { id:'s3_2', label:'差分 2', layers:['assets/rewards/scene3/stage2.png'], unlock:{type:'tierClear', value:'advanced'},     hint:'上級コンプで解放' },
          { id:'s3_3', label:'差分 3', layers:['assets/rewards/scene3/stage3.png'], unlock:{type:'tierClear', value:'expert'},       hint:'達人コンプで解放' },
          { id:'s3_4', label:'差分 4', layers:['assets/rewards/scene3/stage4.png'], unlock:{type:'clearCount', value:60},            hint:'累計60クリアで解放（やり込み）' }
        ]
      }
    ]
  };
});
