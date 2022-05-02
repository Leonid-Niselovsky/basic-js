const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(/* str, options */) {
  throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

module.exports = {
  repeater
};

function repeater(str, options) {
  let result = "";
  if (options.addition === undefined) {
    for (let i = 0; i < options.repeatTimes - 1; i++) {
      if (options.separator === undefined) {
          result += str;
          result += '+';
      } else {
            result += str;
            result += options.separator;
      }
    }
    result += str;
    return result;
  } 
  let addResalt = '';
for(let i = 0; i < options.additionRepeatTimes-1; i++){ 
          addResalt += options.addition;      
          if (options.additionSeparator === undefined) {
            addResalt += '|';
          } else {
            addResalt += options.additionSeparator
          } 
      }
  addResalt += options.addition;
  for (let i = 0; i < options.repeatTimes - 1; i++) {
    if (options.separator === undefined) {
    result += str;
    result += addResalt;
    result += '+';
    } else {
      result += str;
      result += addResalt;
      result += options.separator;
    }
  } 
  result += str
  result += addResalt; 
  return result
}  
console.log(repeater('STRING', { repeatTimes: 3, separator: '**', addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' }));