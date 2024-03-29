class Animal {
  constructor(name, lifespan, food, description, length, weight, location, smallimg, bigimg, group, index) {
    this.name = name;
    this.lifespan = lifespan;
    this.food = food;
    this.description = description;
    this.length = length;
    this.weight = weight;
    this.location = location;
    this.smallimg = smallimg;
    this.bigimg = bigimg;
    this.group = group;
    this.index = index;
  }
}
const frillNeckedLizard = new Animal(
  "Frill-Necked Lizard",
  "20 years",
  "Small insects and spiders",
  "When this unique creature feels threatened, it rises on its hind legs, opens its yellow-coloured mouth, unfurls the colorful, pleated skin flap that encircles its head, and hisses. If an attacker is unintimidated by these antics, the lizard simply turns tail, mouth and frill open, and bolts, legs splaying left and right. It continues its deliberate run without stopping or looking back until it reaches the safety of a tree.",
  "90cm",
  "1kg",
  "Northern Australia",
  "./img/frilled-lizard-small.jpeg",
  "./img/frilled-lizard-big.jpeg",
  "reptiles",
  "1"
);

const blueTongued = new Animal(
  "Blue-tongued Skink",
  "15 years",
  "Insects, fruits, and small vertebrates",
  "The Blue-tongued Skink is known for its distinctive blue tongue, which it uses as a warning signal. When threatened, it may hiss, flatten its body, and display its colorful tongue to deter predators.",
  "50cm",
  "0.5kg",
  "Eastern Australia",
  "./img/blue-tongue-small.jpeg",
  "./img/blue-thong-big.jpeg",
  "reptiles",
  "2"
);

const taipanSnake = new Animal(
  "Taipan Snake",
  "15 years",
  "Small mammals and birds",
  "The Taipan is one of the world's most venomous snakes. Despite its potent venom, it is generally shy and prefers to avoid human encounters. It is known for its striking appearance and deadly bite.",
  "200cm",
  "3kg",
  "Central Australia",
  "./img/taipan-snake-small.jpeg",
  "./img/taipan-snake-big.jpeg",
  "reptiles",
  "3"
);

const frilledDragon = new Animal(
  "Frilled Dragon",
  "15 years",
  "Insects and small vertebrates",
  "The Frilled Dragon, similar to the Frill-necked Lizard, has a frill that it displays when threatened. It also has a unique way of moving, using its hind legs and tail to glide from tree to tree in search of prey.",
  "70cm",
  "0.7kg",
  "Northern Australia",
  "./img/frilled-dragon-small.jpeg",
  "./img/frilled-dragon-big.jpeg",
  "reptiles",
  "4"
);

const stimsonPython = new Animal(
  "Stimson's Python",
  "20 years",
  "Small mammals and birds",
  "Stimson's Python is a non-venomous snake with a calm disposition. It is known for its attractive coloration and is often kept as a pet. It constricts its prey before consuming it.",
  "120cm",
  "2kg",
  "Southern Australia",
  "./img/stimson-small.jpeg",
  "./img/stimson-big.jpeg",
  "reptiles",
  "5"
);

const goanna = new Animal(
  "Goanna",
  "25 years",
  "Birds, eggs, and small mammals",
  "The Goanna is a large monitor lizard found across Australia. It is an excellent climber and forager, using its keen sense of smell to locate food. Some species of Goannas can reach impressive sizes.",
  "150cm",
  "5kg",
  "Various regions in Australia",
  "./img/goana-small.jpeg",
  "./img/goanna-big.jpeg",
  "reptiles",
  "6"
);

const cassowary = new Animal(
  "Cassowary",
  "20 years",
  "Plants matter like fruit, insects and small animals like mice amd lizards",
  "It’s not hard to imagine that cassowaries are descended from dinosaur ancestors. The largest cassowaries can stand as high as six feet and weigh up to 160 pounds.   These large birds cannot fly, but their extremely powerful legs propel them at great speeds. They are strong swimmers and can move quickly on both land and water. Cassowaries are shy and they are usually hard to spot, at least in their natural rain forest habitats. They are not overly aggressive, and attacks are rare. But they can do a lot of damage if they are provoked or angered. Cassowary attacks have occasionally been deadly, including a recent one which occurred in 2019, at a private collection of caged birds in Florida",
  "1.7 m",
  "44 kg",
  "./img/Cassowary.jpg",
  "./img/Cassowary.jpg",
  "birds",
  "7"
);

