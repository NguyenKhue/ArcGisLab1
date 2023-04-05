import { createLines } from "../../template/createLines.js";

var path = [
  [107.981071286, 11.793865188],
  [107.982106619, 11.793355824],
  [107.982364111, 11.793030251],
  [107.981999331, 11.792048277],
  [107.98158627, 11.791864485],
  [107.981301956, 11.791596673],
  [107.981554084, 11.790567433],
  [107.981409245, 11.789968792],
  [107.981827669, 11.789091832],
  [107.982342653, 11.788923792],
  [107.982927375, 11.789154847],
  [107.98324924, 11.789044571],
  [107.983367257, 11.788866028],
  [107.983533554, 11.787427177],
  [107.983705216, 11.787070089],
  [107.984874659, 11.78651345],
  [107.985480838, 11.785941057],
  [107.985566669, 11.785531453],
  [107.985293083, 11.784759506],
  [107.985110693, 11.784628223],
  [107.984182649, 11.784717496],
  [107.983748131, 11.784103087],
  [107.98361402, 11.783935044],
  [107.982981019, 11.783782754],
  [107.982825451, 11.783588454],
  [107.982959561, 11.782464659],
  [107.983222418, 11.782380637],
  [107.983732038, 11.782396391],
  [107.983973436, 11.7822441],
  [107.984069996, 11.782034045],
  [107.984048538, 11.781508904],
  [107.983732038, 11.781041529],
  [107.983656936, 11.780742198],
  [107.983780317, 11.780196049],
  [107.983726673, 11.77968666],
  [107.983909063, 11.779450345],
  [107.984273844, 11.779371573],
  [107.985223346, 11.779476602],
  [107.985813432, 11.77907224],
  [107.986457162, 11.778967211],
  [107.986666374, 11.778867434],
  [107.987009697, 11.777465291],
  [107.987133079, 11.777160704],
  [107.987851911, 11.776835112],
  [107.988039665, 11.776672315],
  [107.988034301, 11.776420243],
  [107.98794847, 11.775285916],
  [107.987921648, 11.774997082],
  [107.987803631, 11.774293375],
  [107.988023572, 11.774198848],
  [107.989069634, 11.774566456],
  [107.989337854, 11.774660983],
  [107.989648991, 11.77471875],
  [107.989804559, 11.774608468],
  [107.989536338, 11.773605422],
  [107.989568524, 11.773432121],
  [107.989718728, 11.773279825],
  [107.990201526, 11.773069763],
  [107.99015861, 11.772166491],
  [107.990636044, 11.771594068],
  [107.990770154, 11.771457526],
  [107.99030345, 11.770202391],
  [107.990346365, 11.769929306],
  [107.991242223, 11.769157316],
  [107.991607003, 11.768931495],
  [107.991885953, 11.769020773],
  [107.992009335, 11.769204581],
  [107.992030792, 11.769477666],
  [107.991950326, 11.769819022],
  [107.991987877, 11.770139372],
  [107.992213182, 11.770375695],
  [107.992518954, 11.770365191],
  [107.99269598, 11.770186636],
  [107.992969565, 11.769566944],
  [107.993355804, 11.769404143],
  [107.993688397, 11.769640467],
  [107.994375043, 11.770606766],
  [107.994568162, 11.772171743],
  [107.994707637, 11.772602373],
  [107.99490612, 11.772801932],
  [107.996188216, 11.773332341],
  [107.996418886, 11.772964731],
  [107.996381335, 11.772801932],
  [107.995962911, 11.771888157],
  [107.995898538, 11.771578313],
  [107.99624186, 11.769251845],
  [107.99587708, 11.769068038],
  [107.995544486, 11.768758191],
  [107.995506935, 11.768327555],
  [107.995705419, 11.767917925],
  [107.995689325, 11.767434771],
  [107.995716147, 11.767130174],
  [107.995844894, 11.766846583],
  [107.996268683, 11.766694284],
  [107.997110896, 11.7668991],
  [107.99739521, 11.766841331],
  [107.997534685, 11.766704787],
  [107.997523956, 11.766300407],
  [107.996971421, 11.765607182],
  [107.996880226, 11.765313086],
  [107.998612933, 11.762855271],
  [108.000656776, 11.761442543],
  [108.001289778, 11.761484558],
  [108.001638465, 11.761400529],
  [108.001981788, 11.761027651],
  [108.002448492, 11.760870097],
  [108.002893739, 11.760660025],
  [108.003194146, 11.760103333],
  [108.003585749, 11.759788224],
  [108.003971987, 11.759683188],
  [108.004406505, 11.759572899],
  [108.004578166, 11.759399589],
  [108.004653268, 11.758748361],
  [108.005034142, 11.758470014],
  [108.00588172, 11.758443754],
  [108.006219678, 11.75831771],
  [108.007045798, 11.757671732],
  [108.007190638, 11.757487916],
  [108.007469587, 11.757041507],
  [108.007941656, 11.756810425],
  [108.008563929, 11.756663372],
  [108.008896523, 11.756432289],
  [108.009422236, 11.755723284],
  [108.009540253, 11.755660261],
  [108.01002305, 11.755565726],
  [108.010361009, 11.755397666],
  [108.010479026, 11.754877726],
  [108.010682874, 11.754688657],
  [108.011213951, 11.75450484],
  [108.011761122, 11.753990151],
  [108.01209908, 11.753848349],
  [108.013000302, 11.753612012],
  [108.013209515, 11.753407186],
  [108.013193421, 11.752193984],
  [108.013440185, 11.751584755],
  [108.013949804, 11.750923005],
  [108.01399272, 11.750586877],
  [108.013804965, 11.750224489],
  [108.013638668, 11.750014409],
  [108.01366549, 11.749725548],
  [108.014593535, 11.748816948],
  [108.014641814, 11.748580607],
  [108.014550619, 11.748197208],
  [108.012056165, 11.746437768],
  [108.01145535, 11.746243441],
  [108.004256301, 11.746490288],
  [108.003875427, 11.746464028],
  [108.000018411, 11.745933568],
  [107.998559289, 11.746611086],
  [107.997695618, 11.74705226],
  [107.997432761, 11.747031252],
  [107.997304015, 11.746905202],
  [107.99716454, 11.74646928],
  [107.993473821, 11.742960871],
  [107.993398719, 11.742398891],
  [107.992599421, 11.741285432],
  [107.992121987, 11.740996562],
  [107.991151028, 11.740791727],
  [107.990968638, 11.740628909],
  [107.990979366, 11.740334787],
  [107.99122613, 11.740045916],
  [107.991440706, 11.739893602],
  [107.99159091, 11.739709775],
  [107.991623097, 11.7395312],
  [107.991682105, 11.738585801],
  [107.990780883, 11.737461822],
  [107.990512662, 11.737435561],
  [107.990351729, 11.737451317],
  [107.990078144, 11.737629894],
  [107.989439778, 11.737661407],
  [107.988747768, 11.737866245],
  [107.98840981, 11.738170874],
  [107.988157682, 11.738507017],
  [107.987347655, 11.739399895],
  [107.986805849, 11.739767549],
  [107.986355238, 11.740586892],
  [107.985775881, 11.741148875],
  [107.985545211, 11.741201397],
  [107.981672101, 11.739683514],
  [107.976782838, 11.737546827],
  [107.974207917, 11.737447034],
  [107.971997777, 11.737830448],
  [107.971681277, 11.737861961],
  [107.971075098, 11.737263205],
  [107.970189969, 11.736485871],
  [107.970055858, 11.736254771],
  [107.970393817, 11.735256837],
  [107.971037547, 11.733255708],
  [107.97128431, 11.732914306],
  [107.971579353, 11.730970935],
  [107.97156326, 11.730661045],
  [107.971429149, 11.729983488],
  [107.971241395, 11.726548403],
  [107.971268217, 11.72586033],
  [107.972995559, 11.723838122],
  [107.973167221, 11.723512467],
  [107.973435442, 11.7229557],
  [107.974181096, 11.721821152],
  [107.974567334, 11.721348423],
  [107.975350539, 11.720865187],
  [107.976959864, 11.717971009],
  [107.977426569, 11.717198873],
  [107.977485577, 11.717015031],
  [107.977635781, 11.715854196],
  [107.97833852, 11.714315162],
  [107.978488723, 11.714073538],
  [107.979110996, 11.71345372],
  [107.978778402, 11.711279092],
  [107.979191462, 11.710491179],
  [107.979974667, 11.709445877],
  [107.979781548, 11.708426836],
  [107.979760091, 11.708185207],
  [107.979840557, 11.707927819],
  [107.980140964, 11.701603364],
  [107.979926388, 11.699875144],
  [107.97972254, 11.698940115],
  [107.97934703, 11.698241468],
  [107.979330937, 11.69810489],
  [107.979432861, 11.697800216],
  [107.979661131, 11.697492368],
  [107.98021903, 11.696121329],
  [107.980042004, 11.695585519],
  [107.9790174, 11.694923635],
  [107.978920841, 11.694797562],
  [107.978829646, 11.693862515],
  [107.978641891, 11.692601774],
  [107.977198863, 11.691782289],
  [107.976356649, 11.691041599],
  [107.976002597, 11.690159071],
  [107.976254725, 11.689681035],
  [107.977068232, 11.688190758],
  [107.977191614, 11.688069935],
  [107.977926539, 11.686163022],
  [107.976901935, 11.684481985],
  [107.977545665, 11.682485741],
  [107.984353112, 11.677626403],
  [107.985114859, 11.677069543],
  [107.985935615, 11.675645869],
  [107.986241387, 11.675152047],
  [107.986380862, 11.675025965],
  [107.987287448, 11.675299143],
  [107.987775611, 11.676018862],
  [107.988521265, 11.676376094],
  [107.989014791, 11.677174611],
  [107.99045782, 11.677883818],
  [107.990999626, 11.677999393],
  [107.995537923, 11.67846169],
  [107.995886611, 11.678456436],
  [107.997211622, 11.678078193],
  [108.000725316, 11.676071396],
  [108.001100825, 11.675388452],
  [108.003753786, 11.664779482],
  [108.005566959, 11.65752938],
  [108.005717163, 11.657172124],
  [108.005475764, 11.654865708],
  [108.005427484, 11.653730882],
  [108.005491857, 11.653336844],
  [108.00735331, 11.648676644],
  [108.007487421, 11.648503264],
  [108.007836108, 11.648214298],
  [108.008018498, 11.648119727],
  [108.008667593, 11.64823006],
  [108.0098424, 11.648918325],
  [108.010657792, 11.648886801],
  [108.011553649, 11.648466487],
  [108.012540702, 11.648576819],
  [108.01315761, 11.648492757],
  [108.0144558, 11.647268587],
  [108.014691834, 11.647053174],
  [108.01703072, 11.646223047],
  [108.017239933, 11.646028649],
  [108.017948036, 11.645398171],
  [108.018457655, 11.645293091],
  [108.018672232, 11.645371901],
  [108.019788031, 11.646081189],
  [108.020158176, 11.646123221],
  [108.020828728, 11.645807982],
  [108.021467094, 11.643611807],
  [108.02118278, 11.642539983],
  [108.020222549, 11.638352475],
  [108.019970421, 11.637385713],
  [108.020018701, 11.636124715],
  [108.019262318, 11.633234907],
  [108.018098239, 11.632042195],
  [108.018114333, 11.631096429],
  [108.018516664, 11.630723376],
  [108.019004826, 11.629315228],
  [108.018806343, 11.625773808],
  [108.018865351, 11.623551203],
  [108.018650775, 11.622363704],
  [108.018865351, 11.622032675],
  [108.019348149, 11.622095728],
  [108.019734387, 11.622237598],
  [108.020034794, 11.622137763],
  [108.020292286, 11.621722663],
  [108.020914559, 11.621496722],
  [108.021032576, 11.621255017],
  [108.020882372, 11.621097384],
  [108.020453219, 11.62098704],
  [108.020313744, 11.620871442],
  [108.020351295, 11.620556174],
  [108.020592694, 11.620183107],
  [108.021236424, 11.619473753],
  [108.021831874, 11.618312509],
  [108.023972277, 11.615648462],
  [108.024696474, 11.613546631],
  [108.024868135, 11.612406382],
  [108.025039796, 11.611954484],
  [108.02790976, 11.61056726],
  [108.028462295, 11.610672353],
  [108.030339841, 11.611760063],
  [108.030822639, 11.611912447],
  [108.032120828, 11.612070086],
  [108.032437329, 11.611959739],
  [108.03316689, 11.611618188],
  [108.035623793, 11.609421743],
  [108.035731082, 11.609006624],
  [108.035623793, 11.608533702],
  [108.035489683, 11.608207911],
  [108.035500412, 11.607908393],
  [108.035661344, 11.607645658],
  [108.036138777, 11.607535309],
  [108.036535744, 11.607587856],
  [108.038622503, 11.605985165],
  [108.039706115, 11.605196953],
  [108.04017282, 11.604976254],
  [108.045687441, 11.601413505],
  [108.046052222, 11.601008884],
  [108.046411638, 11.600131325],
  [108.046197061, 11.598985766],
  [108.047023181, 11.59768781],
  [108.047216301, 11.597572202],
  [108.052178387, 11.594408737],
  [108.054865961, 11.592285726],
  [108.055198555, 11.592043996],
  [108.056351904, 11.591718186],
  [108.057800297, 11.591008759],
  [108.05814362, 11.590882639],
  [108.059404258, 11.590630397],
  [108.059581284, 11.590467491],
  [108.064446811, 11.586242415],
  [108.067188029, 11.58274249],
  [108.067826395, 11.581523286],
  [108.06823409, 11.580766537],
  [108.070964579, 11.579920446],
  [108.071350817, 11.579999275],
  [108.071651225, 11.580198973],
  [108.071967725, 11.580225249],
  [108.072863583, 11.580141166],
  [108.073185448, 11.580198973],
  [108.073571686, 11.580861131],
  [108.074885969, 11.581733494],
  [108.075352673, 11.581801812],
  [108.075889115, 11.58174926],
  [108.07648993, 11.581512776],
  [108.074982529, 11.576945971],
  [108.074585562, 11.576183954],
  [108.074660663, 11.575385147],
  [108.075937395, 11.575148658],
  [108.07723022, 11.57461787],
  [108.07746089, 11.574444444],
  [108.077675466, 11.573671909],
  [108.077648644, 11.573177906],
  [108.077841763, 11.57293616],
  [108.078592782, 11.572825797],
  [108.079097037, 11.572626093],
  [108.079338436, 11.572752222],
  [108.079424267, 11.57323046],
  [108.079617386, 11.57338812],
  [108.080384497, 11.573414397],
  [108.08067954, 11.573277758],
  [108.081913357, 11.568889503],
  [108.081848984, 11.568574177],
  [108.081382279, 11.567381189],
  [108.080625896, 11.565683669],
  [108.080438142, 11.563166275],
  [108.080357675, 11.562840431],
  [108.079874878, 11.561925964],
  [108.079751496, 11.560958938],
  [108.079864149, 11.560633092],
  [108.080073361, 11.560380823],
  [108.080304031, 11.560270456],
  [108.080963855, 11.560165344],
  [108.081221347, 11.560070743],
  [108.081360822, 11.559902563],
  [108.081478839, 11.559503137],
  [108.08137155, 11.558951297],
  [108.082095747, 11.557458697],
  [108.082095747, 11.557232704],
  [108.081811433, 11.556160548],
  [108.081360822, 11.555529866],
  [108.080931668, 11.555351173],
  [108.079767589, 11.555104155],
  [108.079322343, 11.555214525],
  [108.078689341, 11.55567177],
  [108.078388934, 11.555703304],
  [108.077975874, 11.555414241],
  [108.077680831, 11.554978019],
  [108.076367575, 11.550759635],
  [108.076260286, 11.550202523],
  [108.076223773, 11.549558945],
  [108.075628322, 11.547840293],
  [108.074383777, 11.544329376],
  [108.074308675, 11.543971975],
  [108.074508902, 11.541408256],
  [108.074476716, 11.541045596],
  [108.074283597, 11.540830101],
  [108.073747155, 11.540693446],
  [108.073060509, 11.54076703],
  [108.072561618, 11.540919453],
  [108.072266575, 11.540809077],
  [108.072186109, 11.540435904],
  [108.073178526, 11.539521364],
  [108.073779341, 11.538806548],
  [108.073811528, 11.538391324],
  [108.073709604, 11.538207364],
  [108.073060509, 11.537892003],
  [108.072937128, 11.537613434],
  [108.073012229, 11.536520179],
  [108.072921034, 11.536215328],
  [108.072609898, 11.535826381],
  [108.072878119, 11.534244303],
  [108.07319462, 11.533976243],
  [108.073999282, 11.533571523],
  [108.074095842, 11.533245645],
  [108.074063655, 11.53291451],
  [108.073956367, 11.5328199],
  [108.072749373, 11.530843595],
  [108.072068092, 11.530265418],
  [108.066580292, 11.528210252],
  [108.066301342, 11.527873855],
  [108.066167232, 11.527379772],
  [108.066183325, 11.526696463],
  [108.066210147, 11.52617084],
  [108.066172596, 11.525293047],
  [108.066236969, 11.525009209],
  [108.066025837, 11.522409568],
  [108.066283329, 11.521405612],
  [108.066835864, 11.521011387],
  [108.06696461, 11.520759083],
  [108.066996797, 11.520564599],
  [108.066953882, 11.520070502],
  [108.067393764, 11.519024486],
  [108.067211374, 11.51791539],
  [108.066841229, 11.517794493],
  [108.06650327, 11.517710391],
  [108.066481813, 11.517395007],
  [108.067238196, 11.516396289],
  [108.067699536, 11.515634107],
  [108.068048223, 11.515339747],
  [108.068386181, 11.515350259],
  [108.069212302, 11.515628851],
  [108.069400056, 11.515665646],
  [108.069727286, 11.515339747],
  [108.069754108, 11.514919231],
  [108.069335683, 11.514567049],
  [108.068831428, 11.514503971],
  [108.068568571, 11.514383073],
  [108.068091138, 11.513773323],
  [108.066868051, 11.513210881],
  [108.06636916, 11.512769336],
  [108.066304787, 11.512543307],
  [108.066691025, 11.509599656],
  [108.066937788, 11.508763864],
  [108.067045077, 11.508022688],
  [108.067168458, 11.507554852],
  [108.068815335, 11.505168353],
  [108.069153293, 11.504600636],
  [108.069485887, 11.504095998],
  [108.069603904, 11.502813373],
  [108.069791659, 11.501940764],
  [108.069990142, 11.501688443],
  [108.070220812, 11.501535999],
  [108.070639237, 11.501451891],
  [108.070853813, 11.501236367],
  [108.071138128, 11.500605562],
  [108.071352704, 11.500474144],
  [108.072119816, 11.500300672],
  [108.072581156, 11.499990525],
  [108.072785004, 11.499664608],
  [108.072758182, 11.499354461],
  [108.072414859, 11.498466071],
  [108.071406349, 11.497467286],
  [108.071089848, 11.49659466],
  [108.070880636, 11.496547349],
  [108.070456847, 11.496536835],
  [108.070263727, 11.496342334],
  [108.070274456, 11.49603744],
  [108.070714339, 11.495580098],
  [108.070826991, 11.495343541],
  [108.070483669, 11.495085957],
  [108.070038422, 11.495106985],
  [108.069571718, 11.4955433],
  [108.069228395, 11.495632666],
  [108.067860468, 11.493451082],
  [108.066127761, 11.491784657],
  [108.06600438, 11.491322051],
  [108.065843447, 11.491059206],
  [108.065387471, 11.490780591],
  [108.065258725, 11.490607113],
  [108.065253361, 11.490270671],
  [108.065328463, 11.489860632],
  [108.065484031, 11.489518933],
  [108.065779074, 11.489156205],
  [108.065811261, 11.488393949],
  [108.065441116, 11.488120588],
  [108.064588173, 11.487552837],
  [108.064539893, 11.487326788],
  [108.064679368, 11.487079711],
  [108.064716919, 11.486732751],
  [108.064255579, 11.485297593],
  [108.064287766, 11.484913832],
  [108.063713773, 11.483473408],
  [108.063306077, 11.482558683],
  [108.063526018, 11.480214028],
  [108.063799604, 11.479977459],
  [108.064421876, 11.479693576],
  [108.064915403, 11.478978608],
  [108.065505489, 11.478342496],
  [108.06577371, 11.478247868],
  [108.066170677, 11.478179525],
  [108.066401346, 11.477879869],
  [108.066605194, 11.477680097],
  [108.067141636, 11.477243754],
  [108.067125543, 11.47669701],
  [108.067270382, 11.476402609],
  [108.067742451, 11.476223865],
  [108.067855104, 11.476045121],
  [108.068225249, 11.47520923],
  [108.06816624, 11.474683511],
  [108.068268164, 11.474331278],
  [108.068316444, 11.473731956],
  [108.068777784, 11.47313789],
  [108.068568571, 11.472811942],
  [108.066492542, 11.473311379],
  [108.066117032, 11.472859257],
  [108.066170677, 11.472501765],
  [108.066315516, 11.472228388],
  [108.065902456, 11.471660606],
  [108.065462573, 11.471523917],
  [108.064926132, 11.471555461],
  [108.063949807, 11.470724813],
  [108.063617214, 11.46984159],
  [108.063740595, 11.46953141],
  [108.064073189, 11.4687323],
  [108.064228757, 11.468295943],
  [108.064196571, 11.468106679],
  [108.063499196, 11.466955324],
  [108.063526018, 11.466513707],
  [108.063295348, 11.46640856],
  [108.062732085, 11.466634626],
  [108.062351211, 11.46547275],
  [108.062828644, 11.46461054],
  [108.062828644, 11.464232008],
  [108.062640889, 11.463790387],
  [108.060779436, 11.462044924],
  [108.060548766, 11.462055439],
  [108.060226901, 11.462207905],
  [108.059454425, 11.462239449],
  [108.058816059, 11.461350942],
  [108.059491976, 11.460420373],
  [108.059341772, 11.459920913],
  [108.059395417, 11.459621237],
  [108.059695824, 11.459247956],
  [108.060200079, 11.459253213],
  [108.060403927, 11.459127034],
  [108.060328825, 11.458596027],
  [108.060425385, 11.4584015],
  [108.060859903, 11.45829635],
  [108.061154946, 11.458180684],
  [108.061192497, 11.457576071],
  [108.061482175, 11.457360512],
  [108.061600192, 11.456981971],
  [108.061460717, 11.456524566],
  [108.061476811, 11.456245916],
  [108.061814769, 11.455883145],
  [108.061691387, 11.455651813],
  [108.061530455, 11.455420481],
  [108.061492904, 11.455152345],
  [108.061745032, 11.45468968],
  [108.061836227, 11.454253301],
  [108.062056168, 11.454011452],
  [108.062088354, 11.453643421],
  [108.06180404, 11.45303354],
  [108.061492904, 11.45252881],
  [108.061455353, 11.452229126],
  [108.061627014, 11.451298527],
  [108.061793311, 11.451151313],
  [108.061922057, 11.451109252],
  [108.062721356, 11.451167086],
  [108.062952026, 11.450972553],
  [108.062646254, 11.449747521],
  [108.062973483, 11.449311134],
  [108.062978848, 11.448601348],
  [108.063193425, 11.448364752],
  [108.063944443, 11.447996714],
  [108.063665493, 11.447633933],
  [108.063112958, 11.44750249],
  [108.062732085, 11.447129193],
  [108.062528237, 11.446508783],
  [108.062201007, 11.4462827],
  [108.06171821, 11.44633002],
  [108.061272963, 11.446372082],
  [108.061380251, 11.445467752],
  [108.061407073, 11.445231153],
  [108.061117395, 11.444510841],
  [108.061149581, 11.444253211],
  [108.061401709, 11.444148056],
  [108.061970337, 11.444216406],
  [108.062195643, 11.444179602],
  [108.062533601, 11.443879909],
  [108.062866195, 11.443385678],
  [108.062898382, 11.442570721],
  [108.063316806, 11.441966074],
  [108.06337045, 11.441624317],
  [108.061294421, 11.440257282],
  [108.061369522, 11.439910265],
  [108.061503633, 11.439826139],
  [108.062002524, 11.439805108],
  [108.062394126, 11.439705209],
  [108.062780364, 11.439437058],
  [108.063386544, 11.43950541],
  [108.063713773, 11.439379222],
  [108.063568934, 11.438716731],
  [108.063644036, 11.438343423],
  [108.063445552, 11.437891245],
  [108.063440188, 11.437649382],
  [108.063703044, 11.437239267],
  [108.0636494, 11.437049983],
  [108.063381179, 11.436813377],
  [108.06337045, 11.436518935],
  [108.063574298, 11.435814374],
  [108.063365086, 11.435362193],
  [108.063322171, 11.434799594],
  [108.063579663, 11.434131835],
  [108.063965901, 11.433853163],
  [108.064073189, 11.433716456],
  [108.06401418, 11.433127564],
  [108.064105376, 11.432911987],
  [108.064491614, 11.43261754],
  [108.065489395, 11.432543929],
  [108.065913184, 11.432375673],
  [108.065982922, 11.432238966],
  [108.065521582, 11.431166334],
  [108.065403565, 11.43088766],
  [108.065366014, 11.430614243],
  [108.064797386, 11.429857087],
  [108.063574298, 11.429841313],
  [108.06328462, 11.42963625],
  [108.063150509, 11.429089414],
  [108.062978848, 11.42736477],
  [108.063273891, 11.427348996],
  [108.063499196, 11.427490964],
  [108.063922985, 11.428069351],
  [108.06411074, 11.428195545],
  [108.064577444, 11.4281009],
  [108.064990505, 11.427490964],
  [108.065221175, 11.427396318],
  [108.065864905, 11.427464673],
  [108.066202863, 11.42763819],
  [108.066454991, 11.42796419],
  [108.066626652, 11.427874803],
  [108.066589101, 11.42714393],
  [108.066433533, 11.426586573],
  [108.066476448, 11.426160667],
  [108.066390618, 11.424993367],
  [108.06673394, 11.424672621],
  [108.066835864, 11.424346617],
  [108.067136272, 11.423142502],
  [108.067629798, 11.423037339],
  [108.067763909, 11.423252923],
  [108.068042858, 11.424246713],
  [108.068187698, 11.424351875],
  [108.068353995, 11.424299294],
  [108.068482741, 11.424104743],
  [108.068659766, 11.423620994],
  [108.068380817, 11.422890111],
  [108.068413003, 11.422679784],
  [108.0685793, 11.422495748],
  [108.068702682, 11.422453683],
  [108.070070608, 11.422532555],
  [108.070467575, 11.422495748],
  [108.071111306, 11.422206549],
  [108.071304425, 11.422111902],
  [108.071690663, 11.422033029],
  [108.073670133, 11.421901575],
  [108.074421151, 11.421664957],
  [108.074861034, 11.421270593],
  [108.075070246, 11.421270593],
  [108.075418933, 11.421354724],
  [108.076722487, 11.421291625],
  [108.077784642, 11.420760548],
  [108.077956303, 11.420755289],
  [108.078385456, 11.420860453],
  [108.079849942, 11.420150596],
  [108.080552681, 11.419840361],
  [108.081003292, 11.419403929],
  [108.081550463, 11.419309281],
  [108.082210286, 11.419388154],
  [108.083068593, 11.418956979],
  [108.083637222, 11.418425897],
  [108.08457063, 11.418042045],
  [108.085005148, 11.417479412],
  [108.085713251, 11.417458379],
  [108.086115583, 11.417584577],
  [108.086764677, 11.417132367],
  [108.086764677, 11.416564473],
  [108.087065085, 11.416122778],
  [108.087183102, 11.415728406],
  [108.087065085, 11.414981727],
  [108.087837561, 11.414445379],
  [108.087987765, 11.414261338],
  [108.087987765, 11.413993164],
  [108.087859019, 11.413556722],
  [108.08812724, 11.413020372],
  [108.08807896, 11.412794263],
  [108.087322577, 11.4117794],
  [108.087295755, 11.411516482],
  [108.08756934, 11.411122104],
  [108.08761762, 11.41090651],
  [108.087354763, 11.410312312],
  [108.087585433, 11.409570878],
  [108.087687357, 11.408803149],
  [108.087821468, 11.408492902],
  [108.087639077, 11.407746205],
  [108.087671264, 11.407315012],
  [108.08784829, 11.407041573],
  [108.088196977, 11.406783908],
  [108.088964089, 11.406484176],
  [108.089275225, 11.406252804],
  [108.089457615, 11.405979363],
  [108.09001015, 11.405705922],
  [108.090509041, 11.405069646],
  [108.090895279, 11.404964476],
  [108.091002568, 11.404727844],
  [108.090959652, 11.404370266],
  [108.091131314, 11.404133633],
  [108.091817959, 11.403839156],
  [108.092032536, 11.403623557],
  [108.09218274, 11.403171324],
  [108.092429503, 11.402924173],
  [108.093395098, 11.402508749],
  [108.093588217, 11.402293149],
  [108.093588217, 11.401882982],
  [108.09467183, 11.399989898],
  [108.095535501, 11.398585853],
  [108.095363839, 11.397902233],
  [108.095556958, 11.397392146],
  [108.095476492, 11.396266796],
  [108.095406755, 11.39534653],
  [108.095052703, 11.395099373],
  [108.094553812, 11.394962647],
  [108.093282445, 11.393695303],
  [108.092762097, 11.393605905],
  [108.092815741, 11.392659337],
  [108.091935976, 11.391223703],
  [108.091614111, 11.39102387],
  [108.091410263, 11.390682051],
  [108.091297611, 11.390308679],
  [108.091024025, 11.390150916],
  [108.0902891, 11.389735473],
  [108.089988693, 11.387758168],
  [108.089886769, 11.387453156],
  [108.088862165, 11.385659894],
  [108.08877097, 11.384860548],
  [108.088250621, 11.383735149],
  [108.087590798, 11.383267108],
  [108.087360128, 11.382741218],
  [108.087349399, 11.382473014],
  [108.087966307, 11.381011033],
  [108.087875112, 11.38077964],
  [108.087236746, 11.380616613],
  [108.087065085, 11.380516693],
  [108.086839779, 11.379564822],
  [108.086866601, 11.379275579],
  [108.08705972, 11.37901789],
  [108.087966307, 11.378381553],
  [108.088196977, 11.37803446],
  [108.08826135, 11.37777677],
  [108.088073595, 11.376940588],
  [108.088298901, 11.375936115],
  [108.088459833, 11.375715236],
  [108.089151843, 11.37481594],
  [108.090686067, 11.373101484],
  [108.09134589, 11.372754385],
  [108.092193468, 11.369930241],
  [108.092327579, 11.369704097],
  [108.092633351, 11.36956736],
  [108.092805012, 11.369709357],
  [108.093014224, 11.369951277],
  [108.093153699, 11.370040683],
  [108.09424804, 11.369709357],
  [108.094301685, 11.369435881],
  [108.09406565, 11.368420863],
  [108.093899353, 11.367852873],
  [108.094049557, 11.367637246],
  [108.09439288, 11.367437397],
  [108.094612821, 11.367395324],
  [108.095031246, 11.367542581],
  [108.095197542, 11.367563618],
  [108.095347746, 11.367374287],
  [108.095331653, 11.367169179],
  [108.095154627, 11.366885182],
  [108.094977601, 11.366843109],
  [108.093910082, 11.367216511],
  [108.093180521, 11.367942279],
  [108.093067869, 11.368636489],
  [108.092896207, 11.368699599],
  [108.092563613, 11.368536565],
  [108.09226857, 11.368415604],
  [108.091415628, 11.368604934],
  [108.090712889, 11.368931002],
  [108.090546592, 11.368831078],
  [108.090546592, 11.368678563],
  [108.091018661, 11.368494492],
  [108.091254695, 11.36837879],
  [108.091710671, 11.36793702],
  [108.091860874, 11.367574136],
  [108.091828688, 11.36656963],
  [108.091560467, 11.365964821],
  [108.091925247, 11.365486233],
  [108.091994985, 11.365254827],
  [108.089972599, 11.363314166],
  [108.089688285, 11.362919721],
  [108.089704378, 11.362451645],
  [108.089790209, 11.362078236],
  [108.090026243, 11.361641715],
  [108.089983328, 11.361410306],
  [108.089634641, 11.361147341],
  [108.089253767, 11.361121045],
  [108.088829978, 11.36138401],
  [108.088545664, 11.361389269],
  [108.086544736, 11.360695041],
  [108.085455759, 11.359927181],
  [108.085257276, 11.359764141],
  [108.085825904, 11.358507159],
  [108.085933193, 11.358354638],
  [108.085632785, 11.357539437],
  [108.085203632, 11.356650602],
  [108.08605121, 11.355504054],
  [108.086871966, 11.354578397],
  [108.087124093, 11.354199719],
  [108.087504967, 11.353295095],
  [108.086748584, 11.350528613],
  [108.086630567, 11.348451103],
  [108.086587652, 11.348103974],
  [108.086442812, 11.347656912],
  [108.086072667, 11.347057323],
  [108.085938557, 11.346957391],
  [108.086539372, 11.345663536],
  [108.086947068, 11.344127732],
  [108.087043627, 11.343112624],
  [108.087091907, 11.342844383],
  [108.08628188, 11.34152947],
  [108.086169227, 11.34055643],
  [108.086652025, 11.339604426],
  [108.086882695, 11.338936444],
  [108.087167009, 11.338336836],
  [108.089420064, 11.335838457],
  [108.089640005, 11.335428195],
  [108.089795574, 11.333813439],
  [108.08992432, 11.333624086],
  [108.090273007, 11.333429473],
  [108.090578779, 11.332735177],
  [108.091018661, 11.331940942],
  [108.090975745, 11.331535934],
  [108.090761169, 11.331083587],
  [108.090696796, 11.330257788],
  [108.089988693, 11.329337309],
  [108.089130386, 11.329100614],
  [108.088744148, 11.328479946],
  [108.087483509, 11.327885577],
  [108.08669494, 11.327038729],
  [108.086689575, 11.326728393],
  [108.086909517, 11.326491696],
  [108.087134822, 11.326212919],
  [108.087215288, 11.324882149],
  [108.087596162, 11.323556634],
  [108.087295755, 11.323193694],
  [108.087048991, 11.322183772],
  [108.087091907, 11.321889211],
  [108.087327941, 11.321310608],
  [108.087741001, 11.321016045],
  [108.088551029, 11.320674143],
  [108.088851436, 11.32043744],
  [108.089151843, 11.32042166],
  [108.089559539, 11.320537381],
  [108.089854582, 11.320511081],
  [108.090079888, 11.320305939],
  [108.090128167, 11.319916695],
  [108.09121178, 11.318996182],
  [108.091388806, 11.318912021],
  [108.091431721, 11.318727918],
  [108.091319068, 11.318359712],
  [108.091560467, 11.317465496],
  [108.091635569, 11.317365554],
  [108.092273935, 11.317028907],
  [108.092542156, 11.317018386],
  [108.092665537, 11.316971045],
  [108.092756732, 11.3167396],
  [108.09249924, 11.315298324],
  [108.092493876, 11.315051097],
  [108.092568978, 11.31483017],
  [108.093362912, 11.314188431],
  [108.09342192, 11.313872821],
  [108.09319125, 11.312726101],
  [108.093159064, 11.311374228],
  [108.09314297, 11.311200641],
  [108.0929123, 11.310858726],
  [108.092740639, 11.310348483],
  [108.092531427, 11.310180156],
  [108.092177375, 11.310027609],
  [108.0920379, 11.309880322],
  [108.092080816, 11.309722515],
  [108.092461689, 11.309254352],
  [108.092579706, 11.308849312],
  [108.092783554, 11.308759887],
  [108.092987402, 11.308922956],
  [108.092955216, 11.309243831],
  [108.09300886, 11.309459502],
  [108.09328781, 11.309564707],
  [108.093674048, 11.309575228],
  [108.094038828, 11.309454242],
  [108.094414337, 11.309280653],
  [108.094677194, 11.309243831],
  [108.094864949, 11.309191229],
  [108.095154627, 11.308633641],
  [108.09526728, 11.308549477],
  [108.095573052, 11.308475833],
  [108.095653518, 11.308260162],
  [108.095326289, 11.307623668],
  [108.096495732, 11.304725235],
  [108.096442087, 11.304430656],
  [108.09627579, 11.303068223],
  [108.096286519, 11.302479061],
  [108.096544011, 11.30139016],
  [108.096495732, 11.301069275],
  [108.096581562, 11.30086938],
  [108.096876605, 11.300711567],
  [108.096983894, 11.30036438],
  [108.096951707, 11.299822556],
  [108.097032173, 11.299533232],
  [108.096989258, 11.298854635],
  [108.096769317, 11.298659998],
  [108.097075089, 11.298281246],
  [108.097209199, 11.298039264],
  [108.097445234, 11.298012962],
  [108.098013862, 11.298312808],
  [108.09826599, 11.298244422],
  [108.098421558, 11.298002441],
  [108.098716601, 11.29560892],
  [108.09863077, 11.295161777],
  [108.098271354, 11.294004461],
  [108.09798704, 11.293383717],
  [108.097697361, 11.293199598],
  [108.097552522, 11.293083866],
  [108.097547158, 11.292931309],
  [108.097584708, 11.292847141],
  [108.097745641, 11.292957612],
  [108.097820743, 11.293157513],
  [108.098094328, 11.293267985],
  [108.098341091, 11.293467886],
  [108.098571761, 11.293836124],
  [108.098952635, 11.294425304],
  [108.099242314, 11.294877709],
  [108.099403246, 11.294998701],
  [108.099596365, 11.295151256],
  [108.09973584, 11.295330113],
  [108.099886044, 11.29570887],
  [108.099923595, 11.296071845],
  [108.100052341, 11.296187575],
  [108.100213273, 11.296208617],
  [108.100486859, 11.296061324],
  [108.100545867, 11.295887727],
  [108.100470765, 11.295508971],
  [108.100261553, 11.295351155],
  [108.099574908, 11.293641484],
  [108.099081381, 11.292726148],
  [108.098974093, 11.291768724],
  [108.099424704, 11.290416752],
  [108.099489077, 11.290127419],
  [108.09904383, 11.289091077],
  [108.098920449, 11.288717573],
  [108.098963364, 11.288491365],
  [108.099172576, 11.288291461],
  [108.099194034, 11.288159945],
  [108.099247678, 11.287723311],
  [108.099521263, 11.287565492],
  [108.099773391, 11.287586534],
  [108.100004061, 11.287675965],
  [108.100202544, 11.28771279],
  [108.100342019, 11.287660183],
  [108.100433214, 11.287239331],
  [108.100486859, 11.287065729],
  [108.100921377, 11.286608051],
  [108.101017936, 11.286423927],
  [108.100980385, 11.286024116],
  [108.101339801, 11.285703214],
  [108.101650937, 11.28567691],
  [108.101785048, 11.285776863],
  [108.101720675, 11.286139851],
  [108.1015812, 11.286450231],
  [108.101602658, 11.286571226],
  [108.102010353, 11.286818478],
  [108.102106913, 11.286981558],
  [108.102128371, 11.287318241],
  [108.102074726, 11.287455018],
  [108.10183601, 11.287607577],
  [108.101299568, 11.287781178],
  [108.101208373, 11.287852197],
  [108.101152046, 11.287941628],
  [108.101162775, 11.288320395],
  [108.101221784, 11.288386153],
  [108.101291521, 11.288399304],
  [108.101361259, 11.288344067],
  [108.101366623, 11.288228333],
  [108.10130225, 11.288065253],
  [108.101353212, 11.287910064],
  [108.101465865, 11.287854827],
  [108.101608022, 11.287844306],
  [108.101795777, 11.287833785],
  [108.102235659, 11.287660183],
  [108.102420731, 11.287481321],
  [108.102546795, 11.287134118],
  [108.102627261, 11.287042056],
  [108.10278283, 11.287005231],
  [108.103174432, 11.286971037],
  [108.103279038, 11.286939473],
  [108.103501662, 11.286597529],
  [108.103533848, 11.286481795],
  [108.103531166, 11.28637132],
  [108.10342656, 11.286305562],
  [108.103080555, 11.286250325],
  [108.102962538, 11.286192457],
  [108.102906211, 11.286100395],
  [108.102973266, 11.285989921],
  [108.103370233, 11.285755821],
  [108.103684052, 11.285416506],
  [108.103740378, 11.285332335],
  [108.103303178, 11.284727354],
  [108.103161021, 11.284422233],
  [108.102903529, 11.284101329],
  [108.102884754, 11.283977702],
  [108.103002771, 11.283906683],
  [108.10335414, 11.283838293],
  [108.103507026, 11.283769904],
  [108.103566035, 11.283656798],
  [108.103531166, 11.283541062],
  [108.103423878, 11.283404283],
  [108.103136881, 11.283346415],
  [108.103077873, 11.283178072],
  [108.103270992, 11.282757213],
  [108.103421195, 11.282744061],
  [108.10383962, 11.282765104],
  [108.104587956, 11.28245472],
  [108.104620143, 11.282349505],
  [108.104630872, 11.282220616],
  [108.104646965, 11.28203386],
  [108.104550405, 11.281739257],
  [108.10457991, 11.281597216],
  [108.104984923, 11.281336809],
  [108.105178042, 11.280702885],
  [108.1050788, 11.280481932],
  [108.105084165, 11.280282022],
  [108.105178042, 11.280189959],
  [108.106100722, 11.279779617],
  [108.106374307, 11.279798029],
  [108.107111915, 11.279463969],
  [108.107173606, 11.279303514],
  [108.107119962, 11.279164103],
  [108.10702072, 11.279111495],
  [108.106419905, 11.27901417],
  [108.105572327, 11.279056256],
  [108.105277284, 11.278685369],
  [108.105116351, 11.27856437],
  [108.104732796, 11.278417067],
  [108.104612096, 11.278448632],
  [108.10455577, 11.278535435],
  [108.104491397, 11.278753759],
  [108.104292913, 11.278872128],
  [108.104137345, 11.278880019],
  [108.103936179, 11.278924736],
  [108.103785976, 11.279048365],
  [108.103697463, 11.279195668],
  [108.103748425, 11.279485012],
  [108.103708192, 11.279627053],
  [108.103616997, 11.279658618],
  [108.103335365, 11.279566554],
  [108.103010817, 11.278872128],
  [108.102895482, 11.278832672],
  [108.102694317, 11.278893171],
  [108.102517291, 11.278961561],
  [108.101795777, 11.279072039],
  [108.101490005, 11.279206189],
  [108.101396128, 11.279377165],
  [108.100350066, 11.27986905],
  [108.100170358, 11.279992679],
  [108.099904819, 11.280013722],
  [108.099749251, 11.279992679],
  [108.09966342, 11.279863789],
  [108.099633916, 11.279769095],
  [108.099781438, 11.279327188],
  [108.100371524, 11.278651173],
  [108.100508316, 11.278580152],
  [108.102517291, 11.27786731],
  [108.102595075, 11.277827854],
  [108.102954491, 11.277543769],
  [108.103169068, 11.277454335],
  [108.103670641, 11.277459596],
  [108.103941544, 11.277272836],
  [108.104086383, 11.277057141],
  [108.10411857, 11.276594186],
  [108.104239269, 11.276218035],
  [108.104212447, 11.275828731],
  [108.104223176, 11.2757051],
  [108.104317053, 11.275547274],
  [108.104359968, 11.275365774],
  [108.104453846, 11.274944903],
  [108.104700609, 11.274671337],
  [108.104708656, 11.274524032],
  [108.104563816, 11.274016355],
  [108.10340242, 11.272830019],
  [108.103126152, 11.272435449],
  [108.102895482, 11.271985639],
  [108.102640672, 11.271130735],
  [108.102356358, 11.268910603],
  [108.102498515, 11.2687896],
  [108.103040322, 11.26862914],
  [108.103308543, 11.268634401],
  [108.103772565, 11.268610726],
  [108.10441093, 11.268516028],
  [108.104966148, 11.268500245],
  [108.105368479, 11.268318741],
];

export var QL28LDLine = createLines(path, "Quốc Lộ 28", "tỉnh Lâm Đồng");