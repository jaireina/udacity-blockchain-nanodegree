fs = require('fs');
(async ()=>{
  imgReadBuffer = fs.readFileSync('eth.png');
  imgHexEncode = new Buffer.from(imgReadBuffer).toString('hex');
  // console.log(imgHexEncode);
  fs.writeFileSync('./encodedeth.txt',imgHexEncode);
})();