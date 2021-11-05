const fs = require('fs');
(async()=>{
  const file = await fs.readFileSync('./encodedeth.txt', 'utf8');
  console.log(file);
  const buffer = new Buffer.from(file, 'hex');
  fs.writeFileSync('decodedHexImage.png', buffer);
})();