import { createLines } from "../../template/createLines.js"

var path = [
   [
      109.054026519,
      11.883048759
   ],
   [
      109.054120933,
      11.883057158
   ],
   [
      109.054236804,
      11.883099154
   ],
   [
      109.054374133,
      11.883166347
   ],
   [
      109.054580127,
      11.883220941
   ],
   [
      109.056309616,
      11.883918068
   ],
   [
      109.056558524,
      11.88408605
   ],
   [
      109.05668727,
      11.884195238
   ],
   [
      109.056897556,
      11.884699184
   ],
   [
      109.057009135,
      11.884997351
   ],
   [
      109.057120716,
      11.885161133
   ],
   [
      109.057210838,
      11.88518633
   ],
   [
      109.057361041,
      11.885341713
   ],
   [
      109.057639991,
      11.885476098
   ],
   [
      109.059489643,
      11.886202615
   ],
   [
      109.060171996,
      11.886316002
   ],
   [
      109.060412322,
      11.886357998
   ],
   [
      109.060605441,
      11.886311803
   ],
   [
      109.060884391,
      11.886303404
   ],
   [
      109.061111842,
      11.886232012
   ],
   [
      109.061197674,
      11.88616062
   ],
   [
      109.061292087,
      11.886059832
   ],
   [
      109.061373626,
      11.885950644
   ],
   [
      109.061476623,
      11.885799461
   ],
   [
      109.061583912,
      11.885707072
   ],
   [
      109.061785614,
      11.8854551
   ],
   [
      109.062030231,
      11.885148534
   ],
   [
      109.06216756,
      11.885026748
   ],
   [
      109.063300525,
      11.883855074
   ],
   [
      109.064412032,
      11.882876576
   ],
   [
      109.064669525,
      11.882691795
   ],
   [
      109.065120136,
      11.88235163
   ],
   [
      109.065549289,
      11.882024062
   ],
   [
      109.065708076,
      11.881835081
   ],
   [
      109.065819656,
      11.881763688
   ],
   [
      109.066459094,
      11.881104353
   ],
   [
      109.067253028,
      11.880251833
   ],
   [
      109.067931091,
      11.879567296
   ],
   [
      109.068128502,
      11.879416109
   ],
   [
      109.068244373,
      11.879256524
   ],
   [
      109.068313038,
      11.87918513
   ],
   [
      109.068385994,
      11.879050742
   ],
   [
      109.06845895,
      11.878979348
   ],
   [
      109.068587696,
      11.878832361
   ],
   [
      109.068587696,
      11.878647577
   ],
   [
      109.068660652,
      11.878555185
   ],
   [
      109.068836605,
      11.877904241
   ],
   [
      109.068918144,
      11.877719457
   ],
   [
      109.068965351,
      11.87755987
   ],
   [
      109.06904689,
      11.877517873
   ],
   [
      109.069119846,
      11.877454879
   ],
   [
      109.069257175,
      11.877383485
   ],
   [
      109.069368755,
      11.877295292
   ],
   [
      109.06949321,
      11.877261695
   ],
   [
      109.069596206,
      11.877135705
   ],
   [
      109.069694912,
      11.877064311
   ],
   [
      109.069772159,
      11.876913123
   ],
   [
      109.069853699,
      11.876598148
   ],
   [
      109.069845115,
      11.876400764
   ],
   [
      109.069862281,
      11.876211778
   ],
   [
      109.069888031,
      11.876022793
   ],
   [
      109.069948112,
      11.875926201
   ],
   [
      109.070033943,
      11.875632223
   ],
   [
      109.070128357,
      11.875397041
   ],
   [
      109.070265686,
      11.875170258
   ],
   [
      109.070415889,
      11.87487628
   ],
   [
      109.070591843,
      11.874561302
   ],
   [
      109.070879375,
      11.874095136
   ],
   [
      109.071038162,
      11.873859952
   ],
   [
      109.071119701,
      11.873670965
   ],
   [
      109.071308529,
      11.87345258
   ],
   [
      109.071441566,
      11.873334988
   ],
   [
      109.071514522,
      11.873221596
   ],
   [
      109.071651851,
      11.873187998
   ],
   [
      109.071754848,
      11.873133402
   ],
   [
      109.071887886,
      11.873083005
   ],
   [
      109.072063839,
      11.873045207
   ],
   [
      109.072261249,
      11.87301161
   ],
   [
      109.07234708,
      11.87301161
   ],
   [
      109.072561657,
      11.872986412
   ],
   [
      109.072930729,
      11.872952814
   ],
   [
      109.073278343,
      11.872910816
   ],
   [
      109.073385631,
      11.87285202
   ],
   [
      109.073454296,
      11.872797424
   ],
   [
      109.073583042,
      11.87270503
   ],
   [
      109.073698913,
      11.872654633
   ],
   [
      109.073763287,
      11.872558039
   ],
   [
      109.073887741,
      11.872356453
   ],
   [
      109.074042236,
      11.872192663
   ],
   [
      109.074166691,
      11.872028873
   ],
   [
      109.074346935,
      11.87175589
   ],
   [
      109.074449932,
      11.871650897
   ],
   [
      109.074604427,
      11.871474507
   ],
   [
      109.074746048,
      11.871356915
   ],
   [
      109.074857628,
      11.871281319
   ],
   [
      109.074922001,
      11.871226723
   ],
   [
      109.075042164,
      11.871201524
   ],
   [
      109.075166618,
      11.871201524
   ],
   [
      109.07550565,
      11.871222523
   ],
   [
      109.075745975,
      11.871247721
   ],
   [
      109.075939095,
      11.871281319
   ],
   [
      109.076059257,
      11.871289719
   ],
   [
      109.076196587,
      11.871230922
   ],
   [
      109.076325333,
      11.871138528
   ],
   [
      109.07640258,
      11.871062932
   ],
   [
      109.076484119,
      11.870941139
   ],
   [
      109.076565659,
      11.870827746
   ],
   [
      109.076612865,
      11.870714353
   ],
   [
      109.076707279,
      11.870613558
   ],
   [
      109.076827442,
      11.870516964
   ],
   [
      109.07690469,
      11.870470767
   ],
   [
      109.076969063,
      11.870428769
   ],
   [
      109.077119267,
      11.870390971
   ],
   [
      109.077290928,
      11.870378372
   ],
   [
      109.077479756,
      11.870399371
   ],
   [
      109.077754413,
      11.870516964
   ],
   [
      109.077960407,
      11.87058416
   ],
   [
      109.078363812,
      11.87075215
   ],
   [
      109.07852689,
      11.870878143
   ],
   [
      109.079097664,
      11.87110073
   ],
   [
      109.079295074,
      11.871205724
   ],
   [
      109.079668438,
      11.871377913
   ],
   [
      109.079883014,
      11.871503906
   ],
   [
      109.080101883,
      11.8716005
   ],
   [
      109.080668365,
      11.87191968
   ],
   [
      109.081097519,
      11.872167465
   ],
   [
      109.081874286,
      11.87286042
   ],
   [
      109.082183277,
      11.873213197
   ],
   [
      109.082393562,
      11.87346518
   ],
   [
      109.082552349,
      11.873784358
   ],
   [
      109.082792675,
      11.874153932
   ],
   [
      109.082925713,
      11.874347118
   ],
   [
      109.083127415,
      11.874485708
   ],
   [
      109.083410656,
      11.874842682
   ],
   [
      109.083706772,
      11.875044268
   ],
   [
      109.083882725,
      11.875271051
   ],
   [
      109.084050095,
      11.875451637
   ],
   [
      109.084178841,
      11.875644823
   ],
   [
      109.084607994,
      11.876270574
   ],
   [
      109.084839737,
      11.876593949
   ],
   [
      109.085037148,
      11.876892125
   ],
   [
      109.085346138,
      11.877118907
   ],
   [
      109.085595047,
      11.877211299
   ],
   [
      109.085792458,
      11.877375086
   ],
   [
      109.08604995,
      11.877488476
   ],
   [
      109.086697971,
      11.877862245
   ],
   [
      109.089401638,
      11.87930692
   ],
   [
      109.089809334,
      11.879537899
   ],
   [
      109.090101158,
      11.87963449
   ],
   [
      109.090298569,
      11.879668087
   ],
   [
      109.090427315,
      11.879676487
   ],
   [
      109.090534604,
      11.879676487
   ],
   [
      109.090684808,
      11.879655488
   ],
   [
      109.090873634,
      11.879600893
   ],
   [
      109.090998089,
      11.8795295
   ],
   [
      109.091135418,
      11.879470705
   ],
   [
      109.09600631,
      11.877425482
   ],
   [
      109.096208012,
      11.877366686
   ],
   [
      109.096353924,
      11.877312091
   ],
   [
      109.096521294,
      11.877240697
   ],
   [
      109.096718704,
      11.877186101
   ],
   [
      109.096924698,
      11.877181902
   ],
   [
      109.097263729,
      11.877240697
   ],
   [
      109.097735799,
      11.877362487
   ],
   [
      109.098156368,
      11.877488477
   ],
   [
      109.09855119,
      11.87757247
   ],
   [
      109.098924553,
      11.877694259
   ],
   [
      109.103971398,
      11.879185131
   ],
   [
      109.104297554,
      11.879273323
   ],
   [
      109.10464946,
      11.879395112
   ],
   [
      109.104979908,
      11.87941611
   ],
   [
      109.105224526,
      11.879445508
   ],
   [
      109.105696595,
      11.879445508
   ],
   [
      109.107413208,
      11.879600894
   ],
   [
      109.107795154,
      11.879617692
   ],
   [
      109.108220017,
      11.879659688
   ],
   [
      109.108494675,
      11.879676487
   ],
   [
      109.108735001,
      11.879676487
   ],
   [
      109.108910954,
      11.879596694
   ],
   [
      109.10906974,
      11.879495903
   ],
   [
      109.109318649,
      11.879378314
   ],
   [
      109.109674847,
      11.879277523
   ],
   [
      109.110533153,
      11.878928954
   ],
   [
      109.11074773,
      11.878878558
   ],
   
]


export var QL27BKHLine = createLines(path, "Quốc Lộ 27B", "tỉnh Khánh Hòa")