import { createLines } from '../../template/createLines.js'

var paths = [

    [107.4984951718939,13.7683670200806],
    [107.49906380020512,13.768835944442298],
    [107.4998630984916,13.768960990779899],
    [107.5006141170157,13.76887762656227],
    [107.50177283131006,13.768346178976156],
    [107.5026204093587,13.768127347266072],
    [107.50268478237504,13.767971038776343],
    [107.50447649799686,13.766491313230505],
    [107.505238245357,13.766209955905321],
    [107.5058927043566,13.76623079720028],
    [107.50628967129077,13.766345424289337],
    [107.5069655879625,13.76669972584573],
    [107.5075878604539,13.76686645580418],
    [107.51007695041949,13.766824773325709],
    [107.5104095443373,13.766970661967841],
    [107.51055974804214,13.767074868085077],
    [107.51089234195996,13.767054026865345],
    [107.51141805492682,13.767220756571184],
    [107.51224417530332,13.7672520183778],
    [107.51267332874568,13.767199915364452],
    [107.51524824939975,13.767033185643754],
    [107.51568813167815,13.767147812339504],
    [107.51731891475909,13.768200291192189],
    [107.51867074810247,13.768460805028262],
    [107.51890678249575,13.768398281734077],
    [107.52067704044545,13.767762627294173],
    [107.52181429706765,13.76746043031507],
    [107.52240438305091,13.767158232945432],
    [107.52277989231297,13.766720567097037],
    [107.52309102855867,13.766189114608505],
    [107.52386350475489,13.76441759759117],
    [107.5241424544924,13.763906981371491],
    [107.52452869259052,13.763521413283286],
    [107.52570886455698,13.763052478265443],
    [107.52620239101567,13.763062899053821],
    [107.52841253124379,13.764042451089432],
    [107.52883095585008,13.764125817030704],
    [107.52957124553815,13.76420918294226],
    [107.5305690272916,13.764084134063777],
    [107.53121275745514,13.76386529836557],
    [107.53198523365135,13.763583937881307],
    [107.53302593074905,13.763104582202729],
    [107.53377694927313,13.762979532733706],
    [107.53422756038759,13.763073319841729],
    [107.53563303791127,13.763636041700224],
    [107.53587980114062,13.763802773842762],
    [107.5366415485008,13.763854877612928],
    [107.53705997310706,13.763813194597706],
    [107.53896970592555,13.763292156280903],
    [107.54037518344921,13.7629691119416],
    [107.54091162525215,13.762750275200235],
    [107.5417592033008,13.76213544706938],
    [107.54276771389031,13.761062099171486],
    [107.54325051151297,13.760614001019183],
    [107.54374403797166,13.760353478443072],
    [107.54459161602027,13.760290952981647],
    [107.547102163658,13.760509792023559],
    [107.54825014911627,13.760249269331407],
    [107.54910845600094,13.759634434627797],
    [107.54934449039423,13.759332227147354],
    [107.55027789913134,13.758060867265048],
    [107.55058903537704,13.75767528954218],
    [107.55113620601603,13.75727929013848],
    [107.55323905788352,13.75617465668127],
    [107.55390424571917,13.75609128790686],
    [107.55447287403025,13.756112130103253],
    [107.55493421398079,13.756205919964021],
    [107.55705852352041,13.757185500707877],
    [107.55851764522437,13.7576127633651],
    [107.56277699313964,13.758717390034015],
    [107.57122058711894,13.760999573899799],
    [107.57255096279025,13.761520617322969],
    [107.57419247470722,13.762573121498109],
    [107.57563013873906,13.764021609599823],
    [107.57858056865521,13.767397906753745],
    [107.58163828693193,13.770784575604221],
    [107.58222837291518,13.77124307469361],
    [107.58338708720952,13.7720350255481],
    [107.58432049594666,13.772472681448203],
    [107.58741040073157,13.773577237933242],
    [107.59278305567318,13.775490711797564],
    [107.59466060198378,13.775699116389879],
    [107.59659179247441,13.775553233194815],
    [107.60380157030667,13.774844656380143],
    [107.6063550332889,13.7749071779502],
    [107.60832913912391,13.775407349908585],
    [107.60974534548383,13.776157605839005],
    [107.61935838259348,13.782367965202564],
    [107.62111791170733,13.782826441564561],
    [107.62204059160847,13.783347436338044],
    [107.6240361551156,13.785243847499023],
    [107.62495883501676,13.785723157772004],
    [107.62617119349136,13.786973527766268],
    [107.62807019747375,13.788203051731392],
    [107.64557965792325,13.799330991014813],
    [107.64691003359466,13.799726919152599],
    [107.64841207064305,13.79960188928695],
    [107.64959224260961,13.79922679928792],
    [107.66153222117238,13.794947503562033],
    [107.66279822382747,13.794718277394887],
    [107.66982236164539,13.794259608936535],
    [107.67108836430045,13.79442631922627],
    [107.67269768970944,13.794843094429597],
    [107.67593779819951,13.79682276647986],
    [107.68042245167254,13.79982350050779],
    [107.68170991199972,13.800490325050028],
    [107.68439212101467,13.80088625122004],
    [107.68861928242228,13.80051116328626],
    [107.69597985857077,13.799744331805515],
    [107.69750335329125,13.800286127075163],
    [107.69849040620875,13.801036303063308],
    [107.69889810197903,13.801682286008647],
    [107.70177343004309,13.807746103196047],
    [107.70267465227214,13.808725467812168],
    [107.70475604646776,13.810329949886748],
    [107.70739534013849,13.811913583701362],
    [107.71367520107745,13.814869275817623],
    [107.71807402386197,13.817432206811336],
    [107.71957606091034,13.818224000929707],
    [107.72088497890967,13.818703243430742],
    [107.72230118526957,13.818932446017484],
    [107.72403925671127,13.819015792356732],
    [107.72564858212027,13.818703243430742],
    [107.7271077038244,13.818244837580687],
    [107.73127049221561,13.816952961695465],
    [107.73264378323128,13.816640410001808],
    [107.7353903652626,13.816890451390286],
    [107.73794382824487,13.817307186441386],
    [107.74247139706212,13.817911450941322],
    [107.74826496853444,13.81872408003886],
    [107.74905890240287,13.818869936243455],
    [107.76240557446134,13.823808156701501],
    [107.76502341045996,13.824433240432137],
    [107.77058094753895,13.825745910804134],
    [107.77229756130852,13.826141794066901],
    [107.77358502163568,13.826579348468863],
    [107.77523726238891,13.827600305541848],
    [107.77607411160159,13.828204543332912],
    [107.77899235500988,13.831350721656419],
    [107.77899235500988,13.831350721656419],
    [107.78060168041884,13.832434163949017],
    [107.78888434185707,13.835496944680598],
    [107.79085844769212,13.835934481493775],
    [107.79862612499943,13.836934562548032],
    [107.80753105892914,13.838122153215584],
    [107.81242340817248,13.839809771628227],
    [107.81390398754873,13.839893110491797],
    [107.81624287380978,13.839538920115332],
    [107.8175732494812,13.839559754858298],
    [107.81894654049687,13.839955614619894],
    [107.82274454846204,13.841330701187664],
    [107.82407492413346,13.841289032017192],
    [107.82531946911641,13.840705662846634],
    [107.82705754055812,13.839434746372541],
    [107.82778710141018,13.838538850258407],
    [107.82795876278713,13.838059648594767],
    [107.82849520459015,13.835934481493762],
    [107.82920330777011,13.834851055500057],
    [107.83098429455605,13.83420516452642],
    [107.83272236599768,13.833694701036839],
    [107.83361285939053,13.833757206830416],
    [107.83599466099554,13.834736462070962],
    [107.83647745861819,13.834715626895976],
    [107.83689588322447,13.834371846239598],
    [107.83746451153559,13.833569689399294],
    [107.83799022450248,13.832736276765923],
    [107.83840864910879,13.832309151634394],
    [107.83909529461653,13.832163303848956],
    [107.83947080387858,13.832225810053894],
    [107.83995360150124,13.832611264613446],
    [107.84076899304168,13.834090570779258],
    [107.84148246063958,13.834528110237283],
    [107.84406811012971,13.835028154324611],
    [107.84598857178423,13.835799053520246],
    [107.84853130593014,13.835955316559337],
    [107.84904629006095,13.83571571318983],
    [107.84930378212638,13.835403186684815],
    [107.84930378212638,13.835403186684815],
    [107.84944325699514,13.834955231295488],
    [107.84964710488025,13.832819618163569],
    [107.84982949509323,13.832444581639026],
    [107.85020500435527,13.832059126803376],
    [107.85146027817414,13.831579911793058],
    [107.85316616310746,13.83076732756372],
    [107.85355240120558,13.830402705512984],
    [107.85464674248355,13.828965047289348],
    [107.85524755730286,13.828537915236474],
    [107.86347584313489,13.824045532275578],
    [107.86368505543808,13.823800707606644],
    [107.86409275120843,13.822659925435968],
    [107.86430196351164,13.82231612697356],
    [107.86476330346227,13.821894191803274],
    [107.8661044079699,13.821414955867796],
    [107.87183660202393,13.819312068354709],
    [107.87469047241582,13.81829107494246],
    [107.8829087608377,13.814394589571624],
    [107.884217678837,13.81393617524389],
    [107.88507598572178,13.813998686341678],
    [107.88638490372108,13.814915513849346],
    [107.88694280319615,13.81664497409957],
    [107.88781183891693,13.818957846657286],
    [107.88853067093284,13.820270547893205],
    [107.88970011406325,13.821687423464377],
    [107.89086955719362,13.822635475099114],
    [107.89527910881371,13.826063014190208],
    [107.90239232712064,13.831584475596099],
    [107.90754216842878,13.835595266362565],
    [107.90859359436253,13.836803698857285],
    [107.90976303749292,13.838741344754329],
    [107.91061061554156,13.841314430214684],
    [107.91276711158956,13.847273045121648],
    [107.91309970550738,13.847856397813436],
    [107.91624325447256,13.851377316899823],
    [107.91947263412638,13.854814849153234],
    [107.92021292381443,13.855314849607462],
    [107.92442935638556,13.857752336409744],
    [107.92542713813903,13.858064832867765],
    [107.92668241195791,13.858116915569886],
    [107.92766946487532,13.857877335043401],
    [107.93396454791896,13.855940141186622],
    [107.93479066829548,13.855825558152688],
    [107.93580990772105,13.855950557823268],
    [107.93833118419485,13.856606804990227],
    [107.94194680194659,13.857419298913834],
    [107.94884544353242,13.858846364694227],
    [107.95154911021969,13.859210942137071],
    [107.96898541354234,13.865065875693588],
    [107.9701655855088,13.86565959990265],
    [107.97158179186856,13.866690801498374],
    [107.97413525485054,13.868794855189366],
    [107.98643695225805,13.878495770148357],
    [107.98722015729032,13.87884990111412],
    [107.98820721020773,13.878974888384688],
    [107.98923717846935,13.878995719589897],
    [107.99276024560784,13.878404883447981],
    [107.99383312921381,13.878509039711359],
    [107.99512058954102,13.87896732671444],
    [107.99821049432622,13.881154593115076],
    [107.99883276681769,13.881446227076179],
    [108.01042915333075,13.885916903268495],
    [108.01096559513374,13.886448082510332],
    [108.01118017185493,13.887114658659772],
    [108.01476360309896,13.894863465678846],
    [108.01787496555635,13.902007969324874],
    [108.0179393385727,13.902632842541035],
    [108.01705957401578,13.904965687643227],
    [108.01405549991902,13.908152482681686],
    [108.01023603428166,13.910318645102363],
    [108.00952793110172,13.910860182538487],
    [108.00888420093813,13.91108929414909],
    [108.00523639667777,13.915004984774603],
    [108.00508619297297,13.915671478704223],
    [108.00523639667782,13.921294944746633],
    [108.00652385700499,13.926626697314392],
    [108.00864816654487,13.935103097512968],
    [108.01308990467362,13.951097029616482],
    [108.01626564014725,13.959510059243561],
    [108.01626564014725,13.959510059243561],
    [108.01639438617997,13.961009378824702],
    [108.01699520099933,13.96659009375826],
    [108.01639438617997,13.968797354149457],
    [108.01514984119703,13.970629780669643],
    [108.01522494304953,13.972019708107617],
    [108.01591158855742,13.971920799690775],
    [108.01947204657293,13.970554564987422],
    [108.01986901350718,13.970387981306358],
    [108.02100627012938,13.970200574521147],
    [108.02308766432478,13.970106871071355],
    [108.02397815771764,13.970263043466483],
    [108.0249115664547,13.970606622363027],
    [108.02867738791133,13.971751881649528],
    [108.02939621992726,13.971876818681693],
    [108.03028671332014,13.97182476159319],
    [108.03439585753063,13.971033492399249],
    [108.0396100718558,13.970096459574473],
    [108.03985683508516,13.970127694063367],
    [108.04071514196984,13.969909052552044],
    [108.04103700705159,13.969773702941007],
    [108.04162709303485,13.969638353250446],
    [108.04215280600181,13.969560266854288],
    [108.04275898523929,13.969617530214046],
    [108.04480819292696,13.970773205886056],
    [108.04700223990146,13.971871612973727],
    [108.0481985051223,13.972308892062474],
    [108.05028385388032,13.97285168604484],
    [108.0508256601014,13.973127587249405],
    [108.0515498565355,13.973950083218238],
    [108.05165714489611,13.974179132205512],
    [108.05506891476342,13.978942258365041],
    [108.05676407086067,13.980930769302244],
    [108.0572790549915,13.98125351029444],
    [108.05834120976131,13.981794881264927],
    [108.0595106528917,13.98215926485486],
    [108.05996399767899,13.982168860099202],
    [108.06150895007177,13.981820092975148],
    [108.06377273447994,13.981091324144051],
    [108.06673389323215,13.980091865994316],
    [108.06904059298479,13.979477613519572],
    [108.06990962870556,13.979508846735826],
    [108.0708323086066,13.979602546359118],
    [108.07161551363889,13.979873233945447],
    [108.07549935229216,13.981945024542904],
    [108.07708722002883,13.982757078080665],
    [108.07805281527412,13.982871598220797],
    [108.07911497004392,13.982913241893982],
    [108.07957630999442,13.983090227420957],
    [108.08260184176294,13.985068291693871],
    [108.086635884121,13.986151014409254],
    [108.08989745028282,13.98881615630464],
    [108.09297662623163,13.989753112915286],
    [108.09646349795077,13.9898988613783],
    [108.10136657602955,13.990002967366777],
    [108.10343724138887,13.990138305081318],
    [108.10440283663416,13.99044021200368],
    [108.11551288007495,13.995845771883106],
    [108.11654284833656,13.99609561971384],
    [108.11764791845061,13.996074799071648],
    [108.11764791845061,13.996074799071648],
    [108.11930015920366,13.995408537525895],
    [108.12011555074412,13.994648580592818],
    [108.1209738576287,13.993878210726733],
    [108.1221808516852,13.992821550563256],
    [108.12292114137325,13.992373899965518],
    [108.12375799058582,13.992155279589412],
    [108.12464848397869,13.992280205544073],
    [108.12917605279544,13.993456588288138],
    [108.13050642846672,13.993768901279882],
    [108.13187971948223,13.993664796996438],
    [108.13457265733297,13.993310842080126],
    [108.13587084649606,13.993435767406933],
    [108.1379093253472,13.993623155269853],
    [108.13974395631324,13.99361274483703],
    [108.14110651849269,13.993456588288138],
    [108.1423725211476,13.993133864417631],
    [108.14364925263858,13.992623751569408],
    [108.14449683068723,13.992061585078874],
    [108.14487233994929,13.991551469851748],
    [108.14511910317863,13.991030942943242],
    [108.14628854630905,13.988345005370205],
    [108.14646020768599,13.988095149117527],
    [108.14751163361971,13.987231060817969],
    [108.14900294183187,13.985929716891967],
    [108.14943209527422,13.9857110903901],
    [108.15006509660167,13.985606982459041],
    [108.15081611512578,13.985856841414439],
    [108.15142765878105,13.986314915461127],
    [108.15364852784519,13.987855703287368],
    [108.1542493426645,13.988126381163973],
    [108.15483942864772,13.988261719982814],
    [108.15757528184265,13.988251309307264],
    [108.15854087708794,13.988532397381585],
    [108.15918460725146,13.988771842507278],
    [108.16223159669211,13.989906600799724],
    [108.1645704829534,13.991926248496574],
    [108.16926971314761,13.995132663039975],
    [108.17049280045845,13.99713144428284],
    [108.17248836396558,13.998776261643778],
    [108.17327156899809,13.999005285912316],
    [108.17711249230742,13.998578467773688],
    [108.17796007035625,13.998953234962283],
    [108.17996636269922,14.00038983685665],
    [108.1839574897136,14.00212832134168],
    [108.18592086671234,14.00239898241347],
    [108.18697229264654,14.002357342269464],
    [108.19051280854632,14.001222645436963],
    [108.19213286279147,14.001337156380712],
    [108.19440737603617,14.001899300185862],
    [108.19605961678938,14.002523902800773],
    [108.19748655198534,14.003554493403062],
    [108.20438789523894,14.008788497385991],
    [108.20517110027124,14.009246525732447],
    [108.20798649383022,14.010406002819126],
    [108.2083298165841,14.010489280181659],
    [108.213254352335,14.011228365450659],
    [108.21424140525228,14.011342871406306],
    [108.21493877959577,14.011571883146155],
    [108.22414412093512,14.014507377036097],
    [108.22510971618053,14.014444920110115],
    [108.22714819503192,14.013986902133642],
    [108.23013081145655,14.01327905437257],
    [108.23143972945581,14.013435197448683],
    [108.23293103766798,14.01408058770313],
    [108.23955072951671,14.017203418141113],
    [108.24169649672868,14.017682248384693],
    [108.24566616607085,14.018494175644904],
    [108.246588845972,14.019035458889151],
    [108.24733986449624,14.019868199848734],
    [108.25094475341233,14.026321839805082],
    [108.25160994124803,14.028486891243823],
    [108.25182451796931,14.029631862106772],
    [108.25150265288751,14.031422168724067],
    [108.2513095338384,14.033170826807462],
    [108.25201763701837,14.036917906352707],
    [108.25274719787045,14.040560841618513],
    [108.2533265550177,14.041414320934873],
    [108.25384153914855,14.042038815981224],
    [108.25519337249209,14.042871473394836],
    [108.2607079942269,14.043454331783517],
    [108.2678104836985,14.044016372396575],
    [108.26969875884507,14.044078821268451],
    [108.27042831969715,14.043745760421698],
    [108.27203764510611,14.042309429972622],
    [108.27313198638424,14.042184531247083],
    [108.27508463454708,14.043350250037175],
    [108.28298105788716,14.048679174666047],
    [108.29117788863688,14.054070421423116],
    [108.29489006591355,14.055236079702533],
    [108.29671396804372,14.055735645719134],
    [108.29788341117427,14.05551708572105],
    [108.29888119292781,14.055870944661045],
    [108.2996107537799,14.055891759875761],
    [108.30160631728702,14.055100780385443],
    [108.30216421676216,14.055090372742361],
    [108.30558671546494,14.055798091394541],
    [108.30600514007124,14.055704422875063],
    [108.3074857194473,14.054965480988319],
    [108.30798997474206,14.054934258039161],
    [108.30850495887287,14.055288117880208],
    [108.31342949462382,14.059940283139678],
    [108.31392302108252,14.060221283381123],
    [108.3149529893441,14.060533505466815],
    [108.31603660178604,14.060523098070837],
    [108.31703438353948,14.06019006114912],
    [108.31935181212816,14.05921176238789],
    [108.32759145313182,14.055556017446845],
    [108.32790258937752,14.055347864909088],
    [108.3375484376825,14.051099208565827],
    [108.3381492525018,14.050724526566263],
    [108.33854621943597,14.050297804653193],
    [108.34092802104118,14.045635035342308],
    [108.34150737818842,14.044927285272863],
    [108.3424515157617,14.04440687941474],
    [108.3494681745449,14.040805638477122],
    [108.35013336238065,14.040243589986684],
    [108.35142082270782,14.038828054346304],
    [108.3515924840848,14.037974565396134],
    [108.3521289258878,14.03641329689546],
    [108.35281557139564,14.035226725721508],
    [108.35311597880532,14.03339481430266],
    [108.35380262431319,14.032707843746156],
    [108.35687107142633,14.030730189741693],
    [108.35940307673648,14.029835035478834],
    [108.36088365611273,14.0290856013153],
    [108.36120552119468,14.02829973369343],
    [108.36123234328484,14.027977058790603],
    [108.36116260585042,14.027467023340796],
    [108.36078709658834,14.026389699835768],
    [108.36075491008016,14.025832820484448],
    [108.36128062304714,14.024932442598194],
    [108.36191898879277,14.024167378842224],
    [108.3624071508336,14.023589675947878],
    [108.36304551657922,14.023121267127681],
    [108.3649659782342,14.022616425439473],
    [108.36523419913573,14.022559175280977],
    [108.36548632678316,14.022470697735216],
    [108.36726731356929,14.021971059189296],
    [108.36784130629859,14.021794103610029],
    [108.36862451133103,14.021804512765529],
    [108.36862451133103,14.021804512765529],
    [108.37089902457613,14.023069221644246],
    [108.37276584205031,14.024464036519635],
    [108.37421423491821,14.024859579492949],
    [108.37672478255598,14.026264792434718],
    [108.3783019214566,14.027243231917174],
    [108.37867743071862,14.027399365490936],
    [108.37913877066914,14.027472227788982],
    [108.38217503127375,14.027378547687247],
    [108.38373071250227,14.026806057345143],
    [108.3848894267966,14.026483380340771],
    [108.3856726318289,14.026452153509812],
    [108.38981396254754,14.0272224140993],
    [108.39053279456344,14.027170369546369],
    [108.39149838980872,14.026858101980745],
    [108.39366561469258,14.026150293924585],
    [108.39426642951184,14.026067022244952],
    [108.39486724433114,14.026223156619462],
    [108.40010291632775,14.028461070973442],
    [108.40429789122666,14.030428335786379],
    [108.40555316504557,14.030792642232823],
    [108.41024166640317,14.031864740702533],
    [108.41252690848366,14.032281088271262],
    [108.41535932120311,14.032582939785792],
    [108.41616398390752,14.032405992394443],
    [108.41913587149575,14.031094495707073],
    [108.41962939795444,14.030907138425007],
    [108.42041260298669,14.030490788361172],
    [108.4228802352802,14.028731700996529],
    [108.42343813475529,14.028055125339959],
    [108.42446810301699,14.025286348777913],
    [108.4248114257709,14.024765898323809],
    [108.42715031203196,14.022350992765741],
    [108.42722541388437,14.021768080718966],
    [108.42716104086803,14.021216394739206],
    [108.42738634642527,14.020758390276553],
    [108.42899567183406,14.019790332381273],
    [108.42929607924371,14.019446826985098],
    [108.42928535040764,14.018947181854552],
    [108.42885619696528,14.018228940073465],
    [108.42895275648978,14.017677245584716],
    [108.4290493160143,14.017417011874965],
    [108.4292853504076,14.017156777870149],
    [108.4311092525376,14.016230342417954],
    [108.43125945624242,14.015959697647489],
    [108.43159205016022,14.015106123588726],
    [108.43191391524198,14.014783430129945],
    [108.43307262953631,14.01411722284456],
    [108.43400603827338,14.013669613738799],
    [108.43620544966541,14.012722345079005],
    [108.43663460310776,14.012451696172597],
    [108.43710667189434,14.011837530163065],
    [108.4373534351237,14.01133786846875],
    [108.43782550391029,14.009484946860061],
    [108.43822247084445,14.00890200213852],
    [108.43956357535181,14.0078714355283],
    [108.44032532271197,14.007090700169128],
    [108.44221359785826,14.004748478168677],
    [108.44925231012502,13.996001235492349],
    [108.4504217532554,13.99515799762907],
    [108.45412320169565,13.993846288138242],
    [108.45545357736694,13.993294535084553],
    [108.45611876520256,13.99279483306312],
    [108.45673030885791,13.992066099001821],
    [108.460034790364,13.986808734847612],
    [108.46036738428177,13.986079981818007],
    [108.46075362237985,13.984528771253874],
    [108.46117204698615,13.98377918924649],
    [108.46183723482179,13.983258644748995],
    [108.46295303377188,13.982935906569121],
    [108.46337145837818,13.982561113275997],
    [108.46360749277144,13.982332072629676],
    [108.46441215547584,13.98103070099346],
    [108.46481985124605,13.980770425783081],
    [108.46554941209806,13.980728781722098],
    [108.46583909067166,13.980884946911909],
    [108.46845692666997,13.982717277222312],
    [108.46902555498107,13.983102481170096],
    [108.46925086053832,13.983550149812688],
    [108.46983021768548,13.984861918028795],
    [108.47030228647209,13.985309583247899],
    [108.47091383012743,13.98547615613032],
    [108.47149318727459,13.985392869704185],
    [108.47227639230688,13.984966026297018],
    [108.47227639230688,13.984966026297018],
    [108.47361749681426,13.984049871919755],
    [108.47649282487797,13.981884401617242],
    [108.4769219783203,13.981384674807178],
    [108.47708291086118,13.981041111995754],
    [108.47740477594297,13.979708499874139],
    [108.47780174287716,13.978875613379703],
    [108.47957200082685,13.976054187982973],
    [108.48051613840002,13.975002651590929],
    [108.4815353778256,13.97264969137661],
    [108.48199671777614,13.971494025121483],
    [108.48295158418536,13.970119711755476],
    [108.48386353525035,13.969526255721245],
    [108.48441070588935,13.969390905885255],
    [108.48541921647886,13.96933884823485],
    [108.48674959215012,13.969047325175172],
    [108.48738259347759,13.968901563506954],
    [108.48913139375513,13.96894320970728],
    [108.49104112657383,13.968693332392384],
    [108.49307960542521,13.968880740404016],
    [108.49571889909592,13.968755801746537],
    [108.49670595201343,13.968776624860809],
    [108.49749988588185,13.968922386608122],
    [108.50172704728944,13.970588228597297],
    [108.50917285951499,13.97308696898822],
    [108.50973075899012,13.973357664236111],
    [108.51026720079312,13.973878231126074],
    [108.5105676082028,13.974315506404096],
    [108.51136154207123,13.975960486916065],
    [108.51200527223482,13.976481047920908],
    [108.5124773410215,13.976647627193838],
    [108.51578182252793,13.976876673497298],
    [108.51764864000235,13.977376410095609],
    [108.51985878023068,13.977584633358036],
    [108.52078146013183,13.977230653699833],
    [108.5255450633424,13.975085941778069],
    [108.5264248278993,13.974877716255552],
    [108.52730459245623,13.974898538816293],
    [108.52979368242212,13.975773084666173],
    [108.53058761629056,13.975814729623782],
    [108.53151029619171,13.975356634675798],
    [108.53202528032259,13.974711135701952],
    [108.53264755281407,13.973857408473071],
    [108.53348440202673,13.973357664236111],
    [108.53522247346841,13.972608045846986],
    [108.53522247346841,13.972608045846986],
    [108.53590911897628,13.97198336199193],
    [108.53625244173018,13.97110880174794],
    [108.53747552904102,13.969963539263317],
    [108.53837675127005,13.969651193960939],
    [108.54009336503962,13.96973448608299],
    [108.54116624864561,13.969505432674858],
    [108.5416812327765,13.969151440596068],
    [108.54204601320255,13.968651686146869],
    [108.54283994707097,13.966048780860975],
    [108.54346221956244,13.965465726045206],
    [108.54453510316844,13.965382432379647],
    [108.54556507143016,13.96615289763708],
    [108.54693836244584,13.968547570500128],
    [108.54871934923177,13.970858926782482],
    [108.54951328310021,13.971296207794104],
    [108.55069345506679,13.971671019428914],
    [108.55170196565643,13.972962032612623],
    [108.55281776460667,13.973191082582764],
    [108.55281776460667,13.973191082582764],
    [108.55378335985208,13.97304532353722],
    [108.55646556886704,13.97402398964436],
    [108.55970567735713,13.97444044204529],
    [108.56131500276611,13.974502909840464],
    [108.56543487581308,13.973316018834078],
    [108.56627172502574,13.972691336899631],
    [108.56691545518933,13.971608550865474],
    [108.56766647371352,13.971129624649496],
    [108.56766647371352,13.971129624649496],
    [108.56766647371352,13.971129624649496],
    [108.5686106112868,13.9710879788445],
    [108.5704559710891,13.96948460962646],
    [108.57210821184233,13.967985345194586],
    [108.57609933885662,13.965007610511961],
    [108.57704347642989,13.964653611521468],
    [108.57794469865892,13.963779023448527],
    [108.57865280183887,13.963383375372603],
    [108.58017629655939,13.96359161128673],
    [108.58378118547549,13.964466200071021],
    [108.58815855058789,13.964841022819492],
    [108.58895248445631,13.964611964545659],
    [108.59154886278279,13.962779490157514],
    [108.59311527284756,13.962217250776034],
    [108.59629100832126,13.961675833778877],
    [108.60090440782703,13.961321829669943],
    [108.60493845018553,13.960884529725803],
    [108.60493845018553,13.960884529725803],
    [108.60963768037975,13.959718392484978],
    [108.60963768037975,13.959718392484978],
    [108.61697620424471,13.960093222955823],
    [108.62255519899581,13.961967366166167],
    [108.6275333789276,13.961384301022795],
    [108.63040870699162,13.961425948581956],
    [108.63332695039989,13.961925718704853],
    [108.63512939485796,13.961967366166167],
    [108.63776868852865,13.961446772358713],
    [108.6435837176731,13.957198682943687],
    [108.6475963023595,13.955428622582215],
    [108.6524886516028,13.954033388955352],
    [108.65778869661636,13.952284128899123],
    [108.65961259874653,13.951909285732217],
    [108.66098588976219,13.951950935003078],
    [108.6622948077615,13.952596497739489],
    [108.66508430513711,13.955428622582215],
    [108.66617864641523,13.95671972677523],
    [108.66675800356252,13.958031647822958],
    [108.66841024431572,13.964153847314785],
    [108.66896814379083,13.96511172775852],
    [108.67049163851135,13.966694304114286],
    [108.67263740572334,13.970775635067023],
    [108.67383903536205,13.971858425017485],
    [108.67684310945884,13.973961521719179],
    [108.68201440843968,13.9752316995317],
    [108.68286198648832,13.975387868451065],
    [108.68749684366612,13.97640816945095],
    [108.68837660822302,13.976345702172745],
    [108.6896640685502,13.976324879742915],
    [108.69170254740158,13.976574748776626],
    [108.69393414530205,13.977053663666469],
    [108.69558638605528,13.977449288258745],
    [108.69798964533268,13.977428465928734],
    [108.6998564628071,13.977803267580738],
    [108.70361155542805,13.977907379042415],
    [108.70683020624601,13.978573691282138],
    [108.70796746286833,13.978761091252016],
    [108.7084609893271,13.978719446827444],
    [108.71386832270127,13.977303531909126],
    [108.7157351401757,13.97724106487389],
    [108.71852463755125,13.976741327981747],
    [108.71931857141968,13.976782972764196],
    [108.7200052169275,13.977012018933003],
    [108.7207562354517,13.977053663666469],
    [108.72240847620493,13.976782972764196],
    [108.72654980692406,13.977365998927402],
    [108.7278158095791,13.977386821263075],
    [108.73150652918369,13.976991196563437],
    [108.732461395593,13.976637215992632],
    [108.73496121439517,13.974908950095791],
    [108.73496121439517,13.974908950095791],
    [108.7360984710175,13.974346740320607],
    [108.7380296615083,13.973055734900532],
    [108.74238556894865,13.9698906587305],
    [108.74307221445648,13.969599136369196],
    [108.74380177530854,13.969640782443408],
    [108.74622649225806,13.970036419772773],
    [108.74706334147074,13.969661605477683],
    [108.75206297907462,13.96672553906445],
    [108.75292128595942,13.965955075722093],
    [108.75392979654904,13.96499719878455],
    [108.7557322410071,13.963872729472126],
]
export var QL19 = createLines(paths,"QL19","QL19")
