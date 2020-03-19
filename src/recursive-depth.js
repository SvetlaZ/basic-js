module.exports = class DepthCalculator {
    calculateDepth(arr, depth = 0) {
        if (arr instanceof Array) {
            let max = depth + 1;
        
            for (let i = 0; i < arr.length; i++) {
                let res = this.calculateDepth(arr[i], depth + 1);
                max = max >= res ? max : res;
            }
        
        return max;
        }
    return depth;
    }
};
    