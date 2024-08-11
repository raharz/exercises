function lastCHaracter(char) {
  let output = 0;
  if (typeof char == "String") {
    output = char[char.length - 1];
  } else {
    output = "String has zero length";
  }

  return output;
}

console.log(lastCHaracter("meow"));
console.log(lastCHaracter("ggggggg"));
