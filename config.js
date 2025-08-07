const cts = ['9746696f1bcfabde9cd551c494f0d9049cabb58abeaeedc59f5453b6b1867c7fff23050663b4cdac', '032c7a499fef5b16514c6e118bc7d740a22e0749355b9311a670af3eb647a0f06b491620e7943d64', 'eea551f0be8ad6519009d4f29fb140581e56234de265dfe3a824bbde667e301586c03d99c6f1b023', 'f02db57bef718650d52234ccb17cb77317dc028bae323a5eb7a42ed34c1f6bb59848d912970ae022', '6af2a60e698d89fba432dd8b8be5c0fde22408d080559ffe7603210d2ab86b7a0297ca6711f6ef89', 'c1f70404c732fc9766ce19af07025f13eaa5a5953608affdcf476a7f2b7ecc29a992686dbf499ae5', 'bd338ae693abdd2ddcc1820a0238b7a7d1869c680ebc400303837ee621aca30bd556e68febd0bb5f', 'ed75432f4fa806858c56c5ef730d494bd744aeb072871b96926e1a16d09c014d85102f4637d360f7', '0cf78d1afab3f52f6b04b6ed0be4b713ef3b77b4db465eb7553e2396f24789f26492e17382c8935d', 'af93534405b4102bd714616025e063d3da7cbee28117c5cb24d18c96f6d7be60c7f63f2d7dcf7659', 'a61a69f56fdee0aab23f8e6b4cb240dfaa4d90919df0fb727bfb7f47e582de61ce7f059c17a586d8', '3e6169ab1160d25887d744e9b1dbdcc156d289ddf7f0bbabc14a79ef01d2c779560405c2691bb42a']
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
