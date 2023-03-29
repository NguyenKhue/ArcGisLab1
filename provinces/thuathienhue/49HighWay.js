import { createLines } from "../../template/createLines.js"

var path = [
    [107.269769481, 16.235130319],
    [107.269895402, 16.235266724],
    [107.270319559, 16.235753783],
    [107.27056805, 16.236039828],
    [107.270770861, 16.236246321],
    [107.270930522, 16.23641124],
    [107.271216902, 16.236728663],
    [107.271304144, 16.236825073],
    [107.271480323, 16.236980386],
    [107.271570261, 16.237009036],
    [107.271699845, 16.237001471],
    [107.271969936, 16.236844245],
    [107.272080374, 16.236780488],
    [107.272339733, 16.23676017],
    [107.272569814, 16.236799776],
    [107.272610298, 16.2368207],
    [107.272837909, 16.236969128],
    [107.272900158, 16.237014302],
    [107.273109877, 16.237171927],
    [107.273279804, 16.237230631],
    [107.27347021, 16.237190017],
    [107.273639815, 16.237250934],
    [107.273861282, 16.237439901],
    
    [107.273968909, 16.237489911],
[107.274150614, 16.237569373],
[107.27443087, 16.237631007],
[107.274670482, 16.237560278],
[107.274884377, 16.237312928],
[107.274929735, 16.237261106],
[107.275120605, 16.237241691],
[107.27531904, 16.237301775],
[107.275480985, 16.237318496],
[107.275580654, 16.237250933],
[107.275769982, 16.23703042],
[107.275970506, 16.236950458],
[107.276171372, 16.236879096],
[107.276421453, 16.236608743],
[107.276489376, 16.236531842],
[107.276638662, 16.236402604],
[107.276700022, 16.236351717],
[107.276899757, 16.236321264],
[107.277041587, 16.236280526],
[107.277130097, 16.236140996],
[107.277230432, 16.236040403],
[107.277379463, 16.236021106],
[107.27755013, 16.236080645],
[107.277660571, 16.23607092],
[107.277851124, 16.235960262],
[107.277969482, 16.235960962],
[107.278279641, 16.236109812],
[107.278460774, 16.236109436],
[107.278750289, 16.235921325],
[107.27885902, 16.235931426],
[107.278939791, 16.23600089],
[107.279238879, 16.236160213],
[107.27937961, 16.236231539],
[107.279429312, 16.236360977],
[107.279419063, 16.236479752],

[107.279360264, 16.236621798],
[107.27934175, 16.236761342],
[107.279471307, 16.236912355],
[107.279600154, 16.23709202],
[107.279890152, 16.237341429],
[107.279950506, 16.237449968],
[107.279990101, 16.237610419],
[107.280040037, 16.237710495],
[107.280112367, 16.237754603],
[107.280209002, 16.237811278],
[107.280448377, 16.237919973],
[107.280610616, 16.238011089],
[107.280639231, 16.238160844],
[107.280578064, 16.23828101],
[107.280460937, 16.238330943],
[107.280050072, 16.238350357],
[107.279848826, 16.238451251],
[107.27981039, 16.238600945],
[107.279869711, 16.238730031],
[107.280029086, 16.238841292],
[107.280129236, 16.238979992],
[107.280229323, 16.239181497],
[107.280228181, 16.239352413],
[107.280179367, 16.239510822],
[107.280210247, 16.239680402],
[107.280569637, 16.239899664],
[107.280767959, 16.240019463],
[107.281149864, 16.240201351],
[107.281220098, 16.240240853],
[107.281528299, 16.240378686],
[107.281600089, 16.240411224],
[107.28192049, 16.240461101],
[107.282090092, 16.240429589],
[107.282231153, 16.240361173],
[107.282410717, 16.240320721],
[107.282549168, 16.240330704],
[107.282730017, 16.240421057],
[107.282839589, 16.240560428],
[107.282809311, 16.24075207],
[107.282739036, 16.240960568],
[107.282769849, 16.241200913],
[107.282858863, 16.241370994],
[107.283000312, 16.241480994],
[107.283069779, 16.241521224],
[107.283219565, 16.241559864],
[107.283389277, 16.24165045],
[107.283428731, 16.241771208],
[107.283469249, 16.241951451],
[107.283592012, 16.242060456],
[107.283700125, 16.242110609],
[107.283760726, 16.242119783],
[107.283950602, 16.242061801],
[107.284119861, 16.242101963],
[107.284368438, 16.242220105],
[107.284499781, 16.242211272],
[107.284759959, 16.242161473],
[107.28492913, 16.242181505],
[107.284999297, 16.242279816],
[107.285019188, 16.242430083],
[107.284999562, 16.242780789],
[107.285059597, 16.243050302],
[107.28519002, 16.243259607],
[107.285328505, 16.243421511],
[107.285299323, 16.243549622],
[107.285189868, 16.243599742],
[107.285129847, 16.243570498],

[107.285058707, 16.243511638],
[107.284881571, 16.243278652],
[107.284680869, 16.243110587],
[107.284440553, 16.243050421],
[107.28414978, 16.243081359],
[107.283948451, 16.24308063],
[107.283699566, 16.242999762],
[107.283490058, 16.242980498],
[107.283260568, 16.24296998],
[107.282879143, 16.242880868],
[107.282719758, 16.242871922],
[107.282500721, 16.24293096],
[107.282349477, 16.243060036],
[107.282370171, 16.24321173],
[107.282559634, 16.243389124],
[107.282841765, 16.24349111],
[107.283330644, 16.243700372],
[107.283439549, 16.24372939],
[107.283528838, 16.243840425],
[107.283610136, 16.244061249],
[107.283731458, 16.244170971],
[107.284248635, 16.244474434],
[107.284469593, 16.244610443],
[107.284710637, 16.244701817],
[107.285229178, 16.245070622],
[107.285479831, 16.245171078],
[107.286239527, 16.245359846],
[107.286409136, 16.245460276],
[107.286538306, 16.24557204],
[107.28672925, 16.245760374],
[107.28674892, 16.245880037],
[107.28667944, 16.2459805],
[107.286310867, 16.24610151],

[107.28615971, 16.24621018],
[107.286110647, 16.246331068],
[107.286160856, 16.24644034],
[107.28628912, 16.246489201],
[107.286350392, 16.246480027],
[107.286729262, 16.246460243],
[107.287220886, 16.246599704],
[107.287470149, 16.246599743],
[107.28762801, 16.24661078],
[107.287729729, 16.246700813],
[107.287769752, 16.246880756],
[107.287849994, 16.247041061],
[107.288009826, 16.247101278],
[107.288198734, 16.247150986],
[107.288668819, 16.247339393],
[107.288910555, 16.247420543],
[107.289019551, 16.247519324],
[107.289179566, 16.247860776],
[107.289259862, 16.24813049],
[107.289149524, 16.248858058],
[107.289140064, 16.248930766],
[107.28914923, 16.249305737],
[107.289150271, 16.249359964],

[107.289109424, 16.249550568],
[107.288981089, 16.249750021],
[107.288770214, 16.250029075],
[107.288650109, 16.250249954],
[107.288618284, 16.250451181],
[107.28865902, 16.250921648],
[107.288678402, 16.25102098],
[107.288749231, 16.251120447],
[107.289329478, 16.251551285],
[107.289449965, 16.251711198],
[107.289509035, 16.251890219],
[107.289610305, 16.252270796],
[107.289739942, 16.252440852],

[107.289980011, 16.252610328],
[107.290209316, 16.252721154],
[107.290511374, 16.252780619],
[107.290939475, 16.252830064],
[107.291200451, 16.252920322],
[107.291349345, 16.253048988],
[107.29147153, 16.253220342],
[107.291519493, 16.253420127],
[107.29150003, 16.253630039],
[107.291427892, 16.253777149],
[107.291268427, 16.254101963],
[107.290971375, 16.254481062],
[107.290869878, 16.254660831],
[107.290869454, 16.254780903],
[107.290918903, 16.255119846],
[107.290919039, 16.255590917],
[107.29084004, 16.25600098],
[107.29084958, 16.256139327],
[107.290890414, 16.256232421],
[107.291011601, 16.256351538],
[107.291569894, 16.256700996],
[107.291709367, 16.25681233],
[107.291809458, 16.25701032],
[107.291789205, 16.257249876],
[107.291709002, 16.257440495],
[107.291617934, 16.257550282],
[107.291501782, 16.25764026],
[107.290990067, 16.258080947],
[107.290728515, 16.25822127],
[107.290322018, 16.258350772],
[107.29016928, 16.258460153],
[107.290100035, 16.258620134],
[107.290100154, 16.258791171],
[107.290260026, 16.259430172],
[107.290310784, 16.259591664],
[107.29042948, 16.259690809],
[107.290909916, 16.259830781],
[107.291069476, 16.259851339],
[107.291219598, 16.259831104],
[107.291729756, 16.259649992],
[107.291870554, 16.259519267],
[107.291961789, 16.259337842],
[107.292051446, 16.259180045],
[107.292200468, 16.25912959],
[107.292390212, 16.259121502],
[107.292911718, 16.25923916],
[107.29343081, 16.258750244],
[107.293710865, 16.258600504],
[107.293880832, 16.258550167],
[107.294009859, 16.258550484],
[107.294069269, 16.258590531],
[107.294269254, 16.258939702],
[107.294288678, 16.259019534],
[107.294109216, 16.259121462],
[107.29367178, 16.259340952],
[107.293470634, 16.259629998],
[107.29327949, 16.259921577],

[107.29308477, 16.260007056],
[107.292889705, 16.260159345],
[107.29260362, 16.260288811],
[107.292209628, 16.260440719],
[107.292060091, 16.260540906],
[107.291937112, 16.260682334],
[107.291787996, 16.260881433],
[107.291659784, 16.261019808],
[107.291529424, 16.261090753],
[107.290900056, 16.261120975],
[107.290759451, 16.261182227],
[107.290630137, 16.261311737],
[107.290589471, 16.261471148],
[107.29061041, 16.261611291],

[107.29079981, 16.262071953],
[107.290828923, 16.262190442],
[107.29082962, 16.26232026],
[107.290779101, 16.262460528],
[107.290670264, 16.262590163],
[107.290570441, 16.262691201],
[107.290520166, 16.262830277],
[107.29053122, 16.262892105],
[107.290539268, 16.263020655],
[107.290578795, 16.26309135],
[107.290649847, 16.263170115],
[107.290819008, 16.263280867],
[107.290881034, 16.263310156],
[107.29097945, 16.263411422],
[107.291029222, 16.263552223],
[107.291070247, 16.26372203],
[107.291109878, 16.264029785],
[107.291190817, 16.264242811],
[107.291329188, 16.264480954],
[107.291349689, 16.264560654],
[107.291121477, 16.265230393],
[107.291069429, 16.265540873],
[107.291089219, 16.265670688],
[107.291139964, 16.265761161],
[107.29155956, 16.266171133],
[107.291638844, 16.266281928],
[107.291670552, 16.266410407],
[107.291670509, 16.26654153],
[107.291629566, 16.26679846],
[107.291639681, 16.26697021],
[107.291720106, 16.267090075],
[107.291859185, 16.267181397],
[107.292059617, 16.267220711],
[107.292260415, 16.267242016],
[107.292539743, 16.267261405],
[107.292710415, 16.267240274],
[107.292868411, 16.267130293],
[107.293040988, 16.26697989],
[107.293161698, 16.266901389],
[107.293340304, 16.266861419],
[107.293589519, 16.266901855],
[107.293729584, 16.266992154],
[107.294288652, 16.267510915],
[107.294379059, 16.267611647],
[107.294419089, 16.26773053],
[107.294439891, 16.267861869],
[107.294469844, 16.268400457],
[107.294459933, 16.268750652],
[107.294350012, 16.26927004],
[107.294360044, 16.269401635],
[107.294411446, 16.269491317],
[107.294488328, 16.269580148],
[107.29462958, 16.269640515],
[107.296109264, 16.269980535],
[107.296289405, 16.270050474],
[107.296400466, 16.270171287],
[107.296450345, 16.270330499],
[107.296421482, 16.27048046],
[107.296280118, 16.270749779],
[107.296129406, 16.270870046],
[107.295949937, 16.270930375],
[107.29489023, 16.270910292],
[107.294709253, 16.270951682],
[107.294569498, 16.271071086],
[107.294500234, 16.271269817],
[107.294409881, 16.271760717],
[107.294279131, 16.27195027],
[107.294149332, 16.272110805],
[107.294069046, 16.272301376],
[107.293979509, 16.272690068],

[107.293880213, 16.272860502],
[107.293739859, 16.273010456],
[107.293630116, 16.273190867],
[107.293389785, 16.273730957],
[107.293290494, 16.273879284],
[107.293160677, 16.273961692],
[107.292831107, 16.27403982],
[107.292550465, 16.274200772],
[107.292229605, 16.274421636],
[107.292150053, 16.274550612],
[107.292130944, 16.27467078],
[107.292159653, 16.274840858],
[107.292389764, 16.275191978],
[107.292592368, 16.275452938],
[107.29279944, 16.275662093],
[107.293049996, 16.275810592],
[107.293429396, 16.275921237],
[107.293650889, 16.276040785],
[107.293828464, 16.276190518],
[107.294209496, 16.276631231],
[107.294300003, 16.276770979],
[107.294358187, 16.276881178],
[107.294398322, 16.27707019],
[107.294379953, 16.277260302],
[107.294358988, 16.277542566],
[107.29432873, 16.277650704],
[107.294259903, 16.277779821],
[107.294159196, 16.277911383],
[107.293990167, 16.27805995],
[107.292888734, 16.278550921],
[107.292600521, 16.278641305],
[107.292339867, 16.278741204],
[107.292079509, 16.27893203],
[107.291821186, 16.279100559],
[107.291708856, 16.27921014],
[107.291419818, 16.279858764],
[107.291248999, 16.280220343],
[107.291162362, 16.2804304],
[107.291108898, 16.280559874],
[107.291039234, 16.280820536],
[107.290861354, 16.281379483],
[107.290819257, 16.281931621],
[107.290689081, 16.282401303],
[107.290379884, 16.282900975],
[107.290000758, 16.283417745],
[107.28988849, 16.283601684],
[107.28959018, 16.28430026],
[107.289540069, 16.284460778],
[107.289549591, 16.284621245],
[107.289689409, 16.2848818],
[107.289959163, 16.28532107],
[107.290108771, 16.285700298],
[107.290149114, 16.285901671],
[107.290149013, 16.286190865],
[107.290129947, 16.287090816],
[107.29017005, 16.287221667],
[107.290229793, 16.287331238],
[107.290749589, 16.287880425],
[107.290809188, 16.287991482],
[107.290909902, 16.288080294],
[107.291078916, 16.28815966],
[107.292260408, 16.288480655],
[107.292688539, 16.288650583],
[107.292811902, 16.288752883],
[107.293000247, 16.288963117],
[107.29315991, 16.289122226],
[107.294019501, 16.289651032],
[107.29417956, 16.289710109],
[107.294329929, 16.28971958],
[107.294683183, 16.289667754],
[107.295069949, 16.289621261],
[107.295310363, 16.289620272],
[107.29563989, 16.289701916],
[107.296107966, 16.28984143],
[107.2963403, 16.289889651],
[107.296511441, 16.289899986],
[107.296788864, 16.289930558],
[107.296931024, 16.289951605],
[107.297327343, 16.290149997],
[107.297560829, 16.290280124],
[107.297911686, 16.290560982],

[107.29839875, 16.291009609],
[107.298519733, 16.291071254],
[107.298619981, 16.291081713],
[107.29875883, 16.291081025],
[107.298861231, 16.291040967],
[107.29896135, 16.290948696],
[107.299111135, 16.290789193],
[107.299282538, 16.290658529],
[107.299400018, 16.29059045],
[107.299579813, 16.290551259],
[107.299690227, 16.290551513],
[107.299810421, 16.290571179],
[107.299960085, 16.290620265],
[107.300140829, 16.290692308],
[107.300380269, 16.29079987],
[107.300541051, 16.290861309],
[107.30068892, 16.290991271],
[107.300948514, 16.29140204],
[107.301669458, 16.291901835],
[107.301959619, 16.292039759],
[107.302260082, 16.292011104],
[107.302699984, 16.291820471],
[107.30326941, 16.291790737],
[107.303541588, 16.291851348],
[107.303839219, 16.291900549],
[107.304338842, 16.291960685],
[107.304958793, 16.292170523],
[107.305559658, 16.292689952],
[107.305969314, 16.292850678],
[107.306320581, 16.292940787],
[107.30683011, 16.292971517],
[107.306967864, 16.293011076],
[107.307037636, 16.293101217],
[107.307016174, 16.293241543],
[107.306928879, 16.293432495],
[107.306859045, 16.293640387],
[107.306889091, 16.293831875],
[107.307092902, 16.294074089],
[107.30735935, 16.294370157],
[107.307579887, 16.294440789],
[107.308040287, 16.294361001],
[107.308170314, 16.294359499],
[107.308258743, 16.294370118],
[107.308358913, 16.294469671],
[107.308840872, 16.295090583],
[107.309029227, 16.295150751],
[107.309358808, 16.295180758],
[107.309519452, 16.295161872],
[107.310029598, 16.295330633],
[107.310488566, 16.295600941],
[107.3105993, 16.2956311],
[107.310779296, 16.295631296],
[107.311101203, 16.29559021],
[107.31191078, 16.295520872],
[107.31258889, 16.295561046],
[107.31355079, 16.295410133],
[107.313880807, 16.295430221],
[107.314089069, 16.29550059],
[107.314329381, 16.295649964],
[107.314520371, 16.295990825],
[107.31494931, 16.296571496],
[107.315229597, 16.296760745],
[107.315440429, 16.296861413],
[107.31584143, 16.296952336],
[107.316098268, 16.297021389],
[107.31615963, 16.297070977],
[107.316269482, 16.297261807],
[107.316420631, 16.297569878],
[107.316500983, 16.297721573],
[107.316609788, 16.297829845],
[107.316720018, 16.297889813],
[107.316849726, 16.297920851],
[107.317400327, 16.298000591],
[107.31780001, 16.29815067],
[107.319119974, 16.298862595],
[107.320159357, 16.299230221],
[107.321726536, 16.299672317],
[107.322250617, 16.299820368],
[107.322789744, 16.300031693],
[107.322979278, 16.300079844],
[107.323210799, 16.300081132],
[107.323550545, 16.300021677],
[107.323930027, 16.299901683],
[107.324389166, 16.299850892],
[107.325050144, 16.299851777],
[107.325169775, 16.299902009],
[107.325329303, 16.300090539],
[107.325479884, 16.300421173],
[107.325608803, 16.300541303],
[107.326227921, 16.300690276],
[107.326938269, 16.300930462],
[107.328069313, 16.301401403],
[107.328209423, 16.301481254],
[107.328999528, 16.302330527],
[107.329179524, 16.302401251],
[107.329349603, 16.302419617],
[107.329480327, 16.30238057],
[107.329940403, 16.302160275],
[107.330168879, 16.302069618],
[107.331051811, 16.301870555],
[107.33206056, 16.301801955],
[107.332580083, 16.301870756],
[107.332880709, 16.30187097],
[107.333590204, 16.30185008],
[107.333790723, 16.301820453],
[107.333979902, 16.301729243],
[107.334579919, 16.301311029],
[107.334797187, 16.301172727],
[107.33555912, 16.300640553],
[107.33640929, 16.300230693],
[107.336580887, 16.300161086],
[107.336860038, 16.300110798],
[107.337028706, 16.300100885],
[107.337803962, 16.300147483],
[107.33811938, 16.300170359],
[107.338799441, 16.300130637],
[107.33945067, 16.300009601],
[107.339825763, 16.299925281],
[107.340283871, 16.299818675],
[107.340402176, 16.299789502],
[107.340769993, 16.299721375],
[107.341000899, 16.299721171],
[107.341700111, 16.299780554],
[107.342108624, 16.299831076],
[107.342550456, 16.299840942],
[107.34293827, 16.299870172],
[107.343378727, 16.299941737],
[107.343509449, 16.299941611],
[107.344090441, 16.299830302],
[107.344770656, 16.29952018],
[107.345240448, 16.299420539],
[107.345590197, 16.299309862],
[107.345659597, 16.299212114],
[107.345921315, 16.298769865],
[107.346150837, 16.298298088],
[107.346230935, 16.298100055],
[107.34639087, 16.297951609],
[107.346640933, 16.297861829],
[107.347701824, 16.29753901],

[107.349300122, 16.297570727],
[107.349578878, 16.297549687],
[107.350289628, 16.297306612],
[107.350630309, 16.297190489],
[107.350840064, 16.297091247],
[107.350989005, 16.296952406],
[107.351180396, 16.29670054],
[107.351340069, 16.296590527],
[107.35156102, 16.296500882],
[107.351710007, 16.296461364],
[107.351849539, 16.296471319],
[107.351970693, 16.296530441],
[107.35224054, 16.296841075],
[107.352419107, 16.297001192],
[107.352671265, 16.297060847],
[107.352956481, 16.297073778],
[107.353639823, 16.297080973],
[107.35377883, 16.297060311],
[107.353950137, 16.296980055],
[107.354120477, 16.29683083],
[107.354280971, 16.296599247],
[107.354339477, 16.296370645],
[107.354319523, 16.296220817],
[107.354149869, 16.295952131],
[107.354079328, 16.295650287],
[107.354089209, 16.29544938],
[107.354190931, 16.295219372],
[107.354460926, 16.294919382],
[107.354659824, 16.29475913],
[107.35488989, 16.294620523],
[107.355588761, 16.294262167],
[107.356207313, 16.293973044],
[107.356510504, 16.29383044],
[107.356772938, 16.293668674],
[107.357000595, 16.293560309],
[107.357190213, 16.293439965],
[107.357279768, 16.293290057],
[107.357329672, 16.293160613],
[107.357340061, 16.293010466],
[107.357269461, 16.29275075],
[107.357219463, 16.29242874],
[107.357219645, 16.291959622],
[107.357259925, 16.291760483],
[107.357381254, 16.291540573],
[107.357821577, 16.291120952],

[107.358400528, 16.290840221],
[107.358610077, 16.290750276],
[107.359072141, 16.290350421],
[107.359500346, 16.290059874],
[107.359921657, 16.289889995],
[107.360361087, 16.289640253],
[107.360539798, 16.289489708],
[107.36088613, 16.289250259],
[107.360961349, 16.289199709],
[107.361179077, 16.289080389],
[107.361559245, 16.288819911],
[107.36191048, 16.288439901],
[107.362199869, 16.288041464],
[107.362791433, 16.287089875],
[107.362921134, 16.286988982],
[107.363069323, 16.286960102],
[107.363229832, 16.286981273],
[107.363400119, 16.287030223],
[107.363690214, 16.287159839],
[107.363849927, 16.287261146],
[107.364019501, 16.287501821],
[107.364451127, 16.288343321],
[107.364618993, 16.288581117],
[107.364710315, 16.288681361],
[107.364839032, 16.288781515],
[107.365110189, 16.288901127],
[107.365280078, 16.28892112],
[107.365608885, 16.28892054],
[107.366141699, 16.288850472],
[107.366440472, 16.288759504],
[107.366630176, 16.28873058],
[107.366789034, 16.288781943],
[107.367061314, 16.288980742],
[107.367289629, 16.28903039],
[107.36737962, 16.289029983],
[107.367590183, 16.288950288],
[107.367779819, 16.288961942],
[107.368030968, 16.288900811],
[107.368198983, 16.288751829],
[107.368270648, 16.288702752],
[107.368368832, 16.288731247],
[107.368671847, 16.28887802],
[107.369310396, 16.289191473],
[107.369673202, 16.289800379],
[107.369901428, 16.29018212],
[107.370089391, 16.290569788],
[107.370269926, 16.2907615],
[107.37040926, 16.290800572],
[107.370580747, 16.290791485],
[107.370720957, 16.290742117],
[107.370888796, 16.290610273],
[107.371029913, 16.290319056],
[107.371051382, 16.289729153],
[107.371402032, 16.28907908],
[107.371531007, 16.288980172],
[107.37169931, 16.288951145],
[107.37212953, 16.288980587],
[107.372399712, 16.289051705],
[107.372559088, 16.289221292],
[107.372699668, 16.289640838],
[107.37265898, 16.289879451],
[107.372660274, 16.289991589],
[107.372780998, 16.290091635],
[107.372959439, 16.290131239],
[107.373100739, 16.290100544],
[107.373379539, 16.289991831],
[107.373549726, 16.290041615],
[107.373619261, 16.290119372],
[107.37385006, 16.290490615],
[107.37392959, 16.290761777],
[107.373989594, 16.290881501],
[107.374270279, 16.291160355],
[107.374369232, 16.291229553],
[107.374479813, 16.291232079],
[107.374849408, 16.291172152],
[107.375680968, 16.291170975],
[107.376220503, 16.291139987],
[107.376669907, 16.290981493],
[107.376979922, 16.291060264],
[107.377470942, 16.291250377],
[107.377600573, 16.291240567],
[107.378279921, 16.291161418],
[107.378983, 16.291171817],
[107.379970371, 16.291230318],
[107.38042817, 16.291331875],
[107.381667087, 16.292154858],
[107.382159126, 16.292488474],
[107.382525604, 16.292751311],
[107.382925788, 16.293035758],
[107.38318276, 16.29321924],
[107.383651122, 16.293554889],
[107.383871197, 16.293711104],


[107.384279062, 16.294080191],
[107.384940389, 16.294510751],
[107.385779857, 16.294901089],
[107.386020675, 16.295061202],
[107.386338801, 16.295310205],
[107.386649861, 16.295611673],
[107.386789116, 16.295901281],
[107.386939062, 16.296289902],
[107.386989636, 16.296571817],
[107.387008664, 16.29682148],
[107.386938101, 16.297422289],
[107.386938777, 16.297698908],
[107.386949824, 16.297821257],
[107.387008408, 16.298011138],
[107.3870598, 16.298269786],
[107.3871004, 16.299180046],
[107.387118094, 16.299651286],
[107.387118737, 16.300430066],
[107.387117432, 16.300657948],
[107.387109897, 16.300961149],
[107.38706912, 16.301149549],
[107.386868656, 16.301709442],
[107.386729703, 16.302090818],
[107.386689299, 16.30226068],
[107.386710109, 16.30239094],
[107.386780279, 16.302661928],
[107.387008694, 16.303189488],
[107.387019674, 16.303220622],
[107.387089221, 16.303572495],
[107.387239783, 16.303970256],
[107.387260304, 16.304281793],
[107.387260244, 16.30455017],
[107.387219979, 16.30522195],
[107.387261356, 16.305321381],
[107.387481201, 16.305572158],
[107.388083771, 16.306125327],
[107.388139046, 16.306178178],
[107.388282478, 16.306339002],
[107.388319521, 16.306382359],
[107.388478938, 16.306691999],
[107.38860562, 16.306983018],
[107.388754783, 16.307326055],
[107.388758136, 16.30733957],
[107.388878796, 16.307571798],
[107.388928421, 16.30767047],
[107.389196062, 16.308248727],
[107.389289991, 16.308451811],
[107.389440128, 16.308642205],
[107.389519323, 16.308721224],
[107.389698588, 16.308790285],
[107.390590975, 16.308942078],
[107.391028297, 16.308992199],
[107.391450218, 16.3090711],
[107.391641149, 16.309080869],
[107.392140341, 16.309050864],
[107.392790396, 16.30905892],
[107.392931293, 16.309061477],
[107.393111438, 16.309040285],
[107.393311277, 16.308981035],
[107.393557768, 16.308824145],
[107.393722031, 16.3087207],
[107.393860457, 16.308680439],
[107.39395073, 16.308681243],
[107.394049752, 16.308701048],
[107.394139552, 16.308870395],
[107.394341233, 16.309362076],
[107.394442243, 16.309491882],
[107.394589375, 16.30960064],
[107.395389293, 16.30970131],
[107.395529537, 16.309750531],
[107.395718781, 16.309890986],
[107.395779042, 16.309967831],
[107.395859315, 16.31007156],
[107.396029414, 16.310350496],
[107.396128721, 16.310470529],
[107.396239579, 16.310531025],
[107.39671007, 16.310660966],
[107.396809371, 16.310730869],
[107.396960449, 16.310981278],
[107.396979194, 16.31108103],
[107.396950021, 16.31144951],
[107.396939794, 16.311752432],
[107.396951032, 16.311862865],
[107.396979782, 16.311932128],
[107.397360652, 16.312151697],
[107.397470962, 16.312282055],
[107.39758816, 16.312460623],
[107.397940521, 16.312924373],
[107.398031127, 16.31304107],
[107.398190392, 16.313150983],
[107.398309922, 16.31322122],
[107.398659538, 16.313351511],
[107.398829705, 16.313461088],
[107.399029085, 16.313691418],
[107.399346474, 16.313948824],
[107.399420715, 16.31401245],
[107.399728178, 16.314140544],
[107.399951154, 16.314250789],
[107.400189156, 16.314435802],
[107.400377319, 16.31458215],
[107.400479847, 16.314661941],
[107.400570455, 16.314700313],
[107.400848404, 16.314770158],
[107.400992178, 16.314843306],
[107.401211159, 16.315020909],
[107.40137026, 16.315191714],
[107.401650904, 16.315572146],
[107.401759721, 16.315781074],
[107.401848521, 16.316061001],
[107.401870009, 16.316211028],
[107.40185965, 16.31632758],
[107.401830984, 16.316661255],
[107.401770148, 16.316840337],
[107.401521207, 16.317309194],
[107.40143043, 16.317540839],
[107.401390048, 16.317730566],
[107.401439823, 16.318182882],
[107.401680028, 16.318871003],



]

export var FourtyNineHIGHWay = createLines(path, "49HIGHWay", "49HIGHWay")