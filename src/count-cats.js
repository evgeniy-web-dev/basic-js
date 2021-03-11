// Считайте кошек!
// Задача - реализовать функцию countCats (backyard), которая будет считать кошек.

const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {

  let count = 0;
  matrix.forEach(element => {
    element.forEach(item => {
      if (item === '^^') 
              count++;
    })
  })
    return count;
};