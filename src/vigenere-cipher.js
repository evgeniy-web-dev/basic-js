// Шифр Виженера
// Задача - реализовать класс VigenereCipheringMachine.
// Конструктор этого класса принимает true (или ничего) для создания прямой машины и false для создания обратной машины.
// У каждого экземпляра VigenereCipheringMachine должно быть 2 метода: шифрование и дешифрование.

const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(type) {
    this.type = type;
  }
  encrypt(message, key) {
    message = message.toUpperCase();
    let keycode = key.toUpperCase();

    const messageLength = message.length;
    keycode = keycode.repeat(Math.ceil(messageLength / key.length)).split('');

    let code = "";
    for(let i = 0; i < messageLength; i++) {
      if(65 <= message.charCodeAt(i) &&  message.charCodeAt(i) < 91) {
        code += String.fromCharCode(((message.charCodeAt(i) + keycode[0].charCodeAt(0)) % 26) + 65);
        keycode.shift();
      } else {
        code += message.charAt(i);
      }
    }

    if(this.type === false) {
      return code.split('').reverse().join('');
    }
    return code;
  }    
  decrypt(message, key) {
    message = message.toUpperCase();
    let keycode = key.toUpperCase();

    const messageLength = message.length;
    keycode = keycode.repeat(Math.ceil(messageLength / key.length)).split('');

    let code = "";
    for(let i = 0; i < messageLength; i++) {
      if(65 <= message.charCodeAt(i) &&  message.charCodeAt(i) < 91) {
        code += String.fromCharCode(((message.charCodeAt(i) + 26 - keycode[0].charCodeAt(0)) % 26) + 65);
        keycode.shift();
      } else {
        code += message.charAt(i);
      }
    }

    if(this.type === false) {
      return code.split('').reverse().join('');
    }
    return code;
  }
}

module.exports = VigenereCipheringMachine;