const echidna = new Animal(
  "Echidna",
  "50 years",
  "insects such as ants and termites, beetle larvae and worms",
  "Echidnas, also called spiny anteaters, are walking contradictions. They are mammals, but they lay eggs. They are often classified as long- or sort-beaked, but don't have beaks at all, in the traditional sense; they have fleshy noses that can be either on the long side or rather short. They don't really look like true anteaters (Myrmecophaga tridactyla), either, and they are not closely related to them. They are spiny, though; their bodies are covered with hollow, barbless quills. Echidnas are monotremes, egg-laying mammals. The only other living monotreme is the platypus.",
  "76 cm",
  "10 kg",
  "./img/Echidna.jpg",
  "./img/Echidna.jpg",
  "mammals",
  "8"
);
const wallabies = new Animal(
  "Wallabies",
  "9 years",
  "Herbivore",
  "The yellow-footed rock wallaby is a marsupial—a pouched mammal—belonging to the same family as the kangaroo. This rock wallaby lives in mountain habitats in isolated portions of Australia. The yellow-footed rock wallaby moves easily around mountaintops, jumping as far as 13 feet (four meters) from rock to rock and even scaling cliffs and climbing trees. In the hot Australian summers, the wallaby is active only at night, while in the winter it can sometimes be seen sunbathing on the rocks.",
  "12 to 41 inches; tail: 10 to 29 inches",
  "4 to 53 pounds",
  "mountain habitats in isolated portions of Australia.",
  "./img/Wallabies.jpg",
  "./img/Wallabies.jpg",
  "mammals",
  "9"
);
const tasmanian_Devil = new Animal(
  "Tasmanian-Devil",
  "Up to 5 years",
  "Carnivore",
  "If you watch cartoons, the first thing you think of when you hear the name Tasmanian devil is probably Taz, the whirling, maniacal, always hungry, angry cartoon character. But Tasmanian devils are real and are feisty like the cartoon Taz! Tasmanian devils are the largest carnivorous (meat-eating) marsupials in the world. Tasmanian devils live in Tasmania, a large island just south of Australia. In fact, Tasmania is the only place where they are found in the wild. Adult Tasmanian devils are usually about the size of a small dog. They have coarse brown or black fur and a pudgy appearance that makes them look like baby bears. But don't let their cuteness fool you. They have sharp teeth and strong, muscular jaws that can deliver one of the most powerful bites of any mammal on Earth.",
  "20 to 31 inches",
  "9 to 26pounds",
  "south of Australia.",
  "./img/Tasmanian-Devil.jpg",
  "./img/Tasmanian-Devil.jpg",
  "mammals",
  "10"
);
const koala = new Animal(
  "Koala",
  "20 years",
  "Herbivore",
  "The koala is an iconic Australian animal. Often called the koala “bear,” this tree-climbing animal is a marsupial—a mammal with a pouch for the development of offspring.Though koalas look fuzzy, their hair is more like the coarse wool of a sheep. They have two opposing thumbs on their hands, and both their feet and hands have rough pads and claws to grab onto branches. They have two toes, fused together, on their feet, which they use to comb their fur.",
  "23.5 to 33.5 inches",
  " 20 pounds",
  "the eucalyptus forests of southeastern and eastern Australia",
  "./img/koala.jpg",
  "./img/koala.jpg",
  "mammals",
  "11"
);
const kookaburra = new Animal(
  "Kookaburra",
  "15 years",
  "Insects, small mammals, and reptiless",
  "Known as the 'laughing kookaburra,' these birdss are famous for their distinctive vocalization that sounds like human laughter. They are carnivorous and often perch on high vantage points, waiting to swoop down on their prey. Kookaburras are social birds and are found in various habitats across Australia.",
  "45cm",
  "0.5kg",
  "Eastern Australia",
  "/img/kookaburra-small.jpeg",
  "/img/kookaburra-big.jpeg",
  "birds",
  "12"
);
const lorikeet = new Animal(
  "Rainbow Lorikeet",
  "20 years",
  "Nectar, pollen, fruits, and seeds",
  "The Rainbow Lorikeet is a colorful and highly social birds. Their vibrant plumage features a spectrum of colors, and they are often found in flocks. Lorikeets have specialized brush-tipped tongues for feeding on nectar and pollen. They are common in coastal regions and urban areas of Australia.",
  "30cm",
  "0.15kg",
  "Various regions in Australia",
  "/img/lorikeet-small.jpeg",
  "/img/lorikeet-big.jpeg",
  "birds",
  "13"
);

const emu = new Animal(
  "Emu",
  "20 years",
  "Plants, insects, small vertebrates",
  "The Emu is the world's second-largest bird, known for its flightless nature. Emus have strong, long legs and are excellent runners. They are found in various habitats, including forests, savannas, and deserts. Emus are essential to Australian culture, often depicted in indigenous art and mythology.",
  "1.9m",
  "36kg",
  "Throughout Australia",
  "/img/emu-small.jpeg",
  "/img/emu-big.jpeg",
  "birds",
  "14"
);

