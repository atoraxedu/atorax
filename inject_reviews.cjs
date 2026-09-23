const fs = require('fs');
const path = require('path');

const filesToUpdate = [
  'DigitalMarketing.jsx',
  'Cybersecurity.jsx',
  'AIFullStack.jsx',
  'DataAnalytics.jsx',
  'DataScience.jsx'
];

const dir = path.join(__dirname, 'frontend', 'src', 'page');

filesToUpdate.forEach(file => {
  const filePath = path.join(dir, file);
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf-8');
    
    // Add import
    if (!content.includes('import MncReviews from "../Components/MncReviews";')) {
      content = content.replace(
        'import AuthorityMarquee from "../Components/AuthorityMarquee";',
        'import AuthorityMarquee from "../Components/AuthorityMarquee";\nimport MncReviews from "../Components/MncReviews";'
      );
    }
    
    // Add component
    if (!content.includes('<MncReviews />')) {
      content = content.replace(
        /<AuthorityMarquee theme="dark" \/>/,
        '<AuthorityMarquee theme="dark" />\n      <MncReviews />'
      );
    }
    
    fs.writeFileSync(filePath, content, 'utf-8');
    console.log(`Updated ${file}`);
  } else {
    console.log(`File not found: ${file}`);
  }
});
