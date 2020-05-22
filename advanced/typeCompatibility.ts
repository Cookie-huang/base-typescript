/* 类型兼容性 */
namespace typeCompatibility {
  /* X 兼容 Y ：  X （目标类型） = Y （源类型） */
  /* 
    结构之间兼容：成员少的兼容成员多的
    函数之间兼容：参数多的兼容参数少的
  */

  /* ===================================分割线=================================== */

  let str: string = "xxxx";
  //   str = null; // 配置项 strictNullChecks: false 成立

  /* ===================================分割线=================================== */

  /* 接口兼容性 */
  // 如果 x 要兼容 y，那么 y 至少具有与 x 相同的属性。
  interface X {
    a: number;
  }
  interface Y {
    a: number;
    b: number;
  }
  let x: X = { a: 1 };
  let y: Y = { a: 1, b: 2 };
  //   x = y; // Right  Y > X
  //   y = x; // Error  Y > X

  /* ===================================分割线=================================== */

  /* 函数兼容性 */
  //  1.参数个数
  type Handler = (a: number, b: number) => void;
  function hof(handler: Handler) {
    return handler;
  }
  // 参数是可忽略的， 小于等于
  //   let handler1 = () => {};
  //   hof(handler1); //  Right
  //   let handler2 = (a: number) => {};
  //   hof(handler2); //  Right
  //   let handler3 = (a: number, b: number) => {};
  //   hof(handler3); //  Right
  //   let handler4 = (a: number, b: number, c: number) => {};
  //   hof(handler4); //  Error

  /*  可选参数 和 剩余参数 兼容性 */
  let fn1 = (a: number, b: number) => {};
  let fn2 = (a: number, b?: number) => {};
  let fn3 = (...args: number[]) => {};
  //   fn1 = fn2; //  Right 固定参数兼容可选参数
  //   fn1 = fn3; //  Right 固定参数兼容剩余参数

  //   fn2 = fn1; //  Error 可选不兼容固定      strictFunctionTypes : false 下是right
  //   fn2 = fn3; //  Error 可选不兼容剩余参数  strictFunctionTypes : false 下是right

  //   fn3 = fn1; //  Right 剩余兼容固定参数
  //   fn3 = fn2; //  Right 剩余兼容可选参数

  //  2.参数类型
  let handler5 = (a: string) => {};
  // hof(handler5); //  Error

  //  3.返回值类型
  let f = () => ({ name: "cooky" });
  let g = () => ({ name: "cooky", age: 20 });
  // f = g; //  Right  g > f
  // g = f; //  Error

  /* ===================================分割线=================================== */

  /* 枚举兼容性 */
  // 枚举类型与数字类型兼容，并且数字类型与枚举类型兼容。不同枚举类型之间是不兼容的。

  /* ===================================分割线=================================== */

  /* 类兼容性 */
  /* 
    类与对象字面量和接口差不多，但有一点不同：类有静态部分和实例部分的类型。
    比较两个类类型的对象时，只有实例的成员会被比较。 静态成员和构造函数不在比较的范围内。
  */

  /* 
    类的私有成员和受保护成员会影响兼容性。 当检查类实例的兼容时，如果目标类型包含一个私有成员，那么源类型必须包含来自同一个类的这个私有成员。 同样地，这条规则也适用于包含受保护成员实例的类型检查。 这允许子类赋值给父类，但是不能赋值给其它有同样类型的类。
  */
  class Animal {
    feet: number | undefined;
    constructor(name: string, numFeet: number) {}
  }
  class Size {
    feet: number | undefined;
    constructor(numFeet: number) {}
  }
  let a: Animal;
  let s: Size;
  // strictNullChecks : false
  // a = s; // OK
  // s = a; // OK

  /* ===================================分割线=================================== */

  /* 泛型兼容性 */
  interface Empty<T> {}
  let e1: Empty<number>;
  let e2: Empty<string>;

  // strictNullChecks : false
  // e1 = e2; // OK, e2 结构体匹配 e1

  interface NotEmpty<T> {
    data: T;
  }
  let n1: NotEmpty<number>;
  let n2: NotEmpty<string>;

  // n1 = n2; // Error
}
