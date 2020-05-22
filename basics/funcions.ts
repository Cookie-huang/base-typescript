namespace functions {
  /* 定义 */
  // 函数声明
  function fn1(): number {
    return 1;
  }

  // 函数表达式 ，匿名函数
  var fn2 = function (): void {
    // xxx
  };

  //  箭头函数
  var fn3 = (): void => {};

  /* ===================================分割线=================================== */

  /* 可选参数 (必须配置到 必选参数 后面) */
  function add1(a: number, b?: number) {
    return b ? a + b : a;
  }
  // console.log(add1(1));  //  1
  // console.log(add1(1, 2)); // 3

  /* ===================================分割线=================================== */

  /* 默认参数 */
  function add2(a: number, b = 100, c: number) {
    return a + b + c;
  }
  // console.log(add2(1, undefined, 2)); //  103
  // console.log(add2(1, 2, 3)); //  6

  /* ===================================分割线=================================== */

  /* 剩余参数 （数组） */
  function add3(a: number, ...b: number[]) {
    console.log(a, b);
    return a + b.reduce((total, cur) => total + cur);
  }
  // console.log(add3(1, 2, 3));  // 6

  /* ===================================分割线=================================== */

  /* 重载 */
  // 第一步：声明
  function getInfo(name: string): string;
  function getInfo(name: string, age: number): string;
  function getInfo(name: string, age: string): string;

  // 第二步：函数实现
  function getInfo(name: any, age?: any): any {
    if (age) {
      if (typeof age === "number") {
        console.log("string类型的name，number类型的age:", name, age);
        return age;
      } else {
        console.log("string类型的name，string类型的age:", name, age);
        return age;
      }
    } else if (typeof name === "string") {
      console.log("只有string类型的name:", name);
      return name;
    }
  }

  getInfo("cooky");
  getInfo("cooky", 3000);
  getInfo("cooky", "3000");
}
