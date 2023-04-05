import { createLines } from '../../template/createLines.js'

var paths = [

    [109.17723857005059,13.682404501730979],
    [109.17723857005055,13.680726172003236],
    [109.17831145365643,13.67933971668026],
    [109.17954526980317,13.678630849149773],
    [109.1803392036715,13.677108861652622],
    [109.18134771426101,13.67597257690111],
    [109.18193780024427,13.67409613136242],
    [109.1826351745882,13.672490716089051],
    [109.18368660052211,13.670781041038568],
    [109.18493114550505,13.669154753255361],
    [109.18546758730803,13.668675204714447],
    [109.18621860583222,13.668320755165523],
    [109.18639026720918,13.668008005120694],
    [109.18626152117646,13.667632704518907],
    [109.1859718426028,13.667518029215783],
    [109.18486677248876,13.66791418002625],
    [109.18418012698105,13.6684458550671],
    [109.18308578570308,13.668925404074804],
    [109.18282829363767,13.668914979106757],
    [109.18259225924437,13.668748179555239],
    [109.1824313267035,13.668654354755619],
    [109.18207727511354,13.666663175197522],
    [109.18118678172063,13.663764988495455],
    [109.18097220499938,13.661909296280024],
    [109.18106876452396,13.659970186558512],
    [109.1807039840979,13.65773914811466],
    [109.17967401583616,13.655654046373154],
    [109.17952381213132,13.65517447036478],
    [109.18109022219606,13.651775708100653],
    [109.18186269839238,13.646833862111967],
    [109.18227039416267,13.645374225354379],
    [109.18271503676439,13.642845935004853],
    [109.18275795210869,13.638498202615448],
    [109.18287596930533,13.637653669772119],
    [109.1836699031737,13.634817685532894],
    [109.18504926725808,13.629850369421844],
    [109.1865942196507,13.624428426101412],
    [109.20007517199573,13.577771631083776],
    [109.2002468333728,13.577563051228179],
    [109.20122315745415,13.576624439609377],
    [109.20181324343737,13.576301139191989],
    [109.20244624476483,13.576175990525053],
    [109.20288612704323,13.576311568244593],
    [109.20340111117405,13.576853878347993],
    [109.20366933207549,13.576999884702504],
    [109.20692016940126,13.578240935087855],
    [109.20731713633545,13.578585090767557],
    [109.20857241015428,13.579805275063185],
    [109.20894791941632,13.57995127960118],
    [109.20929124217021,13.579992995166949],
    [109.20977403979289,13.579888706238819],
    [109.20991351466184,13.579794846164138],
    [109.21272446970926,13.577166748997572],
    [109.21305706362709,13.576916452510886],
    [109.21573491428794,13.57477418346571],
    [109.21617479656635,13.574534313585794],
    [109.21917887066323,13.57349139824549],
    [109.22138014525078,13.572765485704426],
    [109.2223886558404,13.57209801543963],
    [109.22303238600404,13.571493118890746],
    [109.22457733839666,13.569782713410412],
    [109.22477045744584,13.569626273269524],
    [109.22561803549448,13.569219528420941],
    [109.22645488470704,13.569063087908997],
    [109.22831097334519,13.568729347805634],
    [109.22889033049235,13.568708489033591],
    [109.22933021277075,13.568854500399372],
    [109.22958770483615,13.569042229166278],
    [109.2303279945242,13.570033017421144],
    [109.23041382521266,13.570262462532547],
    [109.23049965590116,13.570502336730053],
    [109.23060694426177,13.571753850350536],
    [109.23081079214687,13.57206672772456],
    [109.23115411490076,13.57226488318144],
    [109.23158326834307,13.572400463135562],
    [109.23410454481704,13.573015786569375],
    [109.23451224058726,13.573026215766363],
    [109.2350272247181,13.572911494574248],
    [109.24033799856745,13.572264883181555],
    [109.2406169483049,13.572171020090856],
    [109.24332061499202,13.571388826226189],
    [109.24365320890983,13.571159382203577],
    [109.24379268377861,13.571023801540498],
    [109.2447475501879,13.569323822038037],
    [109.24562731474471,13.568406036632805],
    [109.24578824728562,13.567978430857353],
    [109.24576678961348,13.567582112621675],
    [109.24572387426925,13.567227511534256],
    [109.24545565336788,13.5664035834332],
    [109.2451123306139,13.564265528823412],
    [109.24518743246632,13.56367104192622],
    [109.24568095892532,13.561418235969734],
    [109.24553075522049,13.560855031141962],
    [109.2421189853535,13.557288036225206],
    [109.24181857794382,13.55689170015094],
    [109.24166837423898,13.556474503569104],
    [109.2416898319111,13.556036446369854],
    [109.24173274725533,13.555660968127766],
    [109.2419044086323,13.55528548929239],
    [109.24252668112379,13.554179909276508],
    [109.24282708853347,13.553867008338239],
    [109.24317041128738,13.55376270793393],
    [109.24359956472973,13.55347066655839],
    [109.24503722876175,13.552865722567525],
    [109.24550929754838,13.552552819899134],
    [109.24658218115437,13.551593249147604],
    [109.24714008062952,13.551280344804182],
    [109.25010123938203,13.549966142064171],
    [109.2507235118735,13.549361189154776],
    [109.25108829229954,13.548756234706108],
    [109.25130286902073,13.54806783639217],
    [109.25136724203713,13.545376805678986],
    [109.25113120764381,13.54422945774365],
    [109.25106683462747,13.543707934125155],
    [109.25121703833229,13.543332436411788],
    [109.25244012564313,13.541767856225675],
    [109.25304094046251,13.537491284550793],
    [109.25293365210192,13.536844576777852],
    [109.2524830409874,13.536239590496004],
    [109.25164619177471,13.535718049363519],
    [109.25074496954566,13.535196507088157],
    [109.25022998541478,13.53461237838296],
    [109.2500797817099,13.534278589907787],
    [109.24924293249724,13.530982403583701],
    [109.24907127112027,13.53062774790542],
    [109.24778381079311,13.528708425657861],
    [109.2476765224325,13.528353766592568],
    [109.24761214941614,13.52801996934273],
    [109.2473224708425,13.52757142855141],
    [109.24671092718712,13.526924693830406],
    [109.24546638220431,13.526225801109138],
    [109.24518743246679,13.525871138346744],
    [109.24482265204078,13.525433024793486],
    [109.2445544311393,13.524754990324839],
    [109.24443641394265,13.523951777764609],
    [109.24508014410618,13.520676311492915],
    [109.24549856871246,13.519549707590821],
    [109.24583116263027,13.519101150850979],
    [109.24630323141686,13.518819498513052],
    [109.24856701582526,13.517599001202143],
    [109.24874940603826,13.517338210367988],
    [109.24888888090703,13.516962671065496],
    [109.24889960974309,13.516649721194735],
    [109.24869576185796,13.515450076217041],
    [109.24733319967825,13.513165518215567],
    [109.24737611502249,13.512664790249126],
    [109.24849191397276,13.505904859789613],
    [109.24904981344788,13.503672371535925],
    [109.24907127112,13.50260828099807],
    [109.24892106741515,13.501648508991547],
    [109.2483417102679,13.50037576189875],
    [109.24801984518609,13.500000195885821],
    [109.24698987692437,13.499228197225408],
    [109.24611011236748,13.498497925924006],
    [109.24550929754811,13.498351871395592],
    
[109.24371758192629,13.498518790849278],
[109.24296656340215,13.498435331137136],
[109.23998394697752,13.496828725987994],
[109.23976937025634,13.496599210083893],
[109.23964062422364,13.49609844734558],
[109.23938313215824,13.494460528552352],
[109.23925438612554,13.494157981813274],
[109.23888960569955,13.493552887185016],
[109.23863211363414,13.492843463943919],
[109.23861065596202,13.492499184258472],
[109.23867502897838,13.49217576955635],
[109.23962989538762,13.489817958814532],
[109.23973718374823,13.489411077614694],
[109.23968353956792,13.489066792981118],
[109.2395333358631,13.488785105184549],
[109.23936167448618,13.488586880239685],
[109.2386428424702,13.488263460239624],
[109.23410454481738,13.486802848333538],
[109.2331389495721,13.486364663020286],
[109.23247376173641,13.485884744850294],
[109.23184076040896,13.485269196221047],
[109.22825196474717,13.480908145264193],
[109.22800520151777,13.480548198507837],
[109.22777453154247,13.4799222028579],
[109.2278389045588,13.479045806193772],
[109.22857919424685,13.47745993739584],
[109.22886887282046,13.476698299299455],
[109.22954478949214,13.47452813908921],
[109.22958770483636,13.474048197152309],
[109.22948041647591,13.471053755055035],
[109.22885814398444,13.468925278644274],
[109.22729173391966,13.465315172414321],
[109.22557512015008,13.463270116973428],
[109.22458806723259,13.46285275657304],
[109.22280708044661,13.46289449264583],
[109.21993175238256,13.46343706092979],
[109.21718517035124,13.464209175213186],
[109.21643415182716,13.46426134500733],
[109.21571531981121,13.464010929891629],
[109.21459952086109,13.463332720970792],
[109.2142025539269,13.463051002854069],
[109.2101577827325,13.459263427088421],
[109.20715370863573,13.456550526071416],
[109.20639196127553,13.455726215442962],
[109.20626321524283,13.455423619690187],
[109.2062632152429,13.45506363458979],
[109.2064885208002,13.454568002044269],
[109.20722344607039,13.453321090367222],
[109.20748093813565,13.452835888671574],
[109.20967731717886,13.447512846741084],
[109.20998845342459,13.446125029287208],
[109.21012792829335,13.44583285616752],
[109.2120913052921,13.443787634356367],
[109.21267066243928,13.443485023524609],
[109.21363625768453,13.443161542557842],
[109.21541724447047,13.442869365825528],
[109.21730551961699,13.442159792278643],
[109.21775613073147,13.441638045683609],
[109.21788487676424,13.441241517511932],
[109.21812091115756,13.437818826032316],
[109.21812091115756,13.436545739297005],
[109.21831403020667,13.435669183845848],
[109.21966586355022,13.431933352075204],
[109.21973023656656,13.431453324780495],
[109.21938691381264,13.42967930253204],
[109.21917233709142,13.429241012661883],
[109.21702656987944,13.426673870203988],
[109.21556744817529,13.42525462518847],
[109.21438727620865,13.421581246183008],
[109.21406541112687,13.41868007190644],
[109.21282086614391,13.409830230295867],
[109.2129925275208,13.401940238214035],
[109.21320710424199,13.400646087810868],
[109.21325001958623,13.399936389471714],
[109.21260628942262,13.395511164356325],
[109.21303544286502,13.394717955024767],
[109.2138937497498,13.394175231343803],
[109.21552453283093,13.393549010190759],
[109.2180136227968,13.391795582292216],
[109.21930108312398,13.39054312597133],
[109.22286305669587,13.388413935268176],
[109.22483716253087,13.388246939122386],
[109.22801289800461,13.387244959814867],
[109.22895703557786,13.387203210586552],
[109.2308453107244,13.38791294648326],
[109.23414979223087,13.387328458249778],
[109.23586640600044,13.387537204210364],
[109.23749718908154,13.38703621360088],
[109.24088750127645,13.387745949989926],
[109.24187455419394,13.387328458249778],
[109.2422607922921,13.386451723238778],
[109.24317912037309,13.378584308651897],
[109.24347952778277,13.370609787995996],
[109.2431362050289,13.369357221507375],
[109.24133376057084,13.36651804670635],
[109.24051836903023,13.365891753646535],
[109.23652724201595,13.363929358192769],
[109.23468188221365,13.362843770869018],
[109.22678545887361,13.361006611959551],
[109.22592715198881,13.360338550705228],
[109.22146395618789,13.356079616722353],
[109.22034815723764,13.35541154182607],
[109.21948985035284,13.355369787083653],
[109.21476916248652,13.356455408038753],
[109.21090678150495,13.354952239262083],
[109.21004847462015,13.35428416124499],
[109.2093403714402,13.351215154095817],
[109.20777396137542,13.34858454548581],
[109.20663670475308,13.346559374888638],
[109.20595005924525,13.340588154488174],
[109.20667962009732,13.338542038022508],
[109.20657233173671,13.336495904231803],
[109.20674399311366,13.335326677145195],
[109.20708731586757,13.333572825910638],
[109.20738772327725,13.332779412838638],
[109.20929745609591,13.329271660687823],
[109.21019867832499,13.324511058529508],
[109.21047762806252,13.324114337453741],
[109.21172217304547,13.323216492616897],
[109.21268776829088,13.322819769418276],
[109.21326712543812,13.32225600375387],
[109.21393231327383,13.320982306120273],
[109.2157347577319,13.319144828869609],
[109.21586350376464,13.31851841298176],
[109.21676472599367,13.312212402746736],
[109.21663597996091,13.311544206607888],
[109.21582058842036,13.30983194558652],
[109.2157347577319,13.309038454666881],
[109.21637848789548,13.30536330492868],
[109.21674326832151,13.304632444641411],
[109.21715096409186,13.304110400229302],
[109.22526082028673,13.295256124240654],
[109.22877987851437,13.294253759202217],
[109.23114022244754,13.294504350850293],
[109.23227747906968,13.29556936246517],
[109.23442324628165,13.296968488261538],
[109.23504551877313,13.29703113549639],
[109.23592528333003,13.296592604512428],
[109.24010952939341,13.288761560555562],
[109.24148282040912,13.28688207238389],
[109.24204071988422,13.285921439473555],
[109.2435427569326,13.28471020125284],
[109.247018899816,13.279280438388668],
[109.25109585751883,13.269088863318741],
[109.2509671114861,13.267835771290429],
[109.25028046597828,13.266164971867042],
[109.25023755063403,13.265120716394032],
[109.2506237887322,13.263658751194015],
[109.2507525347649,13.26232208960182],
[109.25105294217457,13.261486672374348],
[109.25105294217457,13.261486672374348],
[109.25169667233816,13.260985420659848],
[109.25276955594414,13.260484167911883],
[109.25319870938654,13.259648744368784],
[109.25289830197687,13.258688003745592],
[109.25208291043629,13.256808282852099],
[109.25261935223928,13.254406396123105],
[109.25467928876279,13.248370245657858],
[109.25493678082822,13.247472120507572],
[109.26008662213701,13.232934564213572],
[109.2672615813445,13.213751905761901],
[109.2749863433075,13.189435246876473],
[109.28168113700866,13.17013060975831],
[109.28171332351707,13.16957693698857],
[109.28276271997913,13.153062772169637],
[109.28271980463505,13.147170383598713],
[109.28224773584842,13.144913686657745],
[109.28126068293092,13.14382712146788],
[109.2790720003747,13.142573386423571],
[109.2782995241784,13.141403227936255],
[109.27817077814566,13.137892718998922],
[109.2776557940148,13.135719521640194],
[109.27696914850698,13.134089610997387],
[109.27604646860578,13.1328149297505],
[109.2714974421164,13.128280354308808],
[109.2698666590353,13.127235509391676],
[109.26563949762772,13.125605542448255],
[109.26488847910348,13.125250291807502],
[109.26377268015324,13.124351714364847],
[109.26280708490785,13.123014290691255],
[109.26229210077696,13.121467885495974],
[109.26227064310478,13.119294542830858],
[109.2623564737933,13.11231463934925],
[109.26252813517024,13.111395116338729],
[109.26267833887509,13.110851760216871],
[109.2628070849078,13.110371098031745],
[109.26302166162901,13.109785942799675],
[109.27572433701772,13.077734649886795],
[109.27709762803337,13.07543551318665],
[109.27922193757325,13.072822831835836],
[109.28229038468639,13.069060522090112],
[109.2883843635684,13.06161934061619],
[109.29568802723823,13.052620037338814],
[109.29929291615439,13.048293022254605],
[109.30731253462503,13.0385123943364],
[109.30789189177224,13.03775983248268],
[109.30924372511579,13.036777317728808],
[109.30969433623032,13.036547366903891],
[109.31053118544298,13.036275606562597],
[109.31136803465566,13.036087464613011],
[109.31226925688469,13.036066559943109],
[109.31319193678559,13.036056107607369],
[109.31354598837551,13.035763442031115],
[109.31371764975259,13.035481228469099],
[109.33408523598374,12.986614512820374],
[109.33419252434433,12.986164972343545],
[109.33492208519627,12.984586347016592],
[109.33645630875276,12.981000425732134],
[109.33656359711335,12.980498601716969],
[109.33648849526101,12.975490760737255],
[109.33678890267065,12.974497544381503],
[109.33738971748993,12.973682058513274],
[109.33763648071927,12.973598418785846],
[109.33820510903037,12.973159309755383],
[109.34382701912571,12.970503729097734],
[109.34440637627297,12.969792781433519],
[109.356479666299,12.948235462210128],
[109.35720922715097,12.946959822932744],
[109.3582606530847,12.945391405036224],
[109.35871126419919,12.944345787622348],
[109.35881855255977,12.94376023995479],
[109.3598696175027,12.938778799684687],
[109.36059917835475,12.935244501461945],
[109.36081375507597,12.934596192802301],
[109.3622728767801,12.92982793541855],
[109.3623801651407,12.927715651931837],
[109.36233724979647,12.925917059823355],
[109.3624659958292,12.924578564262966],
[109.36319555668128,12.922487150584757],
[109.36758492187185,12.910398165906606],
[109.36777804092091,12.909268740590763],
[109.36778876975697,12.907961528993253],
[109.36753127769155,12.906518359451338],
[109.36698410705255,12.90509609726043],
[109.36639402106933,12.904018937423821],
[109.36519239143065,12.902366586133141],
[109.36465594962768,12.900965216357102],
[109.36446283057857,12.897304885135188],
[109.36433408454585,12.89393733311918],
[109.36446283057857,12.892954250383431],
[109.36491344169309,12.891803829513295],
[109.36532113746335,12.891008990187487],
[109.36620090202027,12.890193231413226],
[109.37021348670665,12.887662270608466],
[109.37126491264054,12.886825583724443],
[109.37205884650899,12.885110366873384],
[109.37223050788603,12.883175504497952],
[109.37096450523092,12.879389406240636],
[109.36944101051041,12.875561414485718],
[109.36778876975717,12.870959379800048],
[109.36555717185668,12.865311312704831],
[109.36266038612051,12.858282429399642],
[109.36040733054791,12.85257131677507],
[109.35830447868018,12.846839153722057],
[109.35738179877903,12.84418223086462],
[109.35751054481176,12.841860015439384],
[109.35834739402442,12.839579620853808],
[109.35854051307352,12.837613025424607],
[109.35839030936869,12.835081534195918],
[109.35791824058205,12.833721631691539],
[109.35633037284516,12.828219181883833],
[109.3556437273373,12.824704246015756],
[109.35536477759973,12.819829283473274],
[109.35517165855069,12.815812076019656],
[109.35397002891199,12.812171426418736],


]
export var QL1APY = createLines(paths,"QL1A","Tỉnh Phú Yên")