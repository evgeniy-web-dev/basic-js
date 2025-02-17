// Рекурсивный калькулятор глубины
// Задача реализовать класс DepthCalculator с методом calculateDepth, который принимает массив и возвращает его глубину.

const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {

  calculateDepth (arr) {
    if (!Array.isArray(arr))
        return 0;
    return 1 + arr.reduce((depth, item) => Math.max(depth, this.calculateDepth(item)), 0);
}

};