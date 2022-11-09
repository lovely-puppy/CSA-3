//1. Object构造函数创建
let obj1 = new Object();
obj1.name = "孙悟空";
obj1.age = 18;
console.log(obj1);

//2. 使用对象字面量创建对象
let obj2 = {
    name: "猪八戒",
    age: 19
}
console.log(obj2);

//使用工厂模式创建对象
function createPerson(name, age, job) {
    let o = new Object();
    o.name = name;
    o.age = age;
    o.job = job;
    o.sayHi = function() {
        console.log("welcome! " + o.name);
    }
    return o;
}
let obj3 = createPerson("沙和尚", 20, "打工仔");
console.log(obj3);
obj3.sayHi();

//使用构造函数创建对象
function Person(name, age) {
    this.name = name;
    this.age = age;
    this.sayHi = function() {
        console.log("HELLO, " + this.name);
    }
}
let obj4 = new Person("白骨精", 40);
console.log(obj4);
obj4.sayHi();

//原型创建对象
function Person2(){}
Person2.prototype.name = "唐僧";
Person2.prototype.age = 23;
Person2.prototype.sayHi = function() {
    console.log("You're welcome, " + this.name);
}
let obj5 = new Person2();
console.log(obj5);
obj5.sayHi();
