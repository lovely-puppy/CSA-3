function print(value) {
    let flag = null;
    if (typeof value === 'number') flag = 1;
    else if (typeof value === 'string') flag = 2;
    else if (value instanceof Array) flag = 3;
    else if (value instanceof Function) flag = 4;
    else if (value instanceof Object) flag = 5;
    else if (typeof value === 'boolean') flag = 6;
    else if (typeof value === 'undefined') flag = 7;
    else if (typeof value === 'symbol') flag = 8;
    switch(flag) {
        case 1:
            console.log(typeof value);
            console.log(1);
            break;
        case 2:
            console.log(typeof value);
            console.log(2);
            break;
        case 3:
            console.log(typeof value);
            console.log(3);
            break;
        case 4:
            console.log(typeof value);
            console.log(4);
            break;
        case 5:
            console.log(typeof value);
            console.log(5);
            break;
        case 6:
            console.log(typeof value);
            console.log(6);
            break;
        case 7:
            console.log(typeof value);
            console.log(7);
            break;
        case 8:
            console.log(typeof value);
            console.log(8);
            break;
    }
}
let num = 1;
let str = "str";
let arr = [1, 2, 3];
let fun = function() {};
let obj = new Object();
let bool = true;
let sym = Symbol('foo');
print(num);
print(str);
print(arr);
print(fun);
print(obj);
print(bool);
print();
print(sym);