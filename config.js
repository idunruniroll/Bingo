const cts = ['add614adbfbd6701d7737dfce9d94b6ba4e298959e5e0e8debe743b60e9554d0c5b378c4c7c60173', '67914ee5008f27bcf46da1db94c3e43c25a886e0c1d05539e4ef24be2a2c0fc30ff4228c78f441ce', 'abe58d7a86f23bf0e3807e2eee41fce354944bbfe2ddce5c02edf4e2860f6251c380e113fe895d82', '1eb5ad8bb3c88550e6080c9f8ee4171bb110f3becd7b4ea565d465f7d900a5a176d0c1e2cbb3e322', '999d33822280903cb0c801a0c7513e11c4b54789aa0b1d872d2e7ed7f9ae5d87f1f85feb5afbf64e', '9a428f5f94f8c31af32206de5818a4b79cea8d84e449971142aa1f977b0a7236f227e336ec83a568', '7515eb04546370220f3c3ee900aef2483a86e0d518b3b8fa3540dacae97acf7a1d70876d2c181650', '1d683fd97748f9287fa4f0901e85b0a4f3918314c31fad1deea1b047865f746d750d53b00f339f5a', '4dac15fb76b2883b78ad0234638a0c525addb7b5da165203e79f2dfa4a3e1e9d25c979920ec9ee49', 'f29d69d489e67be8e92e29f81933f261eb98833f6a14de2274dbe822dd738cb29af805bdf19d1d9a', '02755a3c3b0621cd27306780212aa2845b22b0e6de7a4a707d8f6cf7469c62f86a103655437d47bf', '839dd67809add483cd2fa0049d40f37419623cddd3cb4e0419becad723ad43d1ebf8ba1171d6b2f1']


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
