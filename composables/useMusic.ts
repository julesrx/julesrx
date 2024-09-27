interface Album {
    title: string;
    artist: string;
    link: string;
    poster: string;
}

const enum Artist {
    RHCP = 'Red Hot Chili Peppers',
    Morissette = 'Alanis Morissette',
    Angele = 'Angèle',
    ArianaGrande = 'Ariana Grande',
    AtomsForPeace = 'Atoms For Peace',
    Benee = 'BENEE',
    TheBicycleThief = 'The Bicycle Thief',
    BillieEilish = 'Billie Eilish',
    Bjork = 'Björk',
    Boa = 'bôa',
    BringMeTheHorizon = 'Bring Me The Horizon',
    C418 = 'C418',
    ChildishGambino = 'Childish Gambino',
    CityGirl = 'City Girl',
    Coldplay = 'Coldplay',
    DaftPunk = 'Daft Punk',
    DavidBowie = 'David Bowie',
    Desired = 'Desired',
    Eagles = 'Eagles',
    Gorillaz = 'Gorillaz',
    Incubus = 'Incubus',
    InfectedMushroom = 'Infected Mushroom',
    JeffBuckley = 'Jeff Buckley',
    Joji = 'Joji',
    KateBush = 'Kate Bush',
    Lookas = 'Lookas',
    M83 = 'M83',
    Macross8299 = 'Macross 82-99',
    Halo2Vol1 = "Martin O'Donnell, Michael Salvatori, Incubus, Nataraj, Nile Rodgers, Hoobastank, Breaking Benjamin",
    MasayoshiTakanaka = 'Masayoshi Takanaka',
    MassiveAttack = 'Massive Attack',
    MIA = 'M.I.A.',
    TakenKing = 'Michael Salvatori, C Paul Johnson, Skye Lewin',
    MartinODonnell = "Martin O'Donnell",
    MisterV = 'Mister V',
    Modjo = 'Modjo',
    Muse = 'Muse',
    NickDrake = 'Nick Drake',
    NIKI = 'NIKI',
    NoirDesir = 'Noir Désir',
    PinkFloyd = 'Pink Floyd',
    PinkPantheress = 'PinkPantheress',
    Pluralone = 'Pluralone',
    PorterRobinson = 'Porter Robinson',
    Portishead = 'Portishead',
    TakatsuguMuramatsu = 'Takatsugu Muramatsu',
    Radiohead = 'Radiohead',
    RedVelvet = 'Red Velvet',
    RIOT = 'RIOT',
    Sewerslvt = 'Sewerslvt',
    Slipknot = 'Slipknot',
    TheSmile = 'The Smile',
    SneakerPimps = 'Sneaker Pimps',
    Starjunk95 = 'Starjunk 95',
    TaekoOnuki = 'Taeko Onuki',
    Tessina = 'tessina',
    ThomYorke = 'Thom Yorke',
    ToveLo = 'Tove Lo',
    VariousArtists = 'Various Artists',
    TheWeeknd = 'The Weeknd',
    WILLOW = 'WILLOW',
    WithinTemptation = 'Within Temptation',
    Yaeji = 'Yaeji',
    Zero7 = 'Zero 7',
    YungBae = 'Yung Bae',
    Mirai = 'ぷにぷに電機',
    JohnFrusciante = 'John Frusciante',
    Damso = 'Damso',
    Evanescence = 'Evanescence',
    TheBeatles = 'The Beatles',
    FrouFrou = 'Frou Frou',
    PorcupineTree = 'Porcupine Tree'
}

const album = (title: string, artist: string, link: string, poster: string) => ({
    title,
    artist,
    link,
    poster
});

