function num(string, numberOfCharacters) {
  let output = 0;
  output = string.replaceAll(" ", "").substr(0, numberOfCharacters);
  return output;
}
console.log(number("this is my string", 12));
console.log(number("this is my string", 4));
