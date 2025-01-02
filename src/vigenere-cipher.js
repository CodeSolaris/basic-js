const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(isDirect = true) {
    this.isDirect = isDirect;
  }

  encrypt(message, key) {
    if (!message || !key) {
      throw new Error("Incorrect arguments!");
    }

    return this.process(message, key, true);
  }

  decrypt(encryptedMessage, key) {
    if (!encryptedMessage || !key) {
      throw new Error("Incorrect arguments!");
    }

    return this.process(encryptedMessage, key, false);
  }

  process(input, key, isEncrypting) {
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const inputUpper = input.toUpperCase();
    const keyUpper = key.toUpperCase();
    const result = [];
    let keyIndex = 0;

    for (let i = 0; i < inputUpper.length; i++) {
      const char = inputUpper[i];

      if (alphabet.includes(char)) {
        const charIndex = alphabet.indexOf(char);
        const keyChar = keyUpper[keyIndex % keyUpper.length];
        const keyIndexInAlphabet = alphabet.indexOf(keyChar);

        const newIndex = isEncrypting
            ? (charIndex + keyIndexInAlphabet) % 26
            : (charIndex - keyIndexInAlphabet + 26) % 26;

        result.push(alphabet[newIndex]);
        keyIndex++;
      } else {
        result.push(char);
      }
    }

    return this.isDirect ? result.join('') : result.reverse().join('');
  }
}

module.exports = {
  VigenereCipheringMachine
};