const albums: Album[] = [
    album(
        'Final Jam (Live at Chorzów 2007)',
        Artist.RHCP,
        'https://youtu.be/T5V9eaiKuxo',
        'rhcp-chorzow-2007.jpg'
    ),
    album(
        'Jagged Little Pill',
        Artist.Morissette,
        'https://open.spotify.com/album/5Ap3F8CxjjsQKZGASDcHNA',
        'jagged-little-pill.jpg'
    ),
    album(
        'Nonante-Cinq',
        Artist.Angele,
        'https://open.spotify.com/album/3I756vFQ1PWvG2Q2jJsIkA',
        'nonante-cinq.jpg'
    ),
    album(
        'Positions',
        Artist.ArianaGrande,
        'https://open.spotify.com/album/3euz4vS7ezKGnNSwgyvKcd',
        'positions.jpg'
    ),
    album(
        'AMOK',
        Artist.AtomsForPeace,
        'https://open.spotify.com/album/77Ie9frENeQwYUGHrrS0pk',
        'amok.jpg'
    ),
    album(
        'Hey u x',
        Artist.Benee,
        'https://open.spotify.com/album/4KKRAmQ0ksj32l7mrgLOcF',
        'hey-u-x.jpg'
    ),
    album(
        'You Come and Go Like a Pop Song',
        Artist.TheBicycleThief,
        'https://open.spotify.com/album/5FMnvaW58gXVjl23BiA9FS',
        'you-come-and-go.jpeg'
    ),
    album(
        'HIT ME HARD AND SOFT',
        Artist.BillieEilish,
        'https://open.spotify.com/album/7aJuG4TFXa2hmE4z1yxc3n',
        'hit-me-hard-and-soft.jpg'
    ),
    album(
        'Debut',
        Artist.Bjork,
        'https://open.spotify.com/album/2Fb37JsRMVPASJcl3wwDOa',
        'debut.jpg'
    ),
    album(
        'Post',
        Artist.Bjork,
        'https://open.spotify.com/album/3p7WXDBxhC5KS9IFXnwae7',
        'post.jpg'
    ),
    album(
        'Twilight',
        Artist.Boa,
        'https://open.spotify.com/album/7sGYAV0xv7ZfAMzIpMl8m1',
        'twilight.jpg'
    ),
    album(
        'POST HUMAN: SURVIVAL HORROR',
        Artist.BringMeTheHorizon,
        'https://open.spotify.com/album/0e1WaSNDZnoPixaxDNdWo4',
        'post-human-survival-horror.jpg'
    ),
    album(
        'Excursions',
        Artist.C418,
        'https://open.spotify.com/album/4mW73jKDNYQzWdkQR3BvTZ',
        'excursions.jpg'
    ),
    album(
        'Life Changing Moments Seem Minor in Pictures',
        Artist.C418,
        'https://open.spotify.com/album/1xvYnbUkrhFBkZ0w7Er3As',
        'life-changing-moment.jpg'
    ),
    album(
        'Because the Internet',
        Artist.ChildishGambino,
        'https://open.spotify.com/album/62yjWIhnATHxPqGbgC9Lqr',
        'because-the-internet.jpg'
    ),
    album(
        'C-GIRL',
        Artist.CityGirl,
        'https://open.spotify.com/album/5bRMP8rq8cFDqDaobUR6jp',
        'c-girl.jpg'
    ),
    album(
        'Parachutes',
        Artist.Coldplay,
        'https://open.spotify.com/album/6ZG5lRT77aJ3btmArcykra',
        'parachutes.jpg'
    ),
    album(
        'Discovery',
        Artist.DaftPunk,
        'https://open.spotify.com/album/2noRn2Aes5aoNVsU6iWThc',
        'discovery.jpg'
    ),
    album(
        'Random Access Memories',
        Artist.DaftPunk,
        'https://open.spotify.com/album/4m2880jivSbbyEGAKfITCa',
        'random-access-memories.jpg'
    ),
    album(
        'TRON: Legacy',
        Artist.DaftPunk,
        'https://open.spotify.com/album/3AMXFnwHWXCvNr5NCCpLZI',
        'tron-legacy.jpg'
    ),
    album(
        'Alive 2007',
        Artist.DaftPunk,
        'https://open.spotify.com/album/7u6zL7kqpgLPISZYXNTgYk',
        'alive-2007.jpg'
    ),
    album(
        'The Rise and Fall of Ziggy Stardust and the Spiders from Mars',
        Artist.DavidBowie,
        'https://open.spotify.com/album/48D1hRORqJq52qsnUYZX56',
        'the-rise-and-fall.jpg'
    ),
    album(
        'Nineteen',
        Artist.Desired,
        'https://open.spotify.com/album/69fOwmdCZIaWPE4OLLnuQi',
        'nineteen.jpg'
    ),
    album(
        'Hotel California',
        Artist.Eagles,
        'https://open.spotify.com/album/2widuo17g5CEC66IbzveRu',
        'hotel-california.jpg'
    ),
    album(
        'Demon Days',
        Artist.Gorillaz,
        'https://open.spotify.com/album/0bUTHlWbkSQysoM3VsWldT',
        'demon-days.jpg'
    ),
    album(
        'Plastic Beach',
        Artist.Gorillaz,
        'https://open.spotify.com/album/2dIGnmEIy1WZIcZCFSj6i8',
        'plastic-beach.jpeg'
    ),
    album(
        'Make Yourself',
        Artist.Incubus,
        'https://open.spotify.com/album/2i6nd4FV6y7K9fln6eelmR',
        'make-yourself.jpg'
    ),
    album(
        'Head of NASA and the 2 Amish Boys',
        Artist.InfectedMushroom,
        'https://open.spotify.com/album/5VVuvHfpofdhT6ExslEk2B',
        'head-of-nasa.jpg'
    ),
    album(
        'Grace',
        Artist.JeffBuckley,
        'https://open.spotify.com/album/7yQtjAjhtNi76KRu05XWFS',
        'grace.jpg'
    ),
    album(
        'Nectar',
        Artist.Joji,
        'https://open.spotify.com/album/5EzDhyNZuO7kuaABHwbBKX',
        'nectar.jpg'
    ),
    album(
        'Hounds Of Love',
        Artist.KateBush,
        'https://open.spotify.com/album/5G5UwqPsxDKpxJLX4xsyuh',
        'hounds-of-lLove.jpg'
    ),
    album(
        'Lucid',
        Artist.Lookas,
        'https://open.spotify.com/album/5eWvwGl3wUpFJwloxPpyaH',
        'lucid.jpg'
    ),
    album(
        'DSVII',
        Artist.M83,
        'https://open.spotify.com/album/1Pyu7uKUDKNhdsYDL82Wkg',
        'dsvii.jpg'
    ),
    album(
        'Summer Touch',
        Artist.Macross8299,
        'https://open.spotify.com/album/3uIjfqtbqXC1C09RDF2BvK',
        'summer-touch.jpg'
    ),
    album(
        'Halo 2, Vol. 1',
        Artist.Halo2Vol1,
        'https://open.spotify.com/album/29K85ghxBzcQHPNPX6QVld',
        'halo-2-vol-1.jpg'
    ),
    album(
        'All Of Me',
        Artist.MasayoshiTakanaka,
        'https://open.spotify.com/playlist/4P8CfUPlsEeP4SvmQ0vHtb',
        'all-of-me.jpg'
    ),
    album(
        'Collected',
        Artist.MassiveAttack,
        'https://open.spotify.com/album/1X4zW7kIY8bQHO9gDTsIVh',
        'collected.jpg'
    ),
    album(
        'Mezzanine',
        Artist.MassiveAttack,
        'https://open.spotify.com/album/49MNmJhZQewjt06rpwp6QR',
        'mezzanine.jpg'
    ),
    album('AIM', Artist.MIA, 'https://open.spotify.com/album/7sZqZpGN6leR2PncwkuaUc', 'aim.jpg'),
    album(
        'Destiny: The Taken King',
        Artist.TakenKing,
        'https://open.spotify.com/album/3tTZQMWFhpj2tLEgFICy0c',
        'taken-king.jpg'
    ),
    album(
        'Music of the Spheres',
        Artist.MartinODonnell,
        'https://www.destinypedia.com/Music_of_the_Spheres',
        'music-of-the-spheres.webp'
    ),
    album(
        'MVP (Réédition)',
        Artist.MisterV,
        'https://open.spotify.com/album/2S6HuDg9fWVsNMOw5OpTgu',
        'mvp.jpg'
    ),
    album(
        'Modjo',
        Artist.Modjo,
        'https://open.spotify.com/album/0vwDxngkhZuwNbcxzebCXI',
        'modjo.jpg'
    ),
    album(
        'The 2nd Law',
        Artist.Muse,
        'https://open.spotify.com/album/3KuXEGcqLcnEYWnn3OEGy0',
        '2nd-law.jpg'
    ),
    album(
        'Showbiz',
        Artist.Muse,
        'https://open.spotify.com/album/6AyUVv7MnxxTuijp4WmrhO',
        'showbiz.jpg'
    ),
    album(
        'Origin of Symmetry',
        Artist.Muse,
        'https://open.spotify.com/album/1Dh27pjT3IEdiRG9Se5uQn',
        'origin-of-symmetry.jpg'
    ),
    album(
        'Hullabaloo Soundtrack',
        Artist.Muse,
        'https://open.spotify.com/album/5eJTvSeghTKoqN3Ly4TqEf',
        'hullabaloo.jpg'
    ),
    album(
        'Pink Moon',
        Artist.NickDrake,
        'https://open.spotify.com/album/5mwOo1zikswhmfHvtqVSXg',
        'pink-moon.jpeg'
    ),
    album(
        'Nicole',
        Artist.NIKI,
        'https://open.spotify.com/album/5WR7ksPLp3kqFbDLTYpGfx',
        'nicole.jpg'
    ),
    album('Buzz', Artist.NIKI, 'https://open.spotify.com/album/3g73KFee4dbxDq5vTmX92S', 'buzz.jpg'),
    album(
        'Des visages des figures',
        Artist.NoirDesir,
        'https://open.spotify.com/album/2GbW5WBU1BFSChvxtt6BBH',
        'des-visages-des-figures.jpg'
    ),
    album(
        'Animals',
        Artist.PinkFloyd,
        'https://open.spotify.com/album/21jUB9RqplD6OqtsTjKBnO',
        'animals.jpg'
    ),
    album(
        'The Dark Side Of The Moon',
        Artist.PinkFloyd,
        'https://open.spotify.com/album/2WT1pbYjLJciAR26yMebkH',
        'dark-side-of-the-moon.jpg'
    ),
    album(
        'Wish You Were Here',
        Artist.PinkFloyd,
        'https://open.spotify.com/album/6uvBKDGlJAYLH5Vy6RQVsc',
        'whish-you-were-here.jpg'
    ),
    album(
        'to hell with it',
        Artist.PinkPantheress,
        'https://open.spotify.com/album/65YAjLCn7Jp33nJpOxIPMe',
        'to-hell-with-it.jpg'
    ),
    album(
        'Heaven knows',
        Artist.PinkPantheress,
        'https://open.spotify.com/album/2pOEFqvfxp5uUQ8vQEmVA0',
        'heaven-knows.jpg'
    ),
    album(
        'To Be One With You',
        Artist.Pluralone,
        'https://open.spotify.com/album/0PIPosV94hSadH43s9cpGx',
        'to-be-one-with-you.jpg'
    ),
    album(
        'Nurture',
        Artist.PorterRobinson,
        'https://open.spotify.com/album/4Hjqdhj5rh816i1dfcUEaM',
        'nurture.jpg'
    ),
    album(
        'Dummy',
        Artist.Portishead,
        'https://open.spotify.com/album/3539EbNgIdEDGBKkUf4wno',
        'dummy.jpg'
    ),
    album(
        'When Marnie Was There Soundtrack Music Collection',
        Artist.TakatsuguMuramatsu,
        'https://open.spotify.com/album/00odo2OS2nQ1j15oeG53g2',
        'when-marnie-was-there.jpg'
    ),
    album(
        'OK Computer',
        Artist.Radiohead,
        'https://open.spotify.com/album/6dVIqQ8qmQ5GBnJ9shOYGE',
        'ok-computer.jpg'
    ),
    album(
        'In Rainbows',
        Artist.Radiohead,
        'https://open.spotify.com/album/5vkqYmiPBYLaalcmjujWxK',
        'in-rainbows.jpg'
    ),
    album(
        'A Moon Shaped Pool',
        Artist.Radiohead,
        'https://open.spotify.com/album/2ix8vWvvSp2Yo7rKMiWpkg',
        'a-moon-shaped-pool.jpg'
    ),
    album(
        'Spectre',
        Artist.Radiohead,
        'https://open.spotify.com/track/4Nwrh5BlZ8I31znYQULS7G',
        'spectre.jpg'
    ),
    album(
        'Return of the Dream Canteen',
        Artist.RHCP,
        'https://open.spotify.com/album/0KJc9ksnoJJsdpQxV3z5i1',
        'return-of-the-dream-canteen.jpg'
    ),
    album(
        'Blood Sugar Sx Magik',
        Artist.RHCP,
        'https://open.spotify.com/album/30Perjew8HyGkdSmqguYyg',
        'blood-sugar-sx-magik.jpg'
    ),
    album(
        'The Getaway',
        Artist.RHCP,
        'https://open.spotify.com/album/43otFXrY0bgaq5fB3GrZj6',
        'the-getaway.jpg'
    ),
    album(
        'Californication',
        Artist.RHCP,
        'https://open.spotify.com/album/2Y9IRtehByVkegoD7TcLfi',
        'californication.jpg'
    ),
    album(
        'Stadium Arcadium',
        Artist.RHCP,
        'https://open.spotify.com/album/7xl50xr9NDkd3i2kBbzsNZ',
        'stadium-arcadium.jpg'
    ),
    album(
        'The Red - The 1st Album',
        Artist.RedVelvet,
        'https://open.spotify.com/album/6YL9J0E6PGtYzkhyMxnmXd',
        'the-red.jpg'
    ),
    album(
        'Dogma Resistance',
        Artist.RIOT,
        'https://open.spotify.com/album/1AUS845POFhV3oDytPImEZ',
        'dogma-resistance.jpg'
    ),
    album(
        'Draining Love Story',
        Artist.Sewerslvt,
        'https://open.spotify.com/album/3yQqw6ZJDHey6HZCpsrFTb',
        'draining-love-story.jpg'
    ),
    album(
        'We Are Not Your Kind',
        Artist.Slipknot,
        'https://open.spotify.com/album/754RY5WpZ2LTUZsk8kDBju',
        'we-are-not-your-kind.jpg'
    ),
    album(
        'A Light for Attracting Attention',
        Artist.TheSmile,
        'https://open.spotify.com/album/009EjjwUjtdjvH7UP0wHzi',
        'a-light-for-attracting-attention.jpg'
    ),
    album(
        'Wall of Eyes',
        Artist.TheSmile,
        'https://open.spotify.com/album/6PdPOv5ybKZ9ZuGMk5iGZd',
        'wall-of-eyes.jpg'
    ),
    album(
        'Bloodsport',
        Artist.SneakerPimps,
        'https://open.spotify.com/album/0V1zcB4nkvqbJiu9KZjj5M',
        'bloodsport.jpg'
    ),
    album(
        'Squaring The Circle',
        Artist.SneakerPimps,
        'https://open.spotify.com/album/0npeEzm8BfqZ1YwnzlvfA7',
        'squaring-the-circle.jpg'
    ),
    album(
        'Becoming X',
        Artist.SneakerPimps,
        'https://open.spotify.com/album/3Skq5OhENzzRDMSx5FPrx3',
        'becoming-x.jpg'
    ),
    album(
        'Virtual Paradise',
        Artist.Starjunk95,
        'https://open.spotify.com/album/5dTsAGwJrgSvsg2YRAaU2i',
        'virtual-paradise.jpg'
    ),
    album(
        'Plastic Memories EP',
        Artist.Starjunk95,
        'https://open.spotify.com/album/02l0raSv3gwKdieSlpgiFA',
        'plastic-memories.jpg'
    ),
    album(
        'MIGNONNE',
        Artist.TaekoOnuki,
        'https://open.spotify.com/album/0Y4RPWAZZui6gUL1kwgND6',
        'mignonne.jpg'
    ),
    album(
        'orphic',
        Artist.Tessina,
        'https://open.spotify.com/album/5efYmjgweNMJL13b6SSG2w',
        'orphic.jpeg'
    ),
    album(
        'The Eraser',
        Artist.ThomYorke,
        'https://open.spotify.com/album/4X8Y79gWo6xm7Osdapg58E',
        'the-eraser.jpg'
    ),
    album(
        'Sunshine Kitty',
        Artist.ToveLo,
        'https://open.spotify.com/album/5kaCqETtik8oE7M9D8wxrW',
        'sunshine-kitty.jpg'
    ),
    album(
        'Queen Of The Clouds',
        Artist.ToveLo,
        'https://open.spotify.com/album/5Z5O36p7BivXzkucc0PAfw',
        'queen-of-the-clouds.jpg'
    ),
    album(
        'Lady Wood',
        Artist.ToveLo,
        'https://open.spotify.com/album/1tuekzsMZQOuiMejKP6t2Y',
        'lady-wood.jpg'
    ),
    album(
        'KATSUHIRO OTOMO PRESENTS『MEMORIES』ORIGINAL MOTION PICTURE SOUNDTRACK',
        Artist.VariousArtists,
        'https://open.spotify.com/album/7pSNL28h30l1t2l0RqMT5R',
        'memories.jpg'
    ),
    album(
        'After Hours (Deluxe)',
        Artist.TheWeeknd,
        'https://open.spotify.com/album/742eAldb4AJKLoPgJhGRE7',
        'after-hours.jpg'
    ),
    album(
        'lately I feel EVERYTHING',
        Artist.WILLOW,
        'https://open.spotify.com/album/1dg0gmrCaEbENVXpPIvi1m',
        'lately-i-feel.jpg'
    ),
    album(
        'The Unforgiving',
        Artist.WithinTemptation,
        'https://open.spotify.com/album/1EvpTfBqlDzPwDYzWTgTw3',
        'the-unforgiving.jpg'
    ),
    album('EP2', Artist.Yaeji, 'https://open.spotify.com/album/6zB32HTy4cewV8V7TuHzKJ', 'ep2.jpg'),
    album(
        'RECORD',
        Artist.Zero7,
        'https://open.spotify.com/album/7zzSukXVNC1jAHEK7vY7Bq',
        'record.jpg'
    ),
    album(
        'Bae',
        Artist.YungBae,
        'https://open.spotify.com/album/5o0FlSEgJSc3pk5oLoMQbH',
        'bae.jpg'
    ),
    album(
        'MIRAI Addiction',
        Artist.Mirai,
        'https://open.spotify.com/album/1EcEzuHM9YrjhPDUvnEe72',
        'mirai.jpg'
    ),
    album(
        'Shadows Collide With People',
        Artist.JohnFrusciante,
        'https://open.spotify.com/album/7BYMJZFCYuGKi2jblMhyxg',
        'shadows-collide-with-people.jpg'
    ),
    album(
        'The Empyrean',
        Artist.JohnFrusciante,
        'https://open.spotify.com/album/5ZLnZ8o2xA2cmSPYtqExl1',
        'the-empyrean.jpg'
    ),
    album(
        'QALF infinity',
        Artist.Damso,
        'https://open.spotify.com/album/2Cv2mrKMRyYuXJTlQmY4hj',
        'qalf-infinity.jpg'
    ),
    album(
        'Fallen',
        Artist.Evanescence,
        'https://open.spotify.com/album/02w1xMzzdF2OJxTeh1basm',
        'fallen.jpg'
    ),
    album(
        'Slipknot',
        Artist.Slipknot,
        'https://open.spotify.com/album/2dL9Q5AtIv4Rw1L6lKcIUc',
        'slipknot.jpg'
    ),
    album(
        'Let It Be',
        Artist.TheBeatles,
        'https://open.spotify.com/album/1BdxbYp1FaNejpDgtDo25V',
        'let-it-be.jpg'
    ),
    album(
        'Abbey Road',
        Artist.TheBeatles,
        'https://open.spotify.com/album/0ETFjACtuP2ADo6LFhL6HN',
        'abbey-road.jpg'
    ),
    album(
        'Details',
        Artist.FrouFrou,
        'https://open.spotify.com/album/7rwh9WVOm4JGKAbh1xlvPc',
        'details.jpg'
    ),
    album(
        'Deadwing',
        Artist.PorcupineTree,
        'https://open.spotify.com/album/2oQE67Gnc1GoMqoumvjPwN',
        'deadwing.jpg'
    )
];

export default function (): Album[] {
    return albums.sort((a, b) => a.artist.localeCompare(b.artist));
}
