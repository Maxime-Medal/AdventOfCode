const fs = require('fs')

getInputForDay = (day) => fs.readFileSync(`./day${day}.txt`, "utf-8").trim().split('\r\n');

// const lines = fs.readFileSync("./day1.txt", "utf-8").trim().split('\r\n');
const lines1 = getInputForDay(1);

let result = 0;

for (let index = 0; index < lines1.length; index++) {
    const element = array[index];

}


