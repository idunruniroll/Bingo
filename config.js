const cts ['95251d4dcf8787f58e79aa62c363739eaec3202e3dbacfb60a6bfbd35712f2fcfd407124b7fce187', '5844f1a7c318e25a8e2d5f9de299b997aeecc9be40c45aa54c9d1debabd11ecc30219dcebb638428', '839b2e7ae4b049f71d546d0eb73ba75b9ffee31413ee64a4963bd1ad9f77bb39ebfe42139ccb2f85', 'd43d0287fc1ee3a948c510f80db3a285e91855a9dac5f0c873952a8d772952debc586eee846585db', 'c2809069f451add60f0c81f8fa16c72352bb756aab9693b58e91e35b0f3aa404aae5fc008c2acba4', 'dd9dcec5b091590e85f4ab5296c99598079d842ba68d412163c23b0ba554635ab5f8a2acc8ea3f7c', 'c88991bf12edfd0d2adc0b50a275f26d323a082239eb3c47cfb3d7655eaa9920a0ecfdd66a969b7f', 'c3fde57294db6e1085c854bf435f05c09e77c56aa8ac3b6b78e48ab500ba7ca9ab98891beca00862', 'c555e91bd0d60dff640aea6404e3a70ba8c143d79c79c96c14b76cf2b22c4b3dad308572a8ad6b8d', '5d08fd50acde87eeddbc4b39cb66dd4f3b9abeb893566459ee9c78c29336a07b356d9139d4a5e19c', '1254704b0d24e80b7dafc963755292660a99ecde2e8ccb626a840a0c71c3d9f77a311c22755f8e79', 'e7952f4528644f1e47616fb0aa860dc2919b330d1d8659a5ad441396bb15bc028ff0432c501f296c']

const names = ['Helix Yogis','Let\'s Meditate!',
    'Helix Bean & Leaf',
    'Helix Heights',
    'Table Tennis',
    'Frisbee (Hucks)',
    'Floorball',
    'Helix Gym',
    'Pickle Ball',
    'Basketball/Volleyball',
    'Running',
    'Badminton',
    'Helix Readers/Helix Sustainability',
    'Helix Band',
    'Crochet Club',
    'Dance Society',
    'Helix Photography Club',
    'Helix Gardening',
    'Helix Oven & Stove',
    'heArt',
    'Helix Knights',
    'Helix Games',
    'Helix Heritage',
    'Helix House Board Friends Forever',
    'Helix Publicity'
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
