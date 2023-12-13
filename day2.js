const fs = require('fs')
// For example, the record of a few games might look like this:

// Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green
// Game 2: 1 blue, 2 green; 3 green, 4 blue, 1 red; 1 green, 1 blue
// Game 3: 8 green, 6 blue, 20 red; 5 blue, 4 red, 13 green; 5 green, 1 red
// Game 4: 1 green, 3 red, 6 blue; 3 green, 6 red; 3 green, 15 blue, 14 red
// Game 5: 6 red, 1 blue, 3 green; 2 blue, 1 red, 2 green
// In game 1, three sets of cubes are revealed from the bag (and then put back again). The first set is 3 blue cubes and 4 red cubes; the second set is 1 red cube, 2 green cubes, and 6 blue cubes; the third set is only 2 green cubes.

// The Elf would first like to know which games would have been possible if the bag contained only 12 red cubes, 13 green cubes, and 14 blue cubes?

// In the example above, games 1, 2, and 5 would have been possible if the bag had been loaded with that configuration. However, game 3 would have been impossible because at one point the Elf showed you 20 red cubes at once; similarly, game 4 would also have been impossible because the Elf showed you 15 blue cubes at once. If you add up the IDs of the games that would have been possible, you get 8.

// Determine which games would have been possible if the bag had been loaded with only 12 red cubes, 13 green cubes, and 14 blue cubes. What is the sum of the IDs of those games?


const getInputForDay = (day) => fs.readFileSync(`./day${day}.txt`, "utf-8").trim().split('\n');

const lines = getInputForDay(2);

const maxRed = 12;
const maxGreen = 13;
const maxBlue = 14;

let red = 0;
let green = 0;
let blue = 0;

let result = 0;

const extractInt = (string) => {
  const regex = /[\D]/g;
  return parseInt(string.replace(regex, ''));
}

// premiere boucle pour extraire le N° du game et le set
for (let a = 0; a < lines.length; a++) {
  let game = lines[a].split(':')
  let gameNum = extractInt(game[0]);
  let gameSet = game[1].split(";");

  // boucle sur le set [ ' 1 blue, 2 green', ' 3 green, 4 blue, 1 red', ' 1 green, 1 blue' ]
  for (let i = 0; i < gameSet.length; i++) {
    const ga = gameSet[i].split(',');

    for (let g = 0; g < ga.length; g++) {
      const color = ga[g];
      // console.log("color", color);
      if (color.includes("blue")) {
        blue += extractInt(color);
      }
      if (color.includes("green")) {
        green += extractInt(color);
      }
      if (color.includes("red")) {
        red += extractInt(color);
      }
    };
  }

  if (!(blue > maxBlue || green > maxGreen || red > maxRed)) {
    result += gameNum
  }
  blue = 0
  green = 0
  red = 0

};

console.log("result", result);


// function possibleGames(data, red, green, blue) {
//   const possibleGames = [];

//   for (let i = 0; i < data.length; i++) {
//     const gameData = data[i].split(';');
//     let redCount = 0;
//     let greenCount = 0;
//     let blueCount = 0;

//     for (const subset of gameData) {
//       const colors = subset.split(', ');
//       for (const color of colors) {
//         const count = parseInt(color.split(' ')[0]);
//         const type = color.split(' ')[1];

//         if (type === 'red') {
//           redCount += count;
//         } else if (type === 'green') {
//           greenCount += count;
//         } else if (type === 'blue') {
//           blueCount += count;
//         }
//       }
//     }

//     if (!(redCount > red || greenCount > green || blueCount > blue)) {
//       possibleGames.push(i + 1); // Adding 1 because the game IDs start from 1
//     }
//   }

//   return possibleGames;
// }

// const inputData = [
//   "Game 1: 4 red, 3 blue; 6 blue, 16 green; 9 blue, 13 green, 1 red; 10 green, 4 red, 6 blue",
//   // ... (rest of the game data)
//   "Game 100: 7 blue, 6 red, 5 green; 3 blue, 13 green, 11 red; 6 red, 13 green, 14 blue; 8 red, 10 blue, 15 green"
// ];

// const result1 = possibleGames(lines, 12, 13, 14);
// console.log("Possible Games:", result);
// console.log("Sum of IDs:", result1.reduce((sum, id) => sum + id, 0));