// 1) define your grid IDs
const rows = ['A','B','C','D','E'];
const cols = [1,2,3,4,5];

// 2) load any previously‐scanned boxes
const scanned = JSON.parse(localStorage.getItem('bingo-scanned')||'[]');

// 3) build the grid
const grid = document.getElementById('bingo-grid');
rows.forEach(r => {
  cols.forEach(c => {
    const id = `${r}${c}`;
    const cell = document.createElement('div');
    cell.className = 'bingo-cell';
    cell.dataset.cell = id;
    if (scanned.includes(id)) cell.classList.add('scanned');

    // QR code
    const qrDiv = document.createElement('div');
    new QRCode(qrDiv, { text: id, width:100, height:100 });
    cell.appendChild(qrDiv);

    // label
    const lbl = document.createElement('div');
    lbl.innerText = id;
    cell.appendChild(lbl);

    grid.appendChild(cell);
  });
});

// 4) start scanning
const scanner = new Html5Qrcode("reader");
scanner.start(
  { facingMode: "environment" },
  { fps: 10, qrbox: 250 },
  (decodedText) => {
    // when a QR code is seen:
    const cellEl = document.querySelector(`[data-cell="${decodedText}"]`);
    if (cellEl && !scanned.includes(decodedText)) {
      cellEl.classList.add('scanned');
      scanned.push(decodedText);
      localStorage.setItem('bingo-scanned', JSON.stringify(scanned));
    }
  },
  (err) => {
    // optional: console.warn(`scan error: ${err}`);
  }
);
