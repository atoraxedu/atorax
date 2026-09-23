const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'frontend', 'image');
const destDir = path.join(__dirname, 'frontend', 'public', 'reviews');

if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir, { recursive: true });
}

fs.readdir(srcDir, (err, files) => {
  if (err) throw err;
  
  let count = 1;
  for (const file of files) {
    if (file.endsWith('.png')) {
      const srcPath = path.join(srcDir, file);
      const destPath = path.join(destDir, `${count}.png`);
      fs.copyFileSync(srcPath, destPath);
      console.log(`Copied ${file} to ${count}.png`);
      count++;
    }
  }
});
