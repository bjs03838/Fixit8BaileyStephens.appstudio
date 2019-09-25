function myProduct(num1, num2) {
  return num1 * num2
}

let bigNumbers = [123, 433, 54326, 2234, 1919, 1123, 1928, 3374, 23, 190, 33874]
let product = 1


for (i = 0; i < bigNumbers.length; i++) {
  product = myProduct(product,bigNumbers[i])
}

console.log(product)