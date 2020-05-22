/* 
    接口 vs. 类型别名
    像我们提到的，类型别名可以像接口一样；然而，仍有一些细微差别。

    其一，接口创建了一个新的名字，可以在其它任何地方使用。 
    类型别名并不创建新名字—比如，错误信息就不会使用别名。
    
    在下面的示例代码里，在编译器中将鼠标悬停在 interfaced上，显示它返回的是 Interface，但悬停在 aliased上时，显示的却是对象字面量类型。

    type Alias = { num: number }
    interface Interface {
      num: number;
    }
    declare function aliased(arg: Alias): Alias;
    declare function interfaced(arg: Interface): Interface;

    另一个重要区别是类型别名不能被 extends和 implements（自己也不能 extends和 implements其它类型）。 
    因为 软件中的对象应该对于扩展是开放的，但是对于修改是封闭的，你应该尽量去使用接口代替类型别名。

    另一方面，如果你无法通过接口来描述一个类型并且需要使用联合类型或元组类型，这时通常会使用类型别名。
*/
namespace interfaces {
  /* 属性类型接口 Properties Interfaces */
  interface FullName {
    firstName: string;
    lastName: string;
    age?: number; // 可选属性
    // 字符串索引签名
    // [propName: string]: any;
  }

  function showFullName(name: FullName): string {
    console.log(`姓：${name.lastName} 名：${name.firstName}`);

    return `姓：${name.lastName} 名：${name.firstName}`;
  }

  /*
    对象字面量会被特殊对待而且会经过 额外属性检查，当将它们赋值给变量或作为参数传递的时候。 
    如果一个对象字面量存在任何“目标类型”不包含的属性时，你会得到一个错误。

    绕开检查
    1. 类型断言
    2. 添加一个字符串索引签名
    3. 不使用对面字面量

*/

  // 1. 类型断言
  // showFullName({
  //   firstName: "杰伦",
  //   lastName: "周",
  //   age: 20,
  //   birth: "2020-02-02"
  // } as FullName);

  // 2. 添加一个字符串索引签名
  // showFullName({
  //   firstName: "杰伦",
  //   lastName: "周",
  //   age: 20,
  //   birth: "2020-02-02"
  // });

  // 3. 不使用对面字面量
  // const nameObj = {
  //   firstName: "杰伦",
  //   lastName: "周",
  //   age: 20
  // };
  // showFullName(nameObj);

  /* ===================================分割线=================================== */

  /* 函数类型接口 Function Types  */
  // 对方法传入的参数，函数返回值进行约束

  interface Add {
    (a: number, b: number): boolean;
  }

  // 等价于 =>  别名 type
  // type Add = (a: number, b: number) => boolean;

  let addFn: Add;
  addFn = function (x, y) {
    return x + y > 0;
  };

  // addFn("1", "2"); 报错
  // addFn("1", 1); 报错
  // addFn(1, 1);

  /* ===================================分割线=================================== */

  /* 可索引类型接口 Indexable Interfaces */
  // 数组，对象 的约束  （不常用）

  // 索引是 number 类型， 就是针对数组接口
  interface TestArray {
    [index: number]: number | string | boolean;
  }

  // 索引是 string 类型， 就是针对对象接口
  interface TestObject {
    [index: string]: boolean;
  }

  // 索引是 string 类型， 就是针对对象接口
  interface TestObjectAndArray {
    [index: string]: string;
    [index: number]: string;
  }

  const test_array_Indexable: TestArray = [2, "aaa", true];
  const test_object_Indexable: TestObject = { open: false, 1: true }; // number1会转为string“1”
  const test_object_Indexable1: TestObjectAndArray = {
    open: "a",
    1: "b"
  };

  console.log(test_array_Indexable);
  console.log(test_object_Indexable);
  console.log(test_object_Indexable1);

  /* ===================================分割线=================================== */

  /* 类类型接口 Class Types */
  // 对类的约束 和 抽象类有点相似
  // 重点 implements
  interface classTypesAnimal {
    name: string;
    eat(x: string): string; // 类一定要有eat方法， 参数可选
  }

  class Dogs implements classTypesAnimal {
    public name: string; // 必要
    constructor(name: string) {
      this.name = name;
    }

    eat() {
      return this.name;
    }
  }

  class Cats implements classTypesAnimal {
    public name: string;
    constructor(name: string) {
      this.name = name;
    }

    eat(a: string) {
      return this.name + a;
    }
  }

  const testClassTypesDog = new Dogs("啊黑");
  console.log(testClassTypesDog.eat());
  const testClassTypesCat = new Cats("啊花");
  console.log(testClassTypesCat.eat("aaaaaaaaaaaa"));

  /* ===================================分割线=================================== */

  /* 接口扩展 Extending Interfaces */
  // 接口可以继承接口
  interface Animal_interfaces {
    eat(): void;
  }

  // 继承上一个接口
  interface Person_interfaces extends Animal_interfaces {
    work(): void;
  }

  // 类: 程序员
  class Programmer_interfaces {
    public name: string;
    constructor(name: string) {
      this.name = name;
    }

    code(code: string) {
      console.log(this.name + code);
    }
  }

  // 类： 程序员 -> 前端
  class web_interfaces extends Programmer_interfaces
    implements Person_interfaces {
    constructor(name: string) {
      super(name);
    }

    eat() {}
    work() {}
  }

  const w = new web_interfaces("cooky");
  w.code("写代码");

  /* ===================================分割线=================================== */

  // demo
  interface List {
    readonly id: number;
    name: string;
    age?: number;
  }

  interface Result {
    data: List[];
  }

  function render(result: Result) {
    result.data.forEach(value => {
      // value.id++; // 报错  readonly
      value.name = "my name is " + value.name; // 可以修改
      console.log(value.id, value.name);
      if (value.age) {
        console.log(value.age);
      }
    });
  }

  let result = {
    data: [
      { id: 1, name: "A", sex: "male" },
      { id: 2, name: "B", age: 20 }
    ]
  };

  render(result);
}
