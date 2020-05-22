namespace classes {
  class People {
    constructor(name: string) {
      this.name = name;
      this.p4 = 10;
    }
    public name: string;
    public p1: string = "我是公有"; // 类里，子类，类外 都能访问
    protected p2: string = "我是保护"; // 类里，子类 能访问， 类外无法访问
    private p3: string = "我是私有"; // 类里能访问， 子类，类外无法访问
    readonly p4: number; //  只读属性
    static p5: string = "static"; //  静态

    public run() {
      console.log(this.name);
    }

    test_public() {
      console.log(this.p1);
    }

    test_protected() {
      console.log(this.p2);
    }

    test_private() {
      console.log(this.p3);
    }
  }

  // 继承  extends 、super
  class Children extends People {
    constructor(name: string, public age: number) {
      super(name);
      this.age = age;
      this.run();
    }

    test_public() {
      console.log(this.p1);
    }

    test_protected() {
      console.log(this.p2);
    }

    test_private() {
      // 报错
      // console.log(this.p3);
    }
  }

  // static
  // console.log(People.p5);
  // console.log(Children.p5);

  var p = new People("cooky");
  // console.log(p);
  // p.p4 = 4; // 报错
  // p.p5 = "dddd"; // 报错
  // p.run();
  var c = new Children("Jay", 20);
  // console.log(c);
  // console.log(c.p3);// 报错 私有
  // c.run();

  /* 测试 公有 p1 */
  p.test_public(); // 类里可以访问
  c.test_public(); // 子类可以访问
  console.log(p.p1); // 类外可以访问
  console.log(c.p1); // 类外可以访问

  console.log("===========================分割线=====================");

  /* 测试 保护 p2 */
  p.test_protected(); // 类里可以访问
  c.test_protected(); // 子类可以访问
  // console.log(p.p2); // 报错 ； 类外不能访问
  // console.log(c.p2); // 报错 ； 类外不能访问

  console.log("===========================分割线=====================");

  /* 测试 私有 p3 */
  p.test_private();
  // console.log(p.p3); // 报错 ； 类外不能访问
  // console.log(c.p3); // 报错 ； 类外不能访问

  /* 私有属性 私有方法 */
  // 比如 $.get(url,function(){})

  /* 多态 */
  // 父类定义了一个方法不去实现，让继承它的子类去实现，每一个子类有不同的表现
  // 多态属于继承

  class Animal {
    protected constructor() {} //  只能被继承，不能被实例化

    eat() {
      return "吃";
    }
  }

  class Cat extends Animal {
    constructor() {
      super();
    }
    eat() {
      return "吃老鼠";
    }
  }

  class Dog extends Animal {
    constructor() {
      super();
    }
    eat() {
      return "吃肉";
    }
  }

  /* 抽象类 ： 一种标准（基类）*/
  // 提供其他类继承的基类，不能直接被实例化
  // 用 abstract 关键字定义抽象类和抽象方法，抽象类中的抽象方法不包含具体实现并且必须在派生类中实现
  // abstract 抽象方法只能放在抽象类中
  abstract class Color {
    public name: string;
    constructor(name: string) {
      this.name = name;
    }
    abstract showColor(): string;
  }

  class Sky extends Color {
    constructor(name: string) {
      super(name);
    }

    showColor() {
      console.log("blue");
      return "blue";
    }
  }

  class Tree extends Color {
    constructor(name: string) {
      super(name);
    }

    showColor() {
      console.log("green");
      return "green";
    }
  }

  const sky = new Sky("蓝天");
  const tree = new Tree("绿树");
  console.log(sky);
  console.log(tree);
}
