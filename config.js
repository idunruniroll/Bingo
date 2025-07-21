const cts = [
    '3c54f089cb0d794a67abf15be0aacf504207003fc81c18f0fc81d09f1a839ed9',
    'a240bbd2a83b1f0cb7e0677b8b23dc23bcc856cb821a9a46b48d5128c8fc181b',
    '87be4c7ed2cf447e4cb070f696808dd71ff7b18128cf3a7bcb5cec81a61aa808',
    'affc2d4e930288e3a237711412f810a1278194c48cd7a07b16b2395f2752977b',
    '193889bcc17f3129ffe45e22b67217a8bb62932c4be401bccf2cb6b6a2c31154',
    'b95d78c50a8e397c2da2b327fadaeb7891bc6588f460c293ab82b9985430e345',
    'c8f68d1b5b029b956ef3f98e42507b83cd390b381b56ce35fcb2370a378860f5',
    '976b6f779191ffa8f4b8a99d5a1d21aa24710362effe5d826477b3c6e27947a7',
    'dafa06700bb6327a2d27b1911107cb4e0c3aa9cfda503a54977be16b4afa4fd3',
    '1624adde0b48e2a368f9550835d6c02eb372cfb616c5bb196f8c6ab975b4884c'
]


const names = [
  'Helix Yogis',
  "Let's Meditate!",
  'Helix Bean & Leaf',
  'Badminton',
  'Table Tennis',
  'Frisbee (Hucks)',
  'Floorball',
  'Helix Gym',
  'Pickle Ball',
  'Basketball',
  'Running',
  'Helix Heights',
  'heArt',
  'Helix Band',
  'Helix Photography Club',
  'Dance Society',
  'Crochet Club',
  'Helix Gardening',
  'Helix Oven & Stove',
  'Helix Readers (book club)',
  'Helix Knights',
  'Helix Games',
  'Helix Heritage',
  'Helix House Board Friends Forever',
  'Helix Publicity'
];



const items = {
    'Opening Talk': "Scan a QR code that will be shown during the Opening Talk.",
    'Hardware Badge': "Complete some challenges at the Hardware booth for this QR code AND a chance to get some limited GreyCTF hardware badge!",
    'ISC2 SG Youth Wing': "Engage with the ISC2 booth to get their QR code!",
    'Div0': "Follow <a href='https://www.instagram.com/div0_sg/'>@div0_sg</a> on instagram and show it at the Div0 Booth",
};

for(const name of names) {
    if (!items[name]) {
        items[name] = `Engage with the ${name} booth to get their QR code!`
    }
}