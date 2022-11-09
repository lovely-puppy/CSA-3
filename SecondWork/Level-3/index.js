function map(arr, callback) {
    let flag = (!Array.isArray(arr) || !arr.length || typeof callback !== 'function');
    if (flag) {
        console.log(111);
        return [];
    } else {
        let newArr = [];
        for (let i = 0; i < arr.length; ++ i ) {
            newArr[i] = callback(arr[i], i, arr);
        }
        return newArr;
    }
}
let arr = [1, 2, 3, 4, 5];
console.log(map(arr, x => x*x));