import { createLines } from "../../template/createLines.js";

var path = [
    [106.589869576, 16.622722955],
    [106.590288001, 16.622980994],
[106.590342718, 16.623088939],
[106.590365718, 16.623272242],
[106.590394149, 16.623346261],
[106.591149376, 16.624282054],
[106.591490743, 16.624684312],
[106.59161037, 16.62475833],
[106.592447426, 16.624958638],
[106.592999063, 16.625060505],
[106.593088112, 16.625062561],
[106.593519948, 16.625060505],
[106.594065234, 16.624993066],
[106.594550874, 16.624841593],
[106.594944888, 16.624608015],
[106.595513189, 16.62419052],
[106.596181558, 16.623581558],
[106.596712517, 16.623116916],
[106.59717493, 16.622849624],
[106.597487428, 16.622702674],
[106.597853281, 16.622590617],
[106.59914002, 16.622269612],
[106.599626265, 16.621987562],
[106.599963798, 16.621728485],
[106.600183415, 16.621405797],
[106.600359286, 16.62112724],
[106.600438143, 16.620903123],
[106.600760689, 16.619275485],
[106.600842926, 16.618672621],
[106.600880818, 16.618280095],
[106.601143846, 16.617576246],
[106.601157257, 16.617443625],
[106.601365393, 16.617114946],
[106.601822043, 16.616609845],
[106.602359394, 16.616054802],
[106.603070594, 16.61522671],
[106.603283202, 16.614982093],
[106.604392169, 16.613689806],
[106.60488335, 16.613107886],
[106.60527943, 16.61269181],
[106.606086888, 16.612007242],
[106.606657953, 16.611525359],
[106.607427677, 16.610943559],
[106.608532054, 16.610368184],
[106.609783773, 16.609858009],
[106.61107182, 16.609357406],
[106.611422675, 16.60909776],
[106.612079823, 16.608340166],
[106.612764714, 16.607740775],
[106.612953005, 16.607617914],
[106.613187694, 16.607561214],
[106.613427483, 16.607525229],
[106.615086287, 16.607580767],
[106.616114494, 16.607608102],
[106.616324779, 16.607625067],
[106.616652008, 16.607679043],
[106.616989233, 16.607795297],
[106.617805276, 16.607999133],
[106.618005369, 16.608014041],
[106.618331403, 16.607938612],
[106.618589968, 16.607847623],
[106.619774985, 16.607436221],
[106.620592471, 16.607107739],
[106.621301906, 16.606836297],
[106.622123176, 16.606525786],
[106.623998829, 16.605730279],
[106.624698962, 16.605411661],
[106.625389168, 16.605085011],
[106.626195226, 16.604717972],
[106.627312038, 16.604260724],
[106.629187887, 16.603586777],
[106.629779046, 16.603325113],
[106.629925494, 16.603250572],
[106.630575064, 16.602826286],
[106.631246423, 16.602266984],
[106.632201208, 16.601525732],
[106.632891458, 16.600972574],
[106.633167425, 16.600728393],
[106.633368591, 16.600523274],
[106.63349635, 16.600336942],
[106.633736801, 16.599917893],
[106.633858606, 16.599491016],
[106.633888252, 16.599324869],
[106.633936851, 16.598546668],
[106.633958845, 16.598362624],
[106.634019757, 16.598086435],
[106.634231385, 16.597588035],
[106.634458678, 16.597254029],
[106.634562747, 16.597114196],
[106.634696858, 16.597010863],
[106.635009805, 16.59678202],
[106.635445932, 16.596560446],
[106.635615447, 16.596503381],
[106.637078935, 16.596252165],
[106.63810324, 16.596074085],
[106.6387474, 16.595969722],
[106.639606066, 16.595971512],
[106.640305457, 16.596056025],
[106.64120193, 16.596284887],
[106.641610152, 16.5963839],
[106.641942746, 16.596504198],
[106.643020941, 16.596734297],
[106.643871014, 16.596673904],
[106.64405555, 16.596665679],
[106.644593379, 16.59663371],
[106.64531507, 16.596547005],
[106.645987768, 16.596458581],
[106.647123766, 16.596325224],
[106.648033869, 16.59620354],
[106.649440456, 16.596048334],
[106.649986202, 16.595995251],
[106.650991617, 16.595835243],
[106.651260911, 16.595833186],
[106.651578484, 16.595859919],
[106.651964516, 16.595961387],
[106.652862719, 16.596280421],
[106.653580037, 16.596550177],
[106.654831969, 16.597003607],
[106.655072295, 16.597137785],
[106.655609369, 16.597344659],
[106.656899955, 16.597848755],
[106.657522459, 16.598080259],
[106.658114397, 16.598309937],
[106.65883061, 16.598705303],
[106.659649156, 16.599425057],
[106.659833155, 16.599603959],
[106.660238651, 16.599806876],
[106.661151708, 16.600111042],
[106.661806425, 16.600324988],
[106.662910916, 16.600697167],
[106.663322466, 16.600714291],
[106.664040832, 16.600510781],
[106.664231805, 16.60048045],
[106.665236328, 16.600233523],
[106.666135089, 16.600026293],
[106.667357002, 16.599834074],
[106.668650259, 16.599875616],
[106.669380886, 16.5999027],
[106.669792874, 16.599908355],
[106.670394401, 16.599938364],
[106.671223701, 16.600092867],
[106.672009978, 16.600435034],
[106.672759682, 16.6007593],
[106.673036486, 16.600849265],
[106.67328325, 16.600869314],
[106.673778385, 16.600860574],
[106.674450313, 16.600755412],
[106.675001775, 16.600669046],
[106.675499373, 16.600676429],
[106.676116281, 16.600802379],
[106.676465414, 16.600990469],
[106.676763676, 16.601172454],
[106.677334181, 16.602021444],
[106.678233412, 16.604297762],
[106.678647474, 16.605087326],
[106.679135435, 16.605939938],
[106.679292076, 16.60613734],
[106.679592962, 16.60639211],
[106.680078442, 16.606700036],
[106.68104932, 16.607071024],
[106.681678963, 16.607429831],
[106.681975616, 16.607625689],
[106.682517954, 16.60812406],
[106.683334802, 16.608654738],
[106.684003987, 16.608899211],
[106.684555074, 16.609044636],
[106.685838588, 16.609307214],
[106.686499953, 16.609446488],
[106.686830401, 16.6095164],
[106.687167287, 16.609509717],
[106.687863367, 16.609335247],
[106.688598739, 16.60915579],
[106.689194184, 16.609022754],
[106.689556282, 16.608964152],
[106.689961296, 16.608983172],
[106.690640293, 16.609070534],
[106.691428949, 16.609180442],
[106.692392011, 16.609313525],
[106.693268101, 16.609429145],
[106.693571123, 16.609493228],
[106.693837199, 16.609548232],
[106.694594859, 16.609928451],
[106.695491893, 16.61036813],
[106.69613104, 16.610698143],
[106.696824476, 16.61102777],
[106.69785619, 16.611556316],
[106.69811519, 16.611758136],
[106.698367854, 16.612046519],
[106.698608284, 16.612473066],
[106.698707233, 16.612685555],
[106.699104847, 16.613479525],

[106.699185313, 16.61364916],
[106.699450124, 16.614195974],
[106.699750275, 16.614808097],
[106.700049718, 16.615415105],
[106.700129668, 16.615587368],
[106.700632601, 16.616350666],
[106.701048362, 16.617005238],
[106.701158852, 16.61711032],
[106.70190205, 16.617757045],
[106.70227602, 16.618118282],
[106.702845967, 16.618624147],
[106.703063762, 16.618837471],
[106.703470342, 16.619082955],
[106.70373749, 16.61921866],
[106.7039349, 16.619338943],
[106.704395272, 16.619426802],
[106.705019515, 16.619360872],
[106.705361765, 16.619338768],
[106.70578019, 16.619287365],
[106.706400234, 16.6192667],
[106.707125003, 16.61927687],
[106.70782954, 16.619284414],
[106.708630447, 16.619289554],
[106.709605233, 16.619415295],
[106.710406588, 16.619491881],
[106.711236222, 16.619578965],
[106.712314646, 16.619692109],
[106.713295465, 16.619698651],
[106.714122951, 16.619713555],
[106.715104274, 16.619681059],
[106.715670757, 16.619648675],
[106.716314802, 16.619731549],
[106.716552445, 16.619758792],
[106.717102593, 16.619977462],
[106.71745289, 16.620192327],
[106.717975021, 16.620480238],
[106.718197644, 16.620480238],
[106.71843797, 16.620472014],
[106.718837374, 16.620345827],
[106.719190353, 16.620236853],
[106.719465011, 16.6202276],
[106.719777757, 16.620240965],
[106.720179722, 16.620329342],
[106.720853687, 16.620454796],
[106.721338094, 16.620540639],
[106.721917917, 16.620424903],
[106.722993031, 16.620002926],
[106.723448864, 16.619897026],
[106.724092058, 16.619780855],
[106.724561654, 16.619761953],
[106.725590425, 16.620266346],
[106.726042175, 16.620495351],
[106.726286256, 16.620621802],
[106.726983564, 16.621004692],
[106.727354305, 16.62115369],
[106.727967355, 16.621241866],
[106.728429768, 16.621309717],
[106.728701217, 16.621448265],
[106.729001706, 16.621672121],
[106.729281237, 16.622042274],
[106.729462079, 16.622521442],
[106.72945754, 16.623298733],
[106.7295933, 16.623778352],
[106.729765498, 16.624004007],
[106.730135351, 16.624300561],
[106.730340271, 16.624452196],
[106.730906451, 16.62487963],
[106.731526024, 16.62516463],
[106.73208196, 16.62541958],
[106.732705086, 16.625698524],
[106.733168572, 16.625913896],
[106.733896607, 16.625924667],
[106.734623027, 16.625939824],
[106.735040379, 16.625942394],
[106.735600562, 16.625993898],
[106.736314467, 16.626379476],
[106.736873639, 16.626503539],
[106.737285286, 16.626577629],
[106.737674206, 16.626643937],
[106.73806016, 16.626822254],
[106.73864277, 16.627154452],
[106.738904325, 16.627489862],
[106.739328392, 16.628260629],
[106.739712905, 16.62899821],
[106.739834179, 16.629275463],
[106.740000892, 16.629635083],
[106.740104425, 16.629884375],
[106.740311748, 16.630488563],
[106.74055824, 16.631890543],
[106.740583606, 16.632142038],
[106.740680173, 16.632853685],
[106.740732208, 16.633024331],
[106.740876157, 16.633362505],
[106.741264949, 16.634289786],
[106.741469058, 16.634775469],
[106.741692816, 16.635285723],
[106.741758262, 16.635389034],
[106.741927562, 16.635679916],
[106.742223141, 16.635831543],
[106.742509601, 16.63587626],
[106.742761508, 16.635769522],
[106.74355961, 16.635005839],
[106.744169054, 16.634672052],
[106.744924149, 16.634426377],
[106.745330235, 16.634347736],
[106.745576462, 16.634348764],
[106.745861312, 16.634438712],

[106.745842537, 16.63443717],
[106.746565532, 16.634878071],
[106.747501851, 16.635450902],
[106.747780265, 16.63548534],
[106.747997524, 16.635457584],
[106.748300613, 16.635263296],
[106.748422589, 16.635024236],
[106.748751074, 16.634642539],
[106.749015158, 16.634476843],
[106.74920023, 16.634398202],
[106.749513512, 16.63439409],
[106.750337222, 16.634325267],
[106.751045681, 16.634248484],
[106.751817321, 16.634179662],
[106.752446918, 16.63407669],
[106.753175617, 16.633974088],
[106.753800287, 16.633877147],
[106.754497125, 16.633768181],
[106.754814302, 16.63376051],
[106.754981672, 16.633788266],
[106.755989778, 16.63420861],
[106.756459769, 16.634597272],
[106.756727792, 16.634910764],
[106.757182585, 16.635224096],
[106.757502841, 16.635388058],
[106.758321418, 16.636069453],
[106.758890657, 16.636485749],
[106.759906235, 16.636919665],
[106.760292617, 16.637047662],
[106.760904666, 16.63708657],
[106.761584813, 16.637170303],
[106.762118036, 16.637195488],
[106.762620781, 16.637402785],
[106.763167285, 16.637678237],
[106.7634575, 16.63787355],
[106.76421079, 16.638569059],
[106.764732293, 16.639064659],
[106.765242061, 16.639522953],
[106.76566467, 16.639775299],
[106.766570994, 16.640260256],
[106.767735273, 16.6407937],
[106.768245471, 16.641024044],
[106.768945897, 16.64131574],
[106.769908718, 16.641731239],
[106.770199933, 16.64190448],
[106.770637088, 16.642233352],
[106.77134669, 16.642723823],
[106.771559657, 16.642800918],
[106.771785499, 16.64284512],
[106.771927656, 16.642855399],
[106.772218408, 16.642800404],
[106.772438349, 16.642755175],
[106.773045759, 16.642567008],
[106.773734467, 16.642360615],
[106.774442011, 16.642280288],
[106.775313874, 16.64219673],
[106.776406752, 16.641564153],
[106.777206871, 16.640865688],
[106.777670314, 16.640313641],
[106.777960893, 16.639934],
[106.778216454, 16.63948048],
[106.778914302, 16.63802168],
[106.779159227, 16.637417298],
[106.779523963, 16.636797505],
[106.779670218, 16.636434899],
[106.779621247, 16.635910471],
[106.779682208, 16.635660637],
[106.779945164, 16.635151665],
[106.780134385, 16.634528259],
[106.780390192, 16.634326278],
[106.780570973, 16.634259973],
[106.780855824, 16.63420292],
[106.781176234, 16.634309141],
[106.781350041, 16.634521419],
[106.781392439, 16.634752105],
[106.781300133, 16.635747312],
[106.781134929, 16.636250629],
[106.781163897, 16.636516874],
[106.781278696, 16.636718871],
[106.781465377, 16.636851479],
[106.781738963, 16.636883861],
[106.78206351, 16.636732235],
[106.783002615, 16.635876987],
[106.783290685, 16.635710969],
[106.78369236, 16.63567367],

[106.784677559, 16.635726249],
[106.785090619, 16.635749379],
[106.786144022, 16.635990818],
[106.78689064, 16.636405427],
[106.787394027, 16.636673045],
[106.78780655, 16.636824671],
[106.788026491, 16.636846772],
[106.78877125, 16.636690849],
[106.789277097, 16.636748604],
[106.78946968, 16.636863736],
[106.78965266, 16.637012279],
[106.789808228, 16.637200912],
[106.789887867, 16.637376381],
[106.789999334, 16.637990948],
[106.790158472, 16.638549505],
[106.790886847, 16.639293437],
[106.791220843, 16.63985302],
[106.791534913, 16.640137402],
[106.791826201, 16.640250477],
[106.79217918, 16.640300847],
[106.792607797, 16.640230946],
[106.793021227, 16.639972002],
[106.79404547, 16.639030769],
[106.794081948, 16.638965494],
[106.794320813, 16.638259262],
[106.794521929, 16.637922415],
[106.795605098, 16.636537605],
[106.796158506, 16.635638999],
[106.796717593, 16.635220806],
[106.797218093, 16.635076889],
[106.797985092, 16.635113763],
[106.798531933, 16.635381452],
[106.799114015, 16.635839111],
[106.799742959, 16.636098979],
[106.799998569, 16.636278623],
[106.800120878, 16.636419456],
[106.800193834, 16.636538187],
[106.800365796, 16.637003223],
[106.800605777, 16.637299291],
[106.800637427, 16.637454515],
[106.800737615, 16.638496274],
[106.800775955, 16.638790182],
[106.801072371, 16.640099877],
[106.800785051, 16.641066554],
[106.799699203, 16.642905061],
[106.798750083, 16.644006808],
[106.798421233, 16.644504888],
[106.797842818, 16.645185285],
[106.797148055, 16.646569395],
[106.796404451, 16.647378761],
[106.796249162, 16.648141476],
[106.795774159, 16.648924739],
[106.79557355, 16.649959573],
[106.795192214, 16.650358881],
[106.794902808, 16.650973141],
[106.794853802, 16.652619325],
[106.794972163, 16.653227759],
[106.795173894, 16.653683231],
[106.796110793, 16.654233195],
[106.796472677, 16.654628922],
[106.79670116, 16.655123587],
[106.796957783, 16.655516384],
[106.797121397, 16.655708081],
[106.797409861, 16.655840668],
[106.79883527, 16.655622331],
[106.799202568, 16.655652592],
[106.799465303, 16.655809915],
[106.799853686, 16.656097204],
[106.80057298, 16.65652972],
[106.800818671, 16.656628395],
[106.801019836, 16.6566839],
[106.801251043, 16.656637646],
[106.801443625, 16.656523553],
[106.801897594, 16.655977758],
[106.802355715, 16.655671967],
[106.802681667, 16.655533702],
[106.802929503, 16.655552717],
[106.803173048, 16.655616445],
[106.804002748, 16.656208592],
[106.804483264, 16.656444723],
[106.804894179, 16.656576804],
[106.805643144, 16.656609491],
[106.80666157, 16.656554448],
[106.80733813, 16.656668336],
[106.808095177, 16.656803405],
[106.809183052, 16.656988557],
[106.809744018, 16.657096458],
[106.810879102, 16.657327511],
[106.811666674, 16.657273693],
[106.812776755, 16.657311016],
[106.813400506, 16.657121503],
[106.813557147, 16.657147714],
[106.813864305, 16.657246528],
[106.81539614, 16.657850214],
[106.816366223, 16.658228671],

[106.816765336, 16.658344819],
[106.817404437, 16.658435272],
[106.819046442, 16.658626192],
[106.819968652, 16.658898421],
[106.820767569, 16.659185227],
[106.821101013, 16.659333034],
[106.821732942, 16.659577148],
[106.822119285, 16.659878676],
[106.822596965, 16.66037326],
[106.823099854, 16.661007804],
[106.823495822, 16.661357497],
[106.824171334, 16.661593485],
[106.82467559, 16.661716312],
[106.825241486, 16.662122089],
[106.82617971, 16.662411964],
[106.827109393, 16.662837308],
[106.828308545, 16.663193365],
[106.828477525, 16.663178462],
[106.829105698, 16.663024801],
[106.829907167, 16.662908456],
[106.830541641, 16.662834568],
[106.830615133, 16.662815553],
[106.830719739, 16.66279551],
[106.830838293, 16.662767759],
[106.831554436, 16.662685609],
[106.832248592, 16.662600781],
[106.833144302, 16.662707023],
[106.834841474, 16.663033409],
[106.835674287, 16.663205041],
[106.836329139, 16.663544213],
[106.836667098, 16.663549866],
[106.837227343, 16.663533975],
[106.837893067, 16.66361877],
[106.838462911, 16.663800549],
[106.83874508, 16.663895623],
[106.839023493, 16.664077548],
[106.839211396, 16.664228122],
[106.840806184, 16.665176217],
[106.841697779, 16.665613571],
[106.842291298, 16.66590913],
[106.842909279, 16.666190751],
[106.843678382, 16.666486444],
[106.844600374, 16.666827307],
[106.845730054, 16.667209033],
[106.846037971, 16.667323634],
[106.846193003, 16.667393011],
[106.846767532, 16.667563113],
[106.847314541, 16.667858276],
[106.848405175, 16.668099101],
[106.848812421, 16.66846908],
[106.84893634, 16.668522526],
[106.84917452, 16.668550277],
[106.849193295, 16.668552846],
[106.850062382, 16.668423857],
[106.850568597, 16.668621823],
[106.850817506, 16.668757492],
[106.851600903, 16.668985123],
[106.852291838, 16.669417426],
[106.852738158, 16.669563887],
[106.853180759, 16.669760366],
[106.854224377, 16.670380414],
[106.854688001, 16.670606697],
[106.855219615, 16.670868784],
[106.855559542, 16.671205047],
[106.855953357, 16.671400709],
[106.856713346, 16.671841462],
[106.856897874, 16.672040184],
[106.857217253, 16.672470072],
[106.857401253, 16.672609336],
[106.858203559, 16.672975781],
[106.859056827, 16.673527902],
[106.860293624, 16.674251634],
[106.86094261, 16.674626123],
[106.861765969, 16.675070808],
[106.862861199, 16.67579741],
[106.863494307, 16.676222962],
[106.864040312, 16.676576084],
[106.864678352, 16.676992354],
[106.865361834, 16.677461656],
[106.865704074, 16.677682058],
[106.866192116, 16.678005098],
[106.866801513, 16.678304173],

]

export var SixteenHighWay = createLines(path, "HCMHighWay", "HCMHighWay")