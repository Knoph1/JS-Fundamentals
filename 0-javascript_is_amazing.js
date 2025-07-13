// 0-javascript_is_amazing.js
const myVar = 'JavaScript is amazing';
console.log(myVar);

// 1-multi_languages.js
console.log("C is fun\nPython is cool\nJavaScript is amazing");

// 2-arguments.js
const args2 = process.argv.slice(2);
if (args2.length === 0) {
  console.log("No argument");
} else if (args2.length === 1) {
  console.log("Argument found");
} else {
  console.log("Arguments found");
}

// 3-value_argument.js
const arg3 = process.argv[2];
console.log(arg3 !== undefined ? arg3 : "No argument");

// 4-concat.js
const arg4_1 = process.argv[2];
const arg4_2 = process.argv[3];
console.log(`${arg4_1} is ${arg4_2}`);

// 5-to_integer.js
const arg5 = parseInt(process.argv[2]);
console.log(isNaN(arg5) ? "Not a number" : `My number: ${arg5}`);

// 6-multi_languages_loop.js
const langs = ["C is fun", "Python is cool", "JavaScript is amazing"];
for (const lang of langs) console.log(lang);

