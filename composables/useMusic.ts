/*
nicole
des viages des figures
perdu d'avance
la fête est finie
animals
dark side of the moon
wish you were here
the wall
to hell with it
to be one with you
nurture
dummy
when marnie was there
a moon shaped pool
pablo honney
kid a mnesia
in rainbows
spectre radiohead
return of the dream canteen
mother's milk
blood sugar sex magic
the gateway
by the way
stadium arcadium
the red red velvet
dogma resistance
draining love story
we are not your kind
a light for attracting attention
bloodsport
squaring the circle
becoming x
virtual paradire
plastic memories
mignonne
orphic
hoodie tiffi
the eraser
sunshine kitty
wueen of the clouds
lady wood
astro world
v vald
memories ost
after hours
lately i feel everything
the unforgiving
ep2
record
bae yung bae
mirai addiction
fruiscante albulm
*/

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
  Halo2Vol2 = "Martin O'Donnell, Michael Salvatori",
  MasayoshiTakanaka = 'Masayoshi Takanaka',
  MassiveAttack = 'Massive Attack',
  MetroBoomin = 'Metro Boomin',
  MIA = 'M.I.A.',
  TakenKing = 'Michael Salvatori, C Paul Johnson, Skye Lewin',
  MartinODonnell = "Martin O'Donnell",
  MisterV = 'Mister V',
  Modjo = 'Modjo',
  Muse = 'Muse',
  NickDrake = 'Nick Drake'
}

const album = (title: string, artist: string, link: string, poster: string) => ({
  title: title,
  artist: artist,
  link: link,
  poster: poster
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
    'Happier Than Ever',
    Artist.BillieEilish,
    'https://open.spotify.com/album/0JGOiO34nwfUdDrD612dOp',
    'happier-than-ever.jpg'
  ),
  album(
    'Debut',
    Artist.Bjork,
    'https://open.spotify.com/album/2Fb37JsRMVPASJcl3wwDOa',
    'debut.jpg'
  ),
  album('Post', Artist.Bjork, 'https://open.spotify.com/album/3p7WXDBxhC5KS9IFXnwae7', 'post.jpg'),
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
    'Minecraft - Volume Alpha',
    Artist.C418,
    'https://open.spotify.com/album/3Gt7rOjcZQoHCfnKl5AkK7',
    'minecraft-alpha.jpg'
  ),
  album(
    'Minecraft - Volume Beta',
    Artist.C418,
    'https://open.spotify.com/album/7CYDRyFCKtAYJBSpfovLyX',
    'minecraft-beta.jpg'
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
    'In Tongues',
    Artist.Joji,
    'https://open.spotify.com/album/6ZksrxRWlJ7ExylPyJwfLJ',
    'in-tongues.jpg'
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
  album('DSVII', Artist.M83, 'https://open.spotify.com/album/1Pyu7uKUDKNhdsYDL82Wkg', 'dsvii.jpg'),
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
    'Halo 2, Vol. 2',
    Artist.Halo2Vol2,
    'https://open.spotify.com/album/3rkOmkp3M2pc6jNALIKMvg',
    'halo-2-vol-2.jpg'
  ),
  album(
    'All Of Me',
    Artist.MasayoshiTakanaka,
    'https://open.spotify.com/playlist/4P8CfUPlsEeP4SvmQ0vHtb',
    'all-of-me.jpg'
  ),
  album(
    'SEYCHELLES',
    Artist.MasayoshiTakanaka,
    'https://open.spotify.com/album/7BQPfd39YTObQGamGhDF7g',
    'seychelles.jpg'
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
  album(
    'HEROES & VILLAINS',
    Artist.MetroBoomin,
    'https://open.spotify.com/album/7txGsnDSqVMoRl6RQ9XyZP',
    'heroes-and-villains.jpg'
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
  )
];

const shuffle = <T>(array: T[]): T[] => {
  let currentIndex = array.length;
  let randomIndex;

  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
  }

  return array;
};

export default function (): Album[] {
  return shuffle(albums);
}
