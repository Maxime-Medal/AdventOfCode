const fs = require('fs')

getInputForDay = (day) => fs.readFileSync(`./day${day}.txt`, "utf-8").trim().split('\r\n');

// const lines = fs.readFileSync("./day1.txt", "utf-8").trim().split('\r\n');
const lines1 = getInputForDay(1);

let result = 0;

// console.log(lines1);

lines1.forEach(s => {
    s = s.replace(/\D/g, '');
    let numInString = '';
    numInString += s.charAt(0);
    numInString += s.charAt(s.length - 1);
    // console.log("start", s.charAt(0));
    // console.log("end", s.charAt(s.length - 1));
    result += parseInt(numInString);
});
console.log(result);