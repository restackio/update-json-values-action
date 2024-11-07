const fs = require('fs');
const path = require('path');

const prependText = "require('./sourcemap-register.js');\n";

// Read all js files in dist
const distPath = path.join(__dirname, './dist');
const files = fs.readdirSync(distPath).filter(f => f.endsWith('.js'));

files.forEach(file => {
  const filePath = path.join(distPath, file);
  const content = fs.readFileSync(filePath, 'utf8');
  fs.writeFileSync(filePath, prependText + content);
});
