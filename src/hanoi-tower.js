// Ханойская башня
// Реализуйте функцию calculateHanoi, которая принимает параметры diskNumber и turnSpeed.
// diskNumber - это количество дисков, а TurnSpeed ​​- это скорость перемещения дисков (в оборотах в час).
// Оба параметра являются числами.

const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  console.log(turnsSpeed / 3600)
  const result = {
    turns: Math.pow(2, disksNumber) - 1,
    seconds: Math.floor((Math.pow(2, disksNumber) - 1) * (1 / (turnsSpeed / 3600)))
  };
  return result
};