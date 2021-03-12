// Команда мечты
// Задача - реализовать функцию createDreamTeam (members),
// которая возвращает имя созданной команды (строку) на основе имен ее участников (Array).


const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  const team = []

  if (!Array.isArray(members)) {
    return false
  }

  for (let name of members) {
    if (typeof name === 'string') {
      team.push(name.trim().split('')[0])
    }
  }
  
  return  team.map((e) => e.toUpperCase()).sort().join('');
};