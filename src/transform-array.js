module.exports = function transform(arr) {
    if (!(arr instanceof Array)) {
        throw('throws an Error if arr is not an Array');
    }

    let transformArr = [];
    
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === '--discard-next') {
            i++;
            continue;
        } else if (arr[i] === '--discard-prev') {
            transformArr.pop();
        } else if (arr[i] === '--double-next') {
            if (i !== arr.length - 1) {
                arr.splice(i + 1, 0, arr[i + 1]);
            }
        } else if (arr[i] === '--double-prev') {
            if (i !== 0) {
                transformArr.push(arr[i - 1]);
            }
        } else {
            transformArr.push(arr[i]);
        }
    }

    return transformArr;
};
