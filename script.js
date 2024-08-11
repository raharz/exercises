const user1 = {
  firstName: "raha",
  lastName: "rezaei",
  age: "19",
};
const user2 = {
  firstName: "mohammad",
  lastName: "rezaei",
  age: "20",
};
const user3 = {
  firstName: "ali",
  lastName: "ahmadi",
  age: "25",
};
const user4 = {
  firstName: "hasti",
  lastName: "ghasemi",
  age: "23",
};

function introduceTheUser(users) {
  return `${users.firstName} ${users.lastName} is ${users.age}`;
}
console.log(introduceTheUser(user1));
console.log(introduceTheUser(user2));
console.log(introduceTheUser(user3));
console.log(introduceTheUser(user4));
