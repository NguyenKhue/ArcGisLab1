import { createLines } from "../../template/createLines.js";

var path = [
  [108.363729154, 11.766244951],
  [108.375044478, 11.774502035],
  [108.375656021, 11.774769864],
  [108.376106633, 11.774895901],
  [108.376610888, 11.774985177],
  [108.376884473, 11.775021938],
  [108.388988828, 11.774904455],
  [108.395683621, 11.774447571],
  [108.399165129, 11.774206],
  [108.399524545, 11.774206],
  [108.400388216, 11.774258516],
  [108.400822734, 11.774368798],
  [108.401254569, 11.774518467],
  [108.401943897, 11.774857191],
  [108.40262786, 11.775382344],
  [108.403491532, 11.77640639],
  [108.405621206, 11.781111698],
  [108.406171058, 11.782004437],
  [108.406541203, 11.78241142],
  [108.407107149, 11.782870917],
  [108.408080791, 11.78339868],
  [108.410081719, 11.783960576],
  [108.410336529, 11.783989459],
  [108.411489879, 11.78389756],
  [108.412830983, 11.784036721],
  [108.413327192, 11.784002587],
  [108.413922643, 11.783866052],
  [108.414306198, 11.783655997],
  [108.414646839, 11.783375049],
  [108.414968704, 11.783033709],
  [108.41519401, 11.782763263],
  [108.415958439, 11.781119575],
  [108.416376864, 11.780560299],
  [108.416647767, 11.780597059],
  [108.417366599, 11.780888513],
  [108.418045198, 11.780904267],
  [108.419032251, 11.78134276],
  [108.419254874, 11.781340135],
  [108.419737672, 11.780977787],
  [108.421821748, 11.779846104],
  [108.422159706, 11.779767332],
  [108.424198185, 11.779938004],
  [108.428084706, 11.77903213],
  [108.428580915, 11.779126656],
  [108.429492866, 11.779184422],
  [108.430308257, 11.779121404],
  [108.432089244, 11.778585756],
  [108.433647608, 11.778751177],
  [108.434141134, 11.778625142],
  [108.434312795, 11.778504358],
  [108.435820197, 11.777396297],
  [108.436775063, 11.777354285],
  [108.439671849, 11.776419518],
  [108.440138553, 11.776367003],
  [108.441656684, 11.776477285],
  [108.442042922, 11.776435273],
  [108.442504262, 11.776225213],
  [108.442751025, 11.775983643],
  [108.446087693, 11.772423094],
  [108.45842049, 11.763001596],
  [108.4654747, 11.762943827],
  [108.466703152, 11.76295433],
  [108.470522617, 11.761363042],
  [108.470839118, 11.761263258],
  [108.479282712, 11.760249659],
  [108.480328773, 11.760086853],
  [108.48077402, 11.76010786],
  [108.494034861, 11.761116207],
  [108.497843598, 11.76121074],
  [108.504071688, 11.762486923],
  [108.504618858, 11.76274426],
  [108.508803104, 11.768027486],
  [108.512719129, 11.770968402],
  [108.515487169, 11.774754786],
  [108.515712475, 11.774917584],
  [108.515927051, 11.775232676],
  [108.516318654, 11.777511829],
  [108.517241334, 11.778036977],
  [108.522514557, 11.779454872],
  [108.523024176, 11.779475877],
  [108.524901723, 11.779082019],
  [108.527197694, 11.780090296],
  [108.52741227, 11.780337113],
  [108.551753788, 11.802954653],
  [108.552617459, 11.803647784],
  [108.555380134, 11.804188634],
  [108.556308179, 11.805102302],
  [108.556667595, 11.807008393],
  [108.562712942, 11.815572666],
  [108.563158189, 11.816102992],
  [108.5692937, 11.821765697],
  [108.573592378, 11.82379222],
  [108.574847652, 11.824847588],
  [108.575249984, 11.825215128],
  [108.578211142, 11.827236591],
  [108.578248693, 11.827682886],
  [108.578162863, 11.828092426],
  [108.577824904, 11.828895754],
  [108.577781989, 11.829499561],
  [108.578656389, 11.830344888],
  [108.580748512, 11.830523404],
  [108.583495094, 11.829998356],
  [108.585951997, 11.83092769],
  [108.587668611, 11.83116396],
  [108.59090872, 11.832088039],
  [108.593059851, 11.83358966],
  [108.594202472, 11.835590059],
  [108.59450288, 11.836193851],
  [108.594846203, 11.837663948],
  [108.59473355, 11.840745875],
  [108.59478183, 11.841176397],
  [108.595114423, 11.841412659],
  [108.596922232, 11.841785427],
  [108.597592785, 11.842095192],
  [108.597941472, 11.843292246],
  [108.599041177, 11.844321287],
  [108.600135519, 11.844778055],
  [108.601814467, 11.845384034],
  [108.602130967, 11.845452286],
  [108.603236038, 11.845552039],
  [108.605923611, 11.845609791],
  [108.606492239, 11.845583541],
  [108.607339817, 11.845515288],
  [108.610016662, 11.845515288],
  [108.612178522, 11.84369872],
  [108.614517409, 11.842674926],
  [108.6150163, 11.842659175],
  [108.615279156, 11.842685426],
  [108.616523701, 11.843399457],
  [108.617800433, 11.8432367],
  [108.618658739, 11.84254892],
  [108.618964511, 11.842396663],
  [108.619243461, 11.842391413],
  [108.621142465, 11.842727428],
  [108.621523339, 11.842643424],
  [108.621780831, 11.842459666],
  [108.6240017, 11.841189105],
  [108.62482782, 11.841178604],
  [108.625911433, 11.841257358],
  [108.627906996, 11.840952843],
  [108.628990609, 11.840784834],
  [108.632209259, 11.841519871],
  [108.633056837, 11.841514621],
  [108.635460097, 11.841929391],
  [108.636254031, 11.841819136],
  [108.636704642, 11.841519871],
  [108.637707788, 11.840454067],
  [108.640422183, 11.840097048],
  [108.640572387, 11.839992042],
  [108.641151744, 11.839383008],
  [108.641452152, 11.838978735],
  [108.641698915, 11.838800225],
  [108.642954189, 11.838448454],
  [108.643517453, 11.83871622],
  [108.643909055, 11.838684718],
  [108.645309168, 11.838117683],
  [108.645427185, 11.83805468],
  [108.646028, 11.837246128],
  [108.645936805, 11.836416573],
  [108.645577389, 11.836190808],
  [108.645464736, 11.835996545],
  [108.645185787, 11.834920218],
];

export var QL27aLDLine = createLines(path, "Quốc Lộ 27", "tỉnh Lâm Đồng");
