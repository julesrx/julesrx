/*
AMOK
hey u x
you come and go like a pop song
happier than ever
debut gjork
post 
twilight boa
post human survival horror
excursions
life changing moment
mionecraft volumes alpha and beta
because the internet
c-girl
parachutees
discovery
random acces memory
tron
alive 2007
rise and fall of ziggy stardust
nineteen desired
hotel california
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
  ArianaGrande = 'Ariana Grande'
}

const albums: Album[] = [
  {
    title: 'Final Jam (Live at Chorzów 2007)',
    artist: Artist.RHCP,
    link: 'https://youtu.be/T5V9eaiKuxo',
    poster: 'rhcp-chorzow-2007.jpg'
  },
  {
    title: 'Jagged Little Pill',
    artist: Artist.Morissette,
    link: 'https://open.spotify.com/album/5Ap3F8CxjjsQKZGASDcHNA',
    poster: 'jagged-little-pill.jpg'
  },
  {
    title: 'Nonante-Cinq',
    artist: Artist.Angele,
    link: 'https://open.spotify.com/album/3I756vFQ1PWvG2Q2jJsIkA',
    poster: 'nonante-cinq.jpg'
  },
  {
    title: 'Positions',
    artist: Artist.ArianaGrande,
    link: 'https://open.spotify.com/album/3euz4vS7ezKGnNSwgyvKcd',
    poster: 'positions.jpg'
  }
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
