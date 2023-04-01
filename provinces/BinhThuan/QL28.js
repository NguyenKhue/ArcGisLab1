import { createLines } from "../../template/createLines.js"

var path = [
   [
      108.102424035,
      10.951058336
   ],
   [
      108.10280169,
      10.952018985
   ],
   [
      108.106286416,
      10.959164777
   ],
   [
      108.109839808,
      10.967961953
   ],
   [
      108.111607919,
      10.974517532
   ],
   [
      108.11258639,
      10.979438335
   ],
   [
      108.112689386,
      10.980045003
   ],
   [
      108.113273034,
      10.98147741
   ],
   [
      108.114148507,
      10.983600729
   ],
   [
      108.116998087,
      10.991268147
   ],
   [
      108.118989358,
      10.997503041
   ],
   [
      108.120620141,
      11.003316542
   ],
   [
      108.121529946,
      11.005877816
   ],
   [
      108.122285256,
      11.007950409
   ],
   [
      108.123795877,
      11.011927051
   ],
   [
      108.124619852,
      11.0144377
   ],
   [
      108.125066171,
      11.01585309
   ],
   [
      108.125598321,
      11.019138791
   ],
   [
      108.12578715,
      11.020958548
   ],
   [
      108.125890146,
      11.023418571
   ],
   [
      108.12595881,
      11.02621556
   ],
   [
      108.126061808,
      11.027260211
   ],
   [
      108.126336466,
      11.028186915
   ],
   [
      108.126782785,
      11.030343596
   ],
   [
      108.127091776,
      11.03238232
   ],
   [
      108.127177607,
      11.033174216
   ],
   [
      108.127417932,
      11.035684684
   ],
   [
      108.127263437,
      11.037436944
   ],
   [
      108.126696956,
      11.045675796
   ],
   [
      108.127057444,
      11.047394299
   ],
   [
      108.127452265,
      11.048893771
   ],
   [
      108.127484451,
      11.049504508
   ],
   [
      108.127699028,
      11.052360215
   ],
   [
      108.128016601,
      11.055662355
   ],
   [
      108.128205429,
      11.056033001
   ],
   [
      108.128814827,
      11.057254445
   ],
   [
      108.128836285,
      11.061228313
   ],
   [
      108.128784786,
      11.063014115
   ],
   [
      108.128973613,
      11.06357007
   ],
   [
      108.129196773,
      11.064968376
   ],
   [
      108.129608761,
      11.067225868
   ],
   [
      108.129780423,
      11.068169294
   ],
   [
      108.130020748,
      11.069331723
   ],
   [
      108.130312573,
      11.071690262
   ],
   [
      108.13027824,
      11.072465206
   ],
   [
      108.130449902,
      11.073341227
   ],
   [
      108.13072456,
      11.076221971
   ],
   [
      108.130982052,
      11.078799456
   ],
   [
      108.131136547,
      11.080467227
   ],
   [
      108.131823193,
      11.084021739
   ],
   [
      108.13201202,
      11.085740019
   ],
   [
      108.132183681,
      11.087458288
   ],
   [
      108.132630002,
      11.092276127
   ],
   [
      108.132732999,
      11.094230192
   ],
   [
      108.13237251,
      11.096824362
   ],
   [
      108.132063519,
      11.098997384
   ],
   [
      108.13214935,
      11.100344986
   ],
   [
      108.132441173,
      11.103545515
   ],
   [
      108.13237251,
      11.105651108
   ],
   [
      108.132080685,
      11.110889757
   ],
   [
      108.131926191,
      11.112220458
   ],
   [
      108.131050717,
      11.117037889
   ],
   [
      108.131119381,
      11.117391613
   ],
   [
      108.131273877,
      11.117795868
   ],
   [
      108.133093487,
      11.122276334
   ],
   [
      108.133144986,
      11.122663739
   ],
   [
      108.133179318,
      11.124718663
   ],
   [
      108.133299482,
      11.125341874
   ],
   [
      108.133522641,
      11.125762962
   ],
   [
      108.135359417,
      11.129889596
   ],
   [
      108.138929974,
      11.137620557
   ],
   [
      108.139942776,
      11.139725904
   ],
   [
      108.140492092,
      11.141561753
   ],
   [
      108.141024242,
      11.142639678
   ],
   [
      108.141848217,
      11.143768126
   ],
   [
      108.143736493,
      11.147557658
   ],
   [
      108.145144115,
      11.150336618
   ],
   [
      108.145607602,
      11.151262932
   ],
   [
      108.146671902,
      11.15399133
   ],
   [
      108.147221218,
      11.155473411
   ],
   [
      108.147719036,
      11.156534443
   ],
   [
      108.148594509,
      11.158083879
   ],
   [
      108.148714673,
      11.158656494
   ],
   [
      108.148680339,
      11.159734355
   ],
   [
      108.14845718,
      11.161300615
   ],
   [
      108.148216854,
      11.162125845
   ],
   [
      108.148096691,
      11.162277417
   ],
   [
      108.147856366,
      11.16254688
   ],
   [
      108.147804867,
      11.162732135
   ],
   [
      108.147719036,
      11.162951072
   ],
   [
      108.147753368,
      11.163203692
   ],
   [
      108.147822033,
      11.163372105
   ],
   [
      108.149572979,
      11.165443584
   ],
   [
      108.149933468,
      11.16594882
   ],
   [
      108.150637279,
      11.166723514
   ],
   [
      108.151512752,
      11.167195066
   ],
   [
      108.153624188,
      11.168609715
   ],
   [
      108.156199108,
      11.170546428
   ],
   [
      108.156954419,
      11.171085337
   ],
   [
      108.157194744,
      11.171455837
   ],
   [
      108.15765823,
      11.172365242
   ],
   [
      108.157950054,
      11.173038874
   ],
   [
      108.160301815,
      11.180111914
   ],
   [
      108.160542142,
      11.180785528
   ],
   [
      108.160301815,
      11.181947509
   ],
   [
      108.160301815,
      11.182469557
   ],
   [
      108.160130154,
      11.18364837
   ],
   [
      108.159872662,
      11.184271456
   ],
   [
      108.156542431,
      11.191563138
   ],
   [
      108.156439435,
      11.192203046
   ],
   [
      108.156611096,
      11.192624038
   ],
   [
      108.156885754,
      11.193129226
   ],
   [
      108.158997188,
      11.196699201
   ],
   [
      108.159323345,
      11.197254902
   ],
   [
      108.159666668,
      11.19779376
   ],
   [
      108.159941326,
      11.198231583
   ],
   [
      108.159992824,
      11.198736762
   ],
   [
      108.159718167,
      11.199292459
   ],
   [
      108.159409176,
      11.199561886
   ],
   [
      108.159031521,
      11.199814475
   ],
   [
      108.154482495,
      11.204074767
   ],
   [
      108.15041412,
      11.207610931
   ],
   [
      108.14943565,
      11.208654932
   ],
   [
      108.149263988,
      11.20944635
   ],
   [
      108.149178158,
      11.210422991
   ],
   [
      108.149143826,
      11.212005816
   ],
   [
      108.1489035,
      11.212864578
   ],
   [
      108.148646008,
      11.213487601
   ],
   [
      108.146362912,
      11.217091002
   ],
   [
      108.144972454,
      11.219330476
   ],
   [
      108.144732129,
      11.219751427
   ],
   [
      108.144560468,
      11.220408111
   ],
   [
      108.144663464,
      11.221351039
   ],
   [
      108.144646298,
      11.222293963
   ],
   [
      108.144268643,
      11.222866452
   ],
   [
      108.143616331,
      11.22311902
   ],
   [
      108.1424147,
      11.223304236
   ],
   [
      108.141728054,
      11.22359048
   ],
   [
      108.141522061,
      11.223960912
   ],
   [
      108.141522061,
      11.224617586
   ],
   [
      108.141419064,
      11.225291096
   ],
   [
      108.141075741,
      11.225712038
   ],
   [
      108.139462125,
      11.226537086
   ],
   [
      108.137676846,
      11.227395804
   ],
   [
      108.13637222,
      11.228102985
   ],
   [
      108.135719907,
      11.228961699
   ],
   [
      108.135565411,
      11.229904599
   ],
   [
      108.135771405,
      11.230796984
   ],
   [
      108.136028897,
      11.231419968
   ],
   [
      108.136080395,
      11.232278673
   ],
   [
      108.135977399,
      11.232952165
   ],
   [
      108.134741437,
      11.234551703
   ],
   [
      108.133814465,
      11.235444073
   ],
   [
      108.133711469,
      11.2364543
   ],
   [
      108.133780133,
      11.237329827
   ],
   [
      108.133711468,
      11.238794645
   ],
   [
      108.132728707,
      11.241579043
   ],
   [
      108.132089268,
      11.242782871
   ],
   [
      108.131977688,
      11.243090141
   ],
   [
      108.131934773,
      11.243372156
   ],
   [
      108.131921899,
      11.243734144
   ],
   [
      108.131544243,
      11.245283113
   ],
   [
      108.131449829,
      11.245426223
   ],
   [
      108.13066877,
      11.246453252
   ],
   [
      108.130445611,
      11.246680545
   ],
   [
      108.130200993,
      11.24684891
   ],
   [
      108.130033623,
      11.246970974
   ],
   [
      108.129750382,
      11.247067784
   ],
   [
      108.128256928,
      11.247501323
   ],
   [
      108.127935063,
      11.247602341
   ],
   [
      108.127634656,
      11.247838051
   ],
   [
      108.127317082,
      11.248221079
   ],
   [
      108.126986634,
      11.248768262
   ],
   [
      108.126806389,
      11.249172334
   ],
   [
      108.127055298,
      11.249951014
   ],
   [
      108.127162587,
      11.250174095
   ],
   [
      108.127248417,
      11.250569748
   ],
   [
      108.127269875,
      11.251083253
   ],
   [
      108.127630364,
      11.253617095
   ],
   [
      108.127596032,
      11.253840173
   ],
   [
      108.127553116,
      11.25397907
   ],
   [
      108.127432953,
      11.254256865
   ],
   [
      108.127051007,
      11.25487138
   ],
   [
      108.126806389,
      11.255128129
   ],
   [
      108.126505982,
      11.255410132
   ],
   [
      108.126317154,
      11.255620582
   ],
   [
      108.123965394,
      11.257392562
   ],
   [
      108.123767983,
      11.257501995
   ],
   [
      108.123489033,
      11.257506204
   ],
   [
      108.123235833,
      11.257451488
   ],
   [
      108.1229483,
      11.257388353
   ],
   [
      108.122729432,
      11.257266293
   ],
   [
      108.122094285,
      11.256963247
   ],
   [
      108.121776711,
      11.25691274
   ],
   [
      108.121544968,
      11.257076889
   ],
   [
      108.121360432,
      11.257245248
   ],
   [
      108.12115873,
      11.257514622
   ],
   [
      108.120828282,
      11.257842921
   ],
   [
      108.120060097,
      11.258646831
   ],
   [
      108.119836938,
      11.258785726
   ],
   [
      108.119643819,
      11.258865696
   ],
   [
      108.119390618,
      11.258987756
   ],
   [
      108.11883701,
      11.259396022
   ],
   [
      108.118437898,
      11.259648559
   ],
   [
      108.118124615,
      11.259892677
   ],
   [
      108.117485177,
      11.260225182
   ],
   [
      108.11712898,
      11.260393539
   ],
   [
      108.116558205,
      11.260629238
   ],
   [
      108.116064679,
      11.260839684
   ],
   [
      108.115386617,
      11.261024876
   ],
   [
      108.114794385,
      11.261391052
   ],
   [
      108.114300858,
      11.261715137
   ],
   [
      108.113927495,
      11.261883493
   ],
   [
      108.110550057,
      11.263987935
   ],
   [
      108.110202443,
      11.264282556
   ],
   [
      108.110073697,
      11.264492999
   ],
   [
      108.109962117,
      11.264880214
   ],
   [
      108.10980333,
      11.265423156
   ],
   [
      108.109670293,
      11.265658852
   ],
   [
      108.109365594,
      11.265911382
   ],
   [
      108.108743321,
      11.266437487
   ],
   [
      108.108644616,
      11.266521664
   ],
   [
      108.108078133,
      11.266694226
   ],
   [
      108.10764898,
      11.266774194
   ],
   [
      108.107279908,
      11.26678682
   ],
   [
      108.106760632,
      11.26678682
   ],
   [
      108.106455933,
      11.266774194
   ],
   [
      108.106155526,
      11.266854161
   ],
   [
      108.106073987,
      11.266972009
   ],
   [
      108.106073987,
      11.267152988
   ],
   [
      108.106073987,
      11.267342385
   ],
   [
      108.106065404,
      11.267401309
   ],
   [
      108.105670583,
      11.267931619
   ],
   [
      108.105537545,
      11.268163104
   ],
   [
      108.105395924,
      11.268344083
   ],
   [
      108.105207097,
      11.268440885
   ],
   
]


export var QL28BTLine = createLines(path, "Quốc Lộ 28", "tỉnh Bình Thuận")