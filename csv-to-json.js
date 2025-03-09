const fs = require('fs').promises;
const csvToJson= async () => {
// return []
const file = await fs.readFile('./color_srgb.csv', 'utf-8');
const dataArr = file.split('\n')
let res = []
let keys = dataArr[0].split(',');
console.log(keys)
for(let i = 1; i < dataArr.length; i++) {
  let obj = {}
  const curentData = dataArr[i].split(',');
  for(let j = 0; j < keys.length; j++) {
    obj[keys[j]] = curentData[j];
  }
  res.push(obj)
}
return JSON.stringify(res, null, 2)
}
csvToJson().then(data => console.log(data));
