module.exports = function longestConsecutiveLength(array) {
    let res = 1;
    let max = 1;

    if (array.length < 2) return array.length;
    array.sort((a, b) => a - b);
    
    array.forEach((elm, ind, arr) => {
        if (arr[ind + 1] - elm === 1) ++max;
        if (res < max) res = max;
        if (arr[ind + 1] - elm > 1) max = 1;
    });

    return res;
}