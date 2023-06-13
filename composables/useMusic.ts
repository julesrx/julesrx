/*
demon days
plastic beach
make yourself
head of nasa and the 2 amish boys
grace
nectar joji
in tongues
hounds of love
lucid lookas
DSVII M83
summer touch
Halo 2 vol 1 & 2
all of me 
seychelles
collected massive attack
mezzanine
heroes and vollains
AIM
Destiny taken king
music of the spheres
MVP mister v
modjo
2nd law
showbiz
origin of symetry
hullaballoo
pink moon
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
  Eagles = 'Eagles'
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
