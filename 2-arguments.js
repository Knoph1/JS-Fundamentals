const args2 = process.argv.slice(2);
if (args2.length === 0) {
  console.log("No argument");
} else if (args2.length === 1) {
  console.log("Argument found");
} else {
  console.log("Arguments found");
}
