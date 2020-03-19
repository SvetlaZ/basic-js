module.exports = function repeater(str, options) {
    options.repeatTimes = options.repeatTimes || 1;
    options.separator = options.separator || '+';
    options.addition = options.addition !== undefined ? String(options.addition) : '';
    options.additionRepeatTimes = options.additionRepeatTimes || 1;
    options.additionSeparator = options.additionSeparator || '|';
    
    let addition = [];
    addition.length = options.additionRepeatTimes;
    addition.fill(options.addition, 0);
    
    let string = str + addition.join(options.additionSeparator);
    
    let result = [];
    result.length = options.repeatTimes;
    result.fill(string, 0);
    
    return result.join(options.separator);
    };
    
  