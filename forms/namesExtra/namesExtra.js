function myReverse(rNames) {
  return rNames.reverse()
}

let names = ["Bob", "Janet", "Tom", "Bob", "Randy", "Elizabeth", "Kim", "Nancy"]

let rNames = myReverse(names)

i = 0
for (i = 0; i < rNames.length; i++) {
  console.log(rNames[i]);
}