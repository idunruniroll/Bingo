// generate_qrs.js
const QRCode = require('qrcode');
const fs     = require('fs');
const path   = require('path');

// ---- bring in your fixed arrays ----
// 12 entries for a 5×5 board: 5 rows, 5 cols, main diag, anti‑diag
const cts = [
  '…row0 hash…','…row1…','…row2…','…row3…','…row4…',
  '…col0…','…col1…','…col2…','…col3…','…col4…',
  '…main‑diag…','…anti‑diag…'
];

const names = [
  'CSIT','Div0','DSO','Opening Talk','Athena Dynamics',
  'SARTS','Darknet Intelligence','Bug Bounty Village','ISD','Puzzletopia',
  'TikTok','Hardware Badge','Range Village','ShellGym','DIS',
  'ISC2 SG Youth Wing','Booth‑17','Booth‑18','Booth‑19','Booth‑20',
  'Booth‑21','Booth‑22','Booth‑23','Booth‑24','Booth‑25'
];

// make sure output folder exists
const outDir = path.resolve(__dirname, 'qr_output');
if (!fs.existsSync(outDir)) fs.mkdirSync(outDir);

(async () => {
  for (let row = 0; row < 5; row++) {
    for (let col = 0; col < 5; col++) {
      const idx     = row * 5 + col;
      const label   = names[idx].replace(/\s+/g,'_');
      // pick your cts indices:
      const rowHash  = cts[row];
      const colHash  = cts[5 + col];
      const diagHash =
        row === col            ? cts[10] :
        row + col === 4        ? cts[11] :
        '' ;
      const payload = [ row, col, rowHash, colHash, diagHash ].join(';');

      const filePath = path.join(outDir, `${label}_${row}_${col}.png`);
      await QRCode.toFile(filePath, payload, {
        width:  400,   // px
        margin: 2
      });
      console.log('✅', filePath);
    }
  }
  console.log('\nAll QR codes generated in ./qr_output');
})();
