const fs = require('fs');

const path = 'src/components/Navbar.jsx';
let content = fs.readFileSync(path, 'utf8');

const oldMobile = `{[...connectorsData.ecommerce, ...connectorsData.accounting, ...connectorsData.hr].map((item) => (`;
const newMobile = `{[...connectorsData.ecommerce, ...connectorsData.accounting, ...connectorsData.hr, ...connectorsData.payment, ...connectorsData.inventory, ...connectorsData.crm, ...connectorsData.communication].map((item) => (`;

if (content.includes(oldMobile)) {
  content = content.replace(oldMobile, newMobile);
  fs.writeFileSync(path, content, 'utf8');
  console.log('Successfully updated mobile connectors list!');
} else {
  console.log('Mobile snippet not found');
}
