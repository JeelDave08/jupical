const fs = require('fs');

const path = 'src/components/Navbar.css';
let content = fs.readFileSync(path, 'utf8');

const normalize = (str) => str.replace(/\r\n/g, '\n');
let norm = normalize(content);

// 1. Update .navbar__dropdown--connectors max-height and overflow
const oldDropdown = `.navbar__dropdown--connectors {
  width: 1040px;
  max-width: 95vw;
  padding: 28px 32px 20px;`;

const newDropdown = `.navbar__dropdown--connectors {
  width: 1060px;
  max-width: 95vw;
  max-height: calc(100vh - 90px);
  overflow-y: auto;
  overscroll-behavior: contain;
  padding: 28px 32px 20px;`;

// 2. Update .nav-connectors-col
const oldCol = `.nav-connectors-col {
  display: flex;
  flex-direction: column;
}`;

const newCol = `.nav-connectors-col {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.nav-connectors-col__group {
  display: flex;
  flex-direction: column;
}`;

if (norm.includes(normalize(oldDropdown))) {
  norm = norm.replace(normalize(oldDropdown), normalize(newDropdown));
} else {
  console.log('oldDropdown not found');
}

if (norm.includes(normalize(oldCol))) {
  norm = norm.replace(normalize(oldCol), normalize(newCol));
} else {
  console.log('oldCol not found');
}

// Add scrollbar styles for .navbar__dropdown--connectors
const scrollbarStyle = `
.navbar__dropdown--connectors::-webkit-scrollbar {
  width: 5px;
}
.navbar__dropdown--connectors::-webkit-scrollbar-thumb {
  background: rgba(0, 117, 255, 0.25);
  border-radius: 4px;
}
.navbar__dropdown--connectors::-webkit-scrollbar-track {
  background: transparent;
}
`;

if (!norm.includes('.navbar__dropdown--connectors::-webkit-scrollbar')) {
  norm = norm.replace(normalize(newDropdown), normalize(newDropdown) + scrollbarStyle);
}

fs.writeFileSync(path, norm, 'utf8');
console.log('Successfully updated Navbar.css!');
