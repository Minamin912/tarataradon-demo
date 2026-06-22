(function(root, factory){
  const m = factory();
  if (typeof module !== "undefined" && module.exports) module.exports = m;
  else root.LEVELS = m;
})(typeof self !== "undefined" ? self : this, function(){
  return {
    "tutorial": [
      {
        "hint": "薬を列に投げると、つながった同色が消える。",
        "board": "....../....../....../....../....../RRR...",
        "inv": {
          "R": 1
        },
        "par": 1,
        "sc": 1,
        "reqBlack": false,
        "id": "t1",
        "name": "チュートリアル 1"
      },
      {
        "hint": "L字でもひと塊なら一度に消える。",
        "board": "....../....../....../....../R...../RRR...",
        "inv": {
          "R": 1
        },
        "par": 1,
        "sc": 1,
        "reqBlack": false,
        "id": "t2",
        "name": "チュートリアル 2"
      },
      {
        "hint": "薬は列を落ちて着地する。空き列(1列目)にも投げられて、落ちた先の隣の同色を消せる。",
        "board": "....../....../....../....../....../.G....",
        "inv": {
          "G": 1
        },
        "par": 1,
        "sc": 1,
        "reqBlack": false,
        "id": "t3",
        "name": "チュートリアル 3"
      },
      {
        "hint": "横でつながっていれば、フタの下の同色も消える（消すと上が落ちる）。",
        "board": "....../....../....../....../.B..../RR....",
        "inv": {
          "R": 1,
          "B": 1
        },
        "par": 2,
        "sc": 2,
        "reqBlack": false,
        "id": "t4",
        "name": "チュートリアル 4"
      },
      {
        "hint": "薬は色ごとに本数制限。色を間違えず、ピッタリ使い切ろう。",
        "board": "....../....../....../....../....../RGB...",
        "inv": {
          "R": 1,
          "G": 1,
          "B": 1
        },
        "par": 3,
        "sc": 6,
        "reqBlack": false,
        "id": "t5",
        "name": "チュートリアル 5"
      },
      {
        "hint": "黒は直接消せない。隣の色塊を消すと一緒に消える——まずはこの性質を体験。",
        "board": "....../....../....../....../....../GGK...",
        "inv": {
          "G": 1
        },
        "par": 1,
        "sc": 1,
        "reqBlack": false,
        "id": "t6",
        "name": "チュートリアル 6"
      },
      {
        "hint": "さっきの「黒は隣の消去で一緒に消える」を逆手に取る。消せない黄をわざと黒化し、隣の緑を消すついでに掃き出す。先に緑を消すと黄が黒化前で間に合わず詰む——順番が肝。",
        "board": "....../....../....../....../Y...../GG....",
        "inv": {
          "R": 1,
          "G": 1
        },
        "par": 2,
        "sc": 1,
        "reqBlack": true,
        "id": "t7",
        "name": "チュートリアル 7"
      }
    ],
    "beginner": [
      {
        "hint": "",
        "board": "....../....../....../....../RGRR../RGGG..",
        "inv": {
          "G": 2,
          "R": 2
        },
        "par": 2,
        "sc": "20+",
        "reqBlack": false,
        "id": "b1",
        "name": "初級 1"
      },
      {
        "hint": "",
        "board": "....../....../....../....../RRG.../RRR...",
        "inv": {
          "R": 2,
          "G": 2
        },
        "par": 2,
        "sc": "20+",
        "reqBlack": false,
        "id": "b2",
        "name": "初級 2"
      },
      {
        "hint": "",
        "board": "....../....../....../....../RRRG../RRGG..",
        "inv": {
          "R": 2,
          "G": 2
        },
        "par": 2,
        "sc": "20+",
        "reqBlack": false,
        "id": "b3",
        "name": "初級 3"
      },
      {
        "hint": "",
        "board": "....../....../....../....../GRG.../RRG...",
        "inv": {
          "R": 2,
          "G": 2
        },
        "par": 2,
        "sc": "20+",
        "reqBlack": false,
        "id": "b4",
        "name": "初級 4"
      },
      {
        "hint": "",
        "board": "....../....../....../....../RRG.../RRG...",
        "inv": {
          "R": 2,
          "G": 2
        },
        "par": 2,
        "sc": "20+",
        "reqBlack": false,
        "id": "b5",
        "name": "初級 5"
      },
      {
        "hint": "",
        "board": "....../....../....../....../GGGR../RRRR..",
        "inv": {
          "R": 2,
          "G": 2
        },
        "par": 2,
        "sc": "20+",
        "reqBlack": false,
        "id": "b6",
        "name": "初級 6"
      },
      {
        "hint": "",
        "board": "....../....../....../....../GGGG../RRGR..",
        "inv": {
          "G": 2,
          "R": 2
        },
        "par": 2,
        "sc": "20+",
        "reqBlack": false,
        "id": "b7",
        "name": "初級 7"
      },
      {
        "hint": "",
        "board": "....../....../....../....../GRRR../RRRR..",
        "inv": {
          "R": 2,
          "G": 2
        },
        "par": 2,
        "sc": "20+",
        "reqBlack": false,
        "id": "b8",
        "name": "初級 8"
      },
      {
        "hint": "",
        "board": "....../....../....../....../GRR.../GGR...",
        "inv": {
          "G": 2,
          "R": 2
        },
        "par": 2,
        "sc": 18,
        "reqBlack": false,
        "id": "b9",
        "name": "初級 9"
      },
      {
        "hint": "",
        "board": "....../....../....../....../RGG.../RGG...",
        "inv": {
          "G": 2,
          "R": 2
        },
        "par": 2,
        "sc": 16,
        "reqBlack": false,
        "id": "b10",
        "name": "初級 10"
      },
      {
        "hint": "",
        "board": "....../....../....../....../RRG.../GRR...",
        "inv": {
          "R": 2,
          "G": 2
        },
        "par": 2,
        "sc": 11,
        "reqBlack": false,
        "id": "b11",
        "name": "初級 11"
      },
      {
        "hint": "",
        "board": "....../....../....../....../GGR.../RGG...",
        "inv": {
          "G": 2,
          "R": 2
        },
        "par": 2,
        "sc": 11,
        "reqBlack": false,
        "id": "b12",
        "name": "初級 12"
      },
      {
        "hint": "",
        "board": "....../....../....../....../GRRR../RGGG..",
        "inv": {
          "R": 3,
          "G": 2
        },
        "par": 3,
        "sc": "20+",
        "reqBlack": false,
        "id": "b13",
        "name": "初級 13"
      },
      {
        "hint": "",
        "board": "....../....../....../....../GRRG../GRGR..",
        "inv": {
          "R": 3,
          "G": 2
        },
        "par": 3,
        "sc": "20+",
        "reqBlack": false,
        "id": "b14",
        "name": "初級 14"
      },
      {
        "hint": "",
        "board": "....../....../....../....../GGGR../RGRG..",
        "inv": {
          "G": 3,
          "R": 2
        },
        "par": 3,
        "sc": "20+",
        "reqBlack": false,
        "id": "b15",
        "name": "初級 15"
      },
      {
        "hint": "",
        "board": "....../....../....../....../GGR.../RRG...",
        "inv": {
          "G": 3,
          "R": 2
        },
        "par": 3,
        "sc": "20+",
        "reqBlack": false,
        "id": "b16",
        "name": "初級 16"
      },
      {
        "hint": "",
        "board": "....../....../....../....../GGRR../RRGG..",
        "inv": {
          "G": 3,
          "R": 2
        },
        "par": 3,
        "sc": "20+",
        "reqBlack": false,
        "id": "b17",
        "name": "初級 17"
      },
      {
        "hint": "",
        "board": "....../....../....../....../GRRG../RGRG..",
        "inv": {
          "G": 3,
          "R": 2
        },
        "par": 3,
        "sc": "20+",
        "reqBlack": false,
        "id": "b18",
        "name": "初級 18"
      },
      {
        "hint": "",
        "board": "....../....../....../....../RGGR../GGGG..",
        "inv": {
          "G": 2,
          "R": 3
        },
        "par": 3,
        "sc": "20+",
        "reqBlack": false,
        "id": "b19",
        "name": "初級 19"
      },
      {
        "hint": "",
        "board": "....../....../....../....../GGGG../RGGR..",
        "inv": {
          "G": 2,
          "R": 3
        },
        "par": 3,
        "sc": "20+",
        "reqBlack": false,
        "id": "b20",
        "name": "初級 20"
      }
    ],
    "intermediate": [
      {
        "hint": "空き列(4列目)に緑を落として3列目の緑を消すと、赤が落ちて最下段に3つ繋がる。落下を読もう。",
        "board": "....../....../....../....../GGR.../RRG...",
        "inv": {
          "R": 1,
          "G": 2
        },
        "par": 3,
        "sc": 4,
        "reqBlack": false,
        "id": "i1",
        "name": "中級 1"
      },
      {
        "hint": "",
        "board": "....../....../....../...B../BRGG../GGGR..",
        "inv": {
          "G": 1,
          "R": 1,
          "B": 2
        },
        "par": 4,
        "sc": 12,
        "reqBlack": false,
        "id": "i2",
        "name": "中級 2"
      },
      {
        "hint": "",
        "board": "....../....../....../.GG.../RGGGG./GGBBR.",
        "inv": {
          "G": 1,
          "B": 1,
          "R": 2
        },
        "par": 4,
        "sc": 12,
        "reqBlack": false,
        "id": "i3",
        "name": "中級 3"
      },
      {
        "hint": "",
        "board": "....../....../....../RR..../BBBG../BRGB..",
        "inv": {
          "B": 2,
          "R": 1,
          "G": 1
        },
        "par": 4,
        "sc": 10,
        "reqBlack": false,
        "id": "i4",
        "name": "中級 4"
      },
      {
        "hint": "",
        "board": "....../....../....../...G../RGGBG./RGBRR.",
        "inv": {
          "R": 2,
          "G": 1,
          "B": 1
        },
        "par": 4,
        "sc": 4,
        "reqBlack": false,
        "id": "i5",
        "name": "中級 5"
      },
      {
        "hint": "",
        "board": "....../....../....../B...../RBRGB./GGRBB.",
        "inv": {
          "B": 2,
          "R": 1,
          "G": 1
        },
        "par": 4,
        "sc": 3,
        "reqBlack": false,
        "id": "i6",
        "name": "中級 6"
      },
      {
        "hint": "",
        "board": "....../....../....../R.GG../BGRB../BGBR..",
        "inv": {
          "G": 1,
          "B": 2,
          "R": 1
        },
        "par": 4,
        "sc": 3,
        "reqBlack": false,
        "id": "i7",
        "name": "中級 7"
      },
      {
        "hint": "",
        "board": "....../....../....../.R.G../RRGRR./RGRBR.",
        "inv": {
          "G": 2,
          "R": 1,
          "B": 1
        },
        "par": 4,
        "sc": 2,
        "reqBlack": false,
        "id": "i8",
        "name": "中級 8"
      },
      {
        "hint": "",
        "board": "....../....../....../G..G../RGRB../BGRB..",
        "inv": {
          "G": 2,
          "B": 2,
          "R": 1
        },
        "par": 5,
        "sc": "20+",
        "reqBlack": false,
        "id": "i9",
        "name": "中級 9"
      },
      {
        "hint": "",
        "board": "....../....../....../RBRG../GGRRB./GRGRR.",
        "inv": {
          "R": 2,
          "G": 1,
          "B": 2
        },
        "par": 5,
        "sc": "20+",
        "reqBlack": false,
        "id": "i10",
        "name": "中級 10"
      },
      {
        "hint": "",
        "board": "....../....../....../B...../GGGRG./BRRGB.",
        "inv": {
          "G": 2,
          "R": 1,
          "B": 2
        },
        "par": 5,
        "sc": "20+",
        "reqBlack": false,
        "id": "i11",
        "name": "中級 11"
      },
      {
        "hint": "",
        "board": "....../....../....../BB..../RGGRB./BGGBG.",
        "inv": {
          "G": 2,
          "R": 2,
          "B": 1
        },
        "par": 5,
        "sc": 15,
        "reqBlack": false,
        "id": "i12",
        "name": "中級 12"
      },
      {
        "hint": "",
        "board": "....../....../....../B..G../GRRGR./BBGBR.",
        "inv": {
          "R": 2,
          "G": 2,
          "B": 1
        },
        "par": 5,
        "sc": 10,
        "reqBlack": false,
        "id": "i13",
        "name": "中級 13"
      },
      {
        "hint": "",
        "board": "....../....../....../.B.G../GRGGR./GRGBG.",
        "inv": {
          "G": 2,
          "R": 2,
          "B": 1
        },
        "par": 5,
        "sc": 8,
        "reqBlack": false,
        "id": "i14",
        "name": "中級 14"
      },
      {
        "hint": "",
        "board": "....../....../....../R...../BRGBG./RGGBR.",
        "inv": {
          "B": 2,
          "R": 2,
          "G": 1
        },
        "par": 5,
        "sc": 2,
        "reqBlack": false,
        "id": "i15",
        "name": "中級 15"
      },
      {
        "hint": "",
        "board": "....../....../....../G..BR./RGBRG./BRBGB.",
        "inv": {
          "G": 2,
          "R": 2,
          "B": 2
        },
        "par": 6,
        "sc": "20+",
        "reqBlack": false,
        "id": "i16",
        "name": "中級 16"
      },
      {
        "hint": "",
        "board": "....../....../....../BG.G../RGBB../GBRG..",
        "inv": {
          "G": 3,
          "B": 2,
          "R": 1
        },
        "par": 6,
        "sc": "20+",
        "reqBlack": false,
        "id": "i17",
        "name": "中級 17"
      },
      {
        "hint": "",
        "board": "....../....../....../GR.B../BGRGG./GBRGR.",
        "inv": {
          "R": 2,
          "G": 2,
          "B": 2
        },
        "par": 6,
        "sc": "20+",
        "reqBlack": false,
        "id": "i18",
        "name": "中級 18"
      },
      {
        "hint": "",
        "board": "....../....../....../.GR.R./BRGRR./RBRBG.",
        "inv": {
          "B": 2,
          "R": 2,
          "G": 2
        },
        "par": 6,
        "sc": 6,
        "reqBlack": false,
        "id": "i19",
        "name": "中級 19"
      },
      {
        "hint": "",
        "board": "....../....../....../BR..R./GBGGB./RBGBR.",
        "inv": {
          "R": 3,
          "B": 2,
          "G": 1
        },
        "par": 6,
        "sc": 1,
        "reqBlack": false,
        "id": "i20",
        "name": "中級 20"
      }
    ],
    "advanced": [
      {
        "hint": "黄を消す薬が無い。黒化→掃き出しを段取りよく。",
        "board": "....../....../....../Y...../GGB.../GGB...",
        "inv": {
          "R": 1,
          "G": 1,
          "B": 1
        },
        "par": 3,
        "sc": 3,
        "reqBlack": true,
        "id": "a1",
        "name": "上級 1"
      },
      {
        "hint": "黄を黒に変えて、隣の青を消すついでに掃く。順番が全て。",
        "board": "....../....../....../....../....../BGGBY.",
        "inv": {
          "R": 1,
          "G": 1,
          "B": 2
        },
        "par": 4,
        "sc": 13,
        "reqBlack": true,
        "id": "a2",
        "name": "上級 2"
      },
      {
        "hint": "黒化→掃き出しを2回。在庫はピッタリ。",
        "board": "....../....../....../....../Y..Y../GG.GG.",
        "inv": {
          "R": 2,
          "G": 2
        },
        "par": 3,
        "sc": 12,
        "reqBlack": true,
        "id": "a3",
        "name": "上級 3"
      },
      {
        "hint": "",
        "board": "....../....../....../Y.YB../YBYG../YGYY..",
        "inv": {
          "Y": 1,
          "R": 2,
          "G": 1
        },
        "par": 4,
        "sc": 3,
        "reqBlack": true,
        "id": "a4",
        "name": "上級 4"
      },
      {
        "hint": "",
        "board": "....../....../....../...G../RYBY../BYYR..",
        "inv": {
          "R": 3,
          "Y": 1,
          "B": 1
        },
        "par": 5,
        "sc": 15,
        "reqBlack": true,
        "id": "a5",
        "name": "上級 5"
      },
      {
        "hint": "",
        "board": "....../....../....../....../GYYY../RBYR..",
        "inv": {
          "Y": 1,
          "G": 1,
          "R": 3
        },
        "par": 5,
        "sc": 15,
        "reqBlack": true,
        "id": "a6",
        "name": "上級 6"
      },
      {
        "hint": "",
        "board": "....../....../....../...B../RGGY../RBGG..",
        "inv": {
          "G": 3,
          "Y": 1,
          "B": 1
        },
        "par": 5,
        "sc": 2,
        "reqBlack": true,
        "id": "a7",
        "name": "上級 7"
      },
      {
        "hint": "",
        "board": "....../....../....../GBBY../YBBGR./BBYGB.",
        "inv": {
          "B": 2,
          "G": 3,
          "Y": 1
        },
        "par": 6,
        "sc": "20+",
        "reqBlack": true,
        "id": "a8",
        "name": "上級 8"
      },
      {
        "hint": "",
        "board": "....../....../....../G..BG./RBRRG./YBBBG.",
        "inv": {
          "G": 2,
          "R": 3,
          "B": 1
        },
        "par": 6,
        "sc": 15,
        "reqBlack": true,
        "id": "a9",
        "name": "上級 9"
      },
      {
        "hint": "",
        "board": "....../....../....../B..B../RYYR../BBBB..",
        "inv": {
          "B": 3,
          "G": 2,
          "Y": 1
        },
        "par": 6,
        "sc": 12,
        "reqBlack": true,
        "id": "a10",
        "name": "上級 10"
      },
      {
        "hint": "",
        "board": "....../....../....../GR.Y../GYRY../BBYR..",
        "inv": {
          "R": 4,
          "Y": 1,
          "B": 1
        },
        "par": 6,
        "sc": 12,
        "reqBlack": true,
        "id": "a11",
        "name": "上級 11"
      },
      {
        "hint": "",
        "board": "....../....../....../.GBR../RRRB../RGYG..",
        "inv": {
          "R": 5,
          "B": 1,
          "Y": 1
        },
        "par": 7,
        "sc": "20+",
        "reqBlack": true,
        "id": "a12",
        "name": "上級 12"
      },
      {
        "hint": "",
        "board": "....../....../....../B.BR../BBGYR./RYRGR.",
        "inv": {
          "B": 1,
          "R": 5,
          "G": 1
        },
        "par": 7,
        "sc": 15,
        "reqBlack": true,
        "id": "a13",
        "name": "上級 13"
      },
      {
        "hint": "",
        "board": "....../....../....../GR.Y../RYYY../RBGB..",
        "inv": {
          "G": 5,
          "Y": 1,
          "B": 1
        },
        "par": 7,
        "sc": 12,
        "reqBlack": true,
        "id": "a14",
        "name": "上級 14"
      },
      {
        "hint": "",
        "board": "....../....../....../..RB../RYBB../GYRG..",
        "inv": {
          "B": 1,
          "G": 5,
          "Y": 1
        },
        "par": 7,
        "sc": 12,
        "reqBlack": true,
        "id": "a15",
        "name": "上級 15"
      },
      {
        "hint": "",
        "board": "....../....../....../.BR.../BYGBB./BYYBR.",
        "inv": {
          "G": 4,
          "B": 2,
          "Y": 1
        },
        "par": 7,
        "sc": 10,
        "reqBlack": true,
        "id": "a16",
        "name": "上級 16"
      },
      {
        "hint": "",
        "board": "....../....../....../GGRG../RBYGG./BRBYG.",
        "inv": {
          "G": 5,
          "Y": 1,
          "B": 2
        },
        "par": 8,
        "sc": "20+",
        "reqBlack": true,
        "id": "a17",
        "name": "上級 17"
      },
      {
        "hint": "",
        "board": "....../....../....../.G.B../GBGR../YBRY..",
        "inv": {
          "G": 2,
          "B": 2,
          "R": 4
        },
        "par": 8,
        "sc": "20+",
        "reqBlack": true,
        "id": "a18",
        "name": "上級 18"
      },
      {
        "hint": "",
        "board": "....../....../....../..RB../RBYY../RRYR..",
        "inv": {
          "R": 6,
          "B": 2
        },
        "par": 8,
        "sc": "20+",
        "reqBlack": true,
        "id": "a19",
        "name": "上級 19"
      },
      {
        "hint": "",
        "board": "....../....../....../...R../GYRB../RGRB..",
        "inv": {
          "G": 6,
          "Y": 1,
          "B": 1
        },
        "par": 8,
        "sc": "20+",
        "reqBlack": true,
        "id": "a20",
        "name": "上級 20"
      }
    ],
    "expert": [
      {
        "hint": "",
        "board": "....../....../....../G..R../YYBRY./BYBGY.",
        "inv": {
          "Y": 2,
          "B": 1,
          "R": 1,
          "G": 2
        },
        "par": 6,
        "sc": "-",
        "reqBlack": false,
        "id": "e1",
        "name": "達人 1"
      },
      {
        "hint": "",
        "board": "....../....../....../YRB.../RBRGBB/YYGBBR",
        "inv": {
          "B": 2,
          "G": 1,
          "R": 2,
          "Y": 1
        },
        "par": 6,
        "sc": "-",
        "reqBlack": false,
        "id": "e2",
        "name": "達人 2"
      },
      {
        "hint": "",
        "board": "....../....../....../.RR.../RBYBG./RYGYB.",
        "inv": {
          "R": 1,
          "Y": 2,
          "G": 2,
          "B": 1
        },
        "par": 6,
        "sc": "-",
        "reqBlack": false,
        "id": "e3",
        "name": "達人 3"
      },
      {
        "hint": "",
        "board": "....../....../....../...Y.B/BRGYBG/BRBBGB",
        "inv": {
          "R": 1,
          "B": 2,
          "Y": 1,
          "G": 2
        },
        "par": 6,
        "sc": "-",
        "reqBlack": false,
        "id": "e4",
        "name": "達人 4"
      },
      {
        "hint": "",
        "board": "....../....../....../.B..../BBRGR./BGYRG.",
        "inv": {
          "B": 1,
          "G": 2,
          "Y": 1,
          "R": 2
        },
        "par": 6,
        "sc": "-",
        "reqBlack": false,
        "id": "e5",
        "name": "達人 5"
      },
      {
        "hint": "",
        "board": "....../....../....../YY.YR./YBGRB./RRYRB.",
        "inv": {
          "Y": 2,
          "B": 2,
          "G": 1,
          "R": 1
        },
        "par": 6,
        "sc": "-",
        "reqBlack": false,
        "id": "e6",
        "name": "達人 6"
      },
      {
        "hint": "",
        "board": "....../....../....../..BRY./YRBRRB/RYRYRY",
        "inv": {
          "B": 2,
          "R": 2,
          "Y": 2
        },
        "par": 6,
        "sc": "-",
        "reqBlack": false,
        "id": "e7",
        "name": "達人 7"
      },
      {
        "hint": "",
        "board": "....../....../....../.BYBR./BGYYG./YGYBB.",
        "inv": {
          "B": 2,
          "G": 2,
          "Y": 1,
          "R": 1
        },
        "par": 6,
        "sc": "-",
        "reqBlack": false,
        "id": "e8",
        "name": "達人 8"
      },
      {
        "hint": "",
        "board": "....../....../....../RBRY../RBBYG./GBRGB.",
        "inv": {
          "B": 2,
          "Y": 1,
          "G": 2,
          "R": 1
        },
        "par": 6,
        "sc": "-",
        "reqBlack": false,
        "id": "e9",
        "name": "達人 9"
      },
      {
        "hint": "",
        "board": "....../....../....../G.RB.Y/BBBRRB/GRYYYR",
        "inv": {
          "R": 5,
          "B": 1,
          "Y": 1
        },
        "par": 7,
        "sc": "-",
        "reqBlack": true,
        "id": "e10",
        "name": "達人 10"
      },
      {
        "hint": "",
        "board": "....../....../....../..Y.../GGYRGY/BRBYYG",
        "inv": {
          "G": 2,
          "R": 2,
          "B": 1,
          "Y": 2
        },
        "par": 7,
        "sc": "-",
        "reqBlack": false,
        "id": "e11",
        "name": "達人 11"
      },
      {
        "hint": "",
        "board": "....../....../....../G..R../RYBRRB/BGGYRB",
        "inv": {
          "R": 2,
          "B": 2,
          "Y": 2,
          "G": 1
        },
        "par": 7,
        "sc": "-",
        "reqBlack": false,
        "id": "e12",
        "name": "達人 12"
      },
      {
        "hint": "",
        "board": "....../....../....../..Y.R./BBGBG./RBYGG.",
        "inv": {
          "R": 4,
          "B": 2,
          "G": 1
        },
        "par": 7,
        "sc": "-",
        "reqBlack": true,
        "id": "e13",
        "name": "達人 13"
      },
      {
        "hint": "",
        "board": "....../....../....../R.B.../BBRBRG/RGRGGY",
        "inv": {
          "B": 2,
          "R": 2,
          "G": 2,
          "Y": 1
        },
        "par": 7,
        "sc": "-",
        "reqBlack": false,
        "id": "e14",
        "name": "達人 14"
      },
      {
        "hint": "",
        "board": "....../....../....../G.GB.G/YGGRBR/RRYRRB",
        "inv": {
          "G": 2,
          "R": 3,
          "B": 1,
          "Y": 1
        },
        "par": 7,
        "sc": "-",
        "reqBlack": false,
        "id": "e15",
        "name": "達人 15"
      },
      {
        "hint": "",
        "board": "....../....../....../R...../BYGYRR/GYRGYR",
        "inv": {
          "R": 4,
          "Y": 2,
          "G": 1
        },
        "par": 7,
        "sc": "-",
        "reqBlack": true,
        "id": "e16",
        "name": "達人 16"
      },
      {
        "hint": "",
        "board": "....../....../....../BR..R./BYGYYR/RRBGRR",
        "inv": {
          "R": 3,
          "B": 2,
          "Y": 2
        },
        "par": 7,
        "sc": "-",
        "reqBlack": true,
        "id": "e17",
        "name": "達人 17"
      },
      {
        "hint": "",
        "board": "....../....../....../RRBGRY/YRYRRY/BRRRBG",
        "inv": {
          "R": 1,
          "Y": 3,
          "B": 2,
          "G": 1
        },
        "par": 7,
        "sc": "-",
        "reqBlack": false,
        "id": "e18",
        "name": "達人 18"
      },
      {
        "hint": "",
        "board": "....../....../....../.....B/YYBRRB/RBYGYB",
        "inv": {
          "B": 2,
          "Y": 2,
          "R": 2,
          "G": 1
        },
        "par": 7,
        "sc": "-",
        "reqBlack": false,
        "id": "e19",
        "name": "達人 19"
      },
      {
        "hint": "",
        "board": "....../....../....../RGB.../BRYGY./YRYGR.",
        "inv": {
          "G": 2,
          "R": 4,
          "Y": 2
        },
        "par": 8,
        "sc": "-",
        "reqBlack": true,
        "id": "e20",
        "name": "達人 20"
      },
      {
        "hint": "",
        "board": "....../....../....../R...R./BYGYB./GYBBB.",
        "inv": {
          "R": 5,
          "B": 2,
          "G": 1
        },
        "par": 8,
        "sc": "-",
        "reqBlack": true,
        "id": "e21",
        "name": "達人 21"
      },
      {
        "hint": "",
        "board": "....../....../....../RGR.../RBGGRG/YGBYYG",
        "inv": {
          "G": 4,
          "R": 3,
          "Y": 2
        },
        "par": 9,
        "sc": "-",
        "reqBlack": true,
        "id": "e22",
        "name": "達人 22"
      },
      {
        "hint": "",
        "board": "....../....../....../YY.Y../BRRBRY/GBYGBR",
        "inv": {
          "Y": 3,
          "R": 2,
          "B": 2,
          "G": 2
        },
        "par": 9,
        "sc": "-",
        "reqBlack": false,
        "id": "e23",
        "name": "達人 23"
      },
      {
        "hint": "",
        "board": "....../....../....../B.Y.../GRRYR./RBGRB.",
        "inv": {
          "Y": 1,
          "R": 6,
          "G": 2
        },
        "par": 9,
        "sc": "-",
        "reqBlack": true,
        "id": "e24",
        "name": "達人 24"
      },
      {
        "hint": "",
        "board": "....../....../....../..Y.../RYRYGG/YRYGYR",
        "inv": {
          "Y": 4,
          "R": 5
        },
        "par": 9,
        "sc": "-",
        "reqBlack": true,
        "id": "e25",
        "name": "達人 25"
      }
    ]
  };
});
