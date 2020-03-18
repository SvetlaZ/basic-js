module.exports = function (arr) {
  if (!(arr instanceof Array)) {
    return false;
  }
  let code = [];
  arr.forEach(function(el) {
    if(typeof(el) === 'string') {
      el.trim();
      code.push(el.trim()[0].toUpperCase());
    }    
  });
  return code.sort().join('');
};
