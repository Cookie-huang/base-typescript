/* 枚举 */
// 一组有名字的常量集合
namespace enums {
  // 数字枚举
  enum Num {
    hello = 1,
    world
  }
  //  会累加
  // { 1: "hello", 2: "world", hello: 1, world: 2 };

  /* ===================================分割线=================================== */

  // 字符串枚举
  enum Str {
    success = "成功！！",
    error = "失败！！"
  }
  // {success: "成功！！", error: "失败！！"}

  /* ===================================分割线=================================== */

  // 异构枚举:  数字，字符串混用；  不建议使用
  enum Heterogeneous {
    No,
    Yes = "YES"
  }
  // {0: "No", No: 0, Yes: "YES"}

  /* ===================================分割线=================================== */

  // 枚举成员： 分为 常量const 和 计算computed
  enum FileAccess {
    // constant members
    None = 100,
    // computed member
    G = "123".length
  }
  // {3: "G", 100: "None", None: 100, G: 3}

  /* ===================================分割线=================================== */

  // 常量枚举:  编译阶段会被删除; 不允许包含计算成员
  const enum Directions {
    Up,
    Down,
    Left,
    Right
  }

  let directions = [
    Directions.Up,
    Directions.Down,
    Directions.Left,
    Directions.Right
  ];
  //  directions：  [0, 1, 2, 3]
  // console.log(Directions); // 报错 not defined

  // 枚举类型

  //  枚举成员没初始值
  enum X {
    a,
    b
  }
  let x: X = 5;
  // console.log(x);// 5

  // 枚举成员都是数字
  enum Y {
    a = 0,
    b = 1
  }
  let y: Y = 5;
  // console.log(y);// 5

  // x === y 报错 不同类型不能比较

  // 枚举成员都是字符串
  enum G {
    a = "apple",
    b = "banana"
  }
  // 只能是成员
  let g1: G = G.a;
  let g2: G.a = G.a;
  // console.log(g1); //  apple
  // console.log(g2); //  apple

  /* ===================================分割线=================================== */

  enum Flag {
    undefined_1,
    success = 1,
    error = 999,
    undefined_2,
    undefined_3
  }
  var f: Flag = Flag.success;
  // console.log(f); //  1
  // console.log(Flag.error); // 999
  // 没有标识的 就显示索引（按照前一个的基准 + 1）
  // console.log("undefined_1", Flag.undefined_1); //  0
  // console.log("undefined_2", Flag.undefined_2); //  1000
  // console.log("undefined_2", Flag.undefined_3); //  1001
}
