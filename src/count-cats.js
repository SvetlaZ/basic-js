module.exports = function countCats(arr) {
  let count = 0;
  arr.forEach(el => el.forEach(function(elem) {
    if (elem === '^^') {
      count++;
    }
  }  
    ))
  return count;
  };