const hawksbillTurtle = new Animal(
  "Hawksbill Turtle",
  "50 years",
  "Other animals (sponges & jellyfish), sea plants",
  "The Hawksbill Sea Turtle gets its common name from the distinctive mouth, which resembles a bird’s beak. The shell, or carapace, is covered in large overlapping scutes, which are a distinctive brown/green/amber background with lighter brown streaks throughout. At the edge of the carapace they overlap in such a way as to form a serrated edge. The turtle has an elongated head and flippers which have two visible claws on the end. The flippers and head are covered in large green, brown or yellow scales. The average adult female weighs 50 kg and their carapace (shell) is approximately 80 cm in length.",
  "80cm (carapace)",
  "50kg",
  "Tropical coasts of Queensland, Northern Territory and Western Australia",
  "./img/hawksbill-turtle-small.jpeg",
  "./img/hawksbill-turtle-big.jpeg",
  "reptiles",
  "15"
);

const quokka = new Animal(
  "Quokka",
  "10 years",
  "Plant eaters, they munch on shrubs and grasses",
  "The Quokka, Setonix brachyurus, was described by early Dutch explorer, Willem de Vlamingh, 'as a kind of rat as big as a common cat'. His first sighting of the Quokka was on an island off the mouth of the Swan River. He named the island Rottenest ('rat nest') in honour of this sighting. The island is now known as Rottnest Island. Essentially the Quokka looks very much like other wallabies.It has short, very coarse and thick grey-brown fur over most of the body with lighter parts underneath. Its facial features consist of a naked nose on a short, broad face with rounded furry ears.The tail is relatively short and mostly devoid of hair. In contrast, the hair on the feet extends to cover its claws.",
  "50cm",
  "3kg",
  "Only found on Rottnest Island and a few places on mainland Western Australia",
  "./img/quokka-small.jpeg",
  "./img/quokka-big.jpeg",
  "mammals",
  "16"
);

const perentie = new Animal(
  "Perentie",
  "20 years",
  "Carnivore, they eat animals like kangaroos, rabbits, lizards and birds",
  "The perentie (Varanus giganteus) is the largest monitor lizard or goanna native to Australia. It is one of the largest living lizards on earth, after the Komodo dragon, Asian water monitor, crocodile monitor, and intersecting by size with Nile monitor.[3] Found west of the Great Dividing Range in the arid areas of Australia, it is rarely seen, because of its shyness and the remoteness of much of its range from human habitation. The species is considered to be a least-concern species according to the International Union for Conservation of Nature. Its status in many Aboriginal cultures is evident in the totemic relationships, and part of the Ngiṉṯaka dreaming, as well as bush tucker. It was a favoured food item among desert Aboriginal tribes, and the fat was used for medicinal and ceremonial purposes.",
  "2.5 m",
  "20kg",
  "Deserts",
  "./img/perentie-small.jpeg",
  "./img/perentie-big.jpeg",
  "reptiles",
  "17"
);

const yellowTailedBlackCockatoo = new Animal(
  "Yellow-tailed Black Cockatoo",
  "41 years",
  "Fruit, seeds and other plant material",
  "It has a short crest on the top of its head. Its plumage is mostly brownish black and it has prominent yellow cheek patches and a yellow tail band. The body feathers are edged with yellow giving a scalloped appearance. The adult male has a black beak and pinkish-red eye-rings, and the female has a bone-coloured beak and grey eye-rings. In flight, yellow-tailed black cockatoos flap deeply and slowly, with a peculiar heavy fluid motion. Their loud, wailing calls carry for long distances. The whiteae is found south of Victoria to the East of South Australia and is smaller in size. The yellow-tailed black cockatoo is found in temperate forests and forested areas across south and central eastern Queensland to southeastern South Australia, including a very small population persisting in the Eyre Peninsula.[4] Two subspecies are recognised, although Tasmanian and southern mainland populations of the southern subspecies xanthanotus may be distinct enough from each other to bring the total to three. Birds of subspecies funereus (Queensland to eastern Victoria) have longer wings and tails and darker plumage overall, while those of xanthanotus (western Victoria, South Australia and Tasmania) have more prominent scalloping.",
  "65 cm",
  "900 grams",
  "SE Australia",
  "./img/yellow-tailed-black-cockatoo-small.jpeg",
  "./img/yellow-tailed-black-cockatoo-big.jpeg",
  "birds",
  "18"
);

export const arrayOfAnimals = [frillNeckedLizard, blueTongued, taipanSnake, frilledDragon, stimsonPython, goanna, cassowary, echidna, wallabies, tasmanian_Devil, koala, kookaburra, lorikeet, emu, hawksbillTurtle, quokka, perentie, yellowTailedBlackCockatoo];

export const arrayOfBirds = arrayOfAnimals.filter((animal) => animal.group === "birds");
export const arrayOfReptiles = arrayOfAnimals.filter((animal) => animal.group === "reptiles");
export const arrayOfMammals = arrayOfAnimals.filter((animal) => animal.group === "mammals");
