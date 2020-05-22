/* 
  软件工程中，我们不仅要创建一致的定义良好的API，同时也要考虑可重用性。 
  组件不仅能够支持当前的数据类型，同时也能支持未来的数据类型，这在创建大型系统时为你提供了十分灵活的功能。

  在像C#和Java这样的语言中，可以使用泛型来创建可重用的组件，一个组件可以支持多种类型的数据。 
  这样用户就可以以自己的数据类型来使用组件。 


  同一个组件（接口，类，函数...)，可以同时支持不同类型（提前规范好所支持的类型）

  比如 fn1 支持接收 string , 我们想拥有一个接收 number 且实现 fn1 同样功能的函数
  我们可能就想 string | number
  但是假设 我需要另一个 string | number 的函数 fn3
  重复 string | number 不好， 这时我们可以想到定义一个接口， （vlaue:string|number):void
  假设我们又需要一个支持接收布尔值的函数 fn4  , 这时候我们定义的接口又不够强大了。

  这时我们就可以使用泛型  <T>(value:T):T

  泛型：不预先确定的数据类型，具体的类型在使用的时候才能确定

*/

namespace generics {
  /* 泛型函数 */
  function identity<T>(arg: T): T {
    return arg;
  }

  identity(123); // 类型推断
  identity("aaa"); // 类型推断
  identity<string>("aaa"); // 显式的声明

  /* 泛型类 */
  class Log<T = number> {
    add(value: T): void {
      // ...
    }
  }
  const m1 = new Log();
  const m2 = new Log<string>();

  /* 泛型接口 */
  // 属性接口
  interface Info<T> {
    name: T;
    age: T;
  }
  const i1: Info<string> = {
    name: "1",
    age: "1"
  };
  const i2: Info<number> = {
    name: 1,
    age: 1
  };
  console.log(i1);
  console.log(i2);

  // 函数接口：方式 1
  interface Config<T> {
    (value: T): T;
  }

  function getData<T>(value: T): T {
    return value;
  }

  // 泛型类型“ConfigFn1<T>”需要 1 个类型参数
  let myGetData: Config<string>;
  myGetData = getData;

  // 上两句等同于： const myGetData: Config<string> = getData;

  // myGetData("20");  // right
  // myGetData(20)  error：类型 20 的参数不能赋给类型“string”的参数

  /* ===================================分割线=================================== */

  // 函数接口：方式 2
  interface ConfigFn2 {
    <T>(value: T): T;
  }

  let myGetData2: ConfigFn2;
  myGetData2 = getData;

  /* 
    myGetData2("!212"); // right
    myGetData2<string>("!212"); // right
    myGetData2(123); // right
  */

  /* ===================================分割线=================================== */

  /* 把类作为参数来约束数据传入的类型 */
  class User {
    // 非空断言操作符 :告诉 TypeScript 的类型检查器对特定的属性表达式，不做 "严格空值检测"。
    // username!: string;
    username: string | undefined;
    password: string | undefined;
  }

  class ArticleCate {
    title: string | undefined;
    status: number | undefined;
    constructor(params: {
      title: string | undefined;
      status?: number | undefined;
    }) {
      this.title = params.title;
      this.status = params.status;
    }
  }

  class MysqlDb<T> {
    add(value: T): boolean {
      console.log(value);
      return true;
    }
  }

  const u = new User();
  u.username = "cooky";
  u.password = "123";

  const a = new ArticleCate({ title: "title" });

  // 类作为参数的泛类型
  const Db1 = new MysqlDb<User>();
  Db1.add(u);
  const Db2 = new MysqlDb<ArticleCate>();
  Db2.add(a);

  /* 把类作为参数来约束数据传入的类型 case 2:
  function add<T>(value: T): boolean {
    console.log(value);
    return true; 
  }
  add<User>(u);
  add<ArticleCate>(a); */

  /* ===================================分割线=================================== */

  /* 泛型继承 */
  interface Length {
    length: number;
  }
  // 必须有 length 属性
  function log<T extends Length>(value: T): T {
    console.log(value.length);
    return value;
  }

  log<string>("xxx");
  log<string[]>(["xxxx", "yyyy"]);
  log<number[]>([1, 2, 3]);
  // log<number>(1); // 类型“number”不满足约束“Length”。
}
