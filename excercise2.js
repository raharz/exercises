function lastCHaracter(char) {
  let output;
  if (typeof char == String) {
    output = char[output.slice(-1)];
  } else {
    output = "String has zero length";
  }

  return output;
}

console.log(lastCHaracter("meow"));
console.log(lastCHaracter("ggggggg"));
