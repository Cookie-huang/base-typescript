/* 
    装饰器： 是一种特殊类型的声明，能够附加到类声明，方法，属性或参数上，可以修改类的行为。

    通俗的讲装饰器就是一个方法，可以注入到类，方法，属性，参数上来扩展类，属性，方法，参数的功能

    常见的装饰器有：类装饰器，属性装饰器，方法装饰器，参数装饰器

    装饰器的写法：普通装饰器（无法传参） 装饰器工厂（可传参）

*/

/* 
    1. 类装饰器

    在类声明之前被声明（紧靠着类声明）
    装饰器应用于类构造函数，可以用来监视，修改或替换类定义。传入一个参数
 */

// 普通装饰器（无法传参）
function sleep_decorators_no(target: any) {
  //   console.log(target);
  target.prototype.sleep1 = function () {
    console.log("sleep1");
  };
}

// 装饰器工厂（可传参）
function sleep_decorators_have(params: string) {
  return function (target: any) {
    // console.log(target);
    target.prototype.sleep2 = function () {
      console.log("参数是：", params);
    };
  };
}

@sleep_decorators_no
@sleep_decorators_have("hello world")
class Dog_decorators {
  constructor() {}
  eat() {}
}

const dog_decorator = new Dog_decorators();
// console.log(dog_decorator);
// dog_decorator.sleep1();
// dog_decorator.sleep2();

/*
  重载构造函数: 装饰器工厂
  如果类装饰器返回一个值，它会使用提供的构造函数来替换类的声明
*/
function newConstructor(target: any) {
  return class extends target {
    apiUrl = "我是替换后的apiUrl";
    getUrl() {
      console.log(this.apiUrl + "----after");
    }
  };
}

@newConstructor
class Http_decorators {
  public apiUrl: string;
  constructor() {
    this.apiUrl = "我是一开始类里的apiUrl";
  }

  getUrl() {
    console.log(this.apiUrl);
  }
}

const http_decorator = new Http_decorators();
// console.log(http_decorator);
// http_decorator.getUrl(); // 我是替换后的apiUrl----after

// ========================分割线=======================================

/* 
  2.属性装饰器:
    属性装饰器表达式会在运行时当作函数被调用，传入下列2个参数：
    参数1: 对于静态成员来说是类的构造函数，对于实例成员是类的原型对象。
    参数2: 成员的名字。（属性的名字）
*/
let test = null;
function newName_decorator(params: string | number) {
  return function (target: any, attr: any) {
    // console.log("装饰器传递的参数:", params);
    // console.log("类的构造函数:", target); //类的原型对象
    // console.log("成员的名字:", attr);
    target[attr] = params;
    test = target;
  };
}

class People_decorators {
  @newName_decorator("我是装饰器的name")
  public name: string;
  @newName_decorator(20)
  public age: number | undefined;
  @newName_decorator("M")
  static sex: string = "F";
  constructor() {
    // console.log("constructor执行");
    // console.log("静态属性:", People_decorators.sex);

    this.name = "我是constructor的name";
  }
}

const people_decorator = new People_decorators();
/* 
    console.log("test", test);
    console.log(People_decorators.prototype);
    // 验证是类的原型对象
    console.log(test === People_decorators.prototype);  // true
*/
// console.log(people_decorator.name); // 我是constructor的name
// console.log(people_decorator.age); // 20 有改变了 age

// ========================分割线=======================================

/* 
  3.方法装饰器
    会被应用到方法的属性描述符上，可以用来监视，修改或者方法定义

    运行时传入3个参数:
    1.对于静态成员来说是类的构造函数，对于实例成员是类的原型对象。
    2.成员的名字。
    3.成员的属性描述符。
*/

function add_decorator(params: any) {
  // console.log(params);

  return function (target: any, methodName: any, desc: any) {
    // console.log(target);
    // console.log(methodName);
    // console.log(desc);
    // console.log(desc.value);

    // 假设我们这个装饰器是功能是将所有参数变为字符串
    const oMethod = desc.value;
    desc.value = function (...args: any[]) {
      args = args.map(item => String(item));

      oMethod.apply(this, args);
    };
  };
}

class Fn_decorator {
  constructor() {}

  @add_decorator("我是方法装饰器参数")
  add(...args: any[]) {
    console.log(args);

    console.log("我是原来的add");
  }
}

const fn_decorator = new Fn_decorator();
// fn_decorator.add(123, "xxx");

// ========================分割线=======================================

/* 
  4.方法参数装饰器

    参数装饰器表达式会在运行时当做函数被调用，可以使用参数装饰器为类的原型增加一些元素数据

    运行时传入3个参数:
    1.对于静态成员来说是类的构造函数，对于实例成员是类的原型对象。
    2.方法的名字。
    3.参数在函数参数列表中的索引。
*/
function minus_decorator(params: any) {
  // console.log(params);

  return function (target: any, methodName: any, paramsIndex: number) {
    // console.log(target);
    // console.log(methodName);
    // console.log(paramsIndex);
  };
}

class Params_decorator {
  constructor() {}

  minus(@minus_decorator("我是参数装饰器的参数") name: string) {}
}

const params_decorator = new Params_decorator();
// console.log(params_decorator);

// ========================分割线=======================================

/* 装饰器执行顺序 */

//  属性  >  方法 >  方法参数 > 类
// 从右向左 从下往上
