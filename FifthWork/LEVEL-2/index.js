setTimeout(() => {                  //1.setTimeout加入宏队列里,最后执行
    console.log('setTimeout start');    //9.最后调用这个宏任务, 打印'setTimeout start'
    new Promise((resolve) => {          
        console.log('promise1 start');  //10.同步任务立即执行
        resolve();                      //11.resolve()立即执行，后面的then加入微任务队列
    }).then(() => {
        console.log('promise1 end');     //执行当前宏任务的最后一个微任务, 打印'promise1 end'
    })
    console.log('setTimeout end');      //12.同步任务执行, 打印'setTimeout end'
}, 0);
function promise2() {
    return new Promise((resolve) => {
        console.log('promise2');    //5.打印'promise2'
        resolve();                  //6.函数调用结束
    })
}
async function async1() {
    console.log('async1 start');    //3.打印'async1 start'
    await promise2();               //4.调用promise()，进入异步队列，继续执行主程序
    console.log('async1 end');      //8.主同步任务执行完，执行这个微任务，打印'async1 end'
}
async1();                       //2.进入这个主程序
console.log('script end');         //7.打印'script end'

//promise async是微任务，优先级高于宏任务

//执行顺序如下
//async1 start
//promise2
//script end
//async1 end
//setTimeout start
//promise1 start
//setTimeout end
//promise1 end