const cts = [
    'f8a07ca565ebf3a793f870750699f3387ed68ca7f69e9796a9834c5009beeb76',
    '098a4fe52dc172db468ce64a197dbd2de33a4a72246da26250b3bc4de63baf7e',
    '5aed6a963b835654ff7da8570fbb6beadce2c9a3406ac2ab031ac0237c2a9a70',
    '7ca0d6ac181f8ce44bec75b972892c0bd7ab07d36475d03c393328a158e19c77',
    '896a151f14aaebce26a4b42001b6b2a4e121f0d0425a107c2485e08e685c96a6',
    '648a83cb97c056198cfcaa110a2e3cb989da6c9631b6e79781c5af0c71dfaf82',
    '9781728a977c6d08190c86c8a0cebf491144b1f1b899448ad22da0d2f1bb1c81',
    'f65e7227e41d60ef600a3275b2a8b5c8dabcb08a5d58f37b4e193d520eb4155f',
    '29e1b171dbc43b8ec97984d3b48eb7b83561416c8e6ecbb8e43a0547e699b142',
    'dbd02697295665f3c992eb0e2634e5096d45c812d058ad9ea2a534a8d4da0ff0',
    'b5e0cf8b3b26f582e54b9efee5ea32b86f11ca1e18f142f6a35144aadb57a6b9',
    '873f0569929f42d054671b932d104d1510aa66cdef73c6aa1e568cd6e43dd62a'
    ]


const names = ['Helix Yogis','Let\'s Meditate!',
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
    'heart',
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
    'Helix Publicity',
    ]


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