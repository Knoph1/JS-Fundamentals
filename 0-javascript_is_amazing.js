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

