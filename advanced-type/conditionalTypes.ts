/* 条件类型 */
/* 
    Exclude<T, U> -- 从T中剔除可以赋值给U的类型。
    Extract<T, U> -- 提取T中可以赋值给U的类型。
    NonNullable<T> -- 从T中剔除null和undefined。
    ReturnType<T> -- 获取函数返回值类型。
    InstanceType<T> -- 获取构造函数类型的实例类型。
*/
namespace conditionalTypes {
  type Diff<T, U> = T extends U ? never : T;
  type D = Diff<"A" | "C", "A" | "B">;
  // 等同于
  // type D = Diff("A", "A" | "B") | Diff("C", "A" | "B");
  //        = never | "C" = "C"
  const d: D = "C";

  /* ===================================分割线=================================== */

  // 效果和上面的 Diff 一样
  // type T00 = "C"
  type T00 = Exclude<"A" | "C", "A" | "B">;

  // type T01 = "a" | "c"
  type T01 = Extract<"a" | "b" | "c" | "d", "a" | "c" | "f">;

  // type T02 = string | number
  type T02 = NonNullable<string | number | undefined | null>;

  // type T03 = string
  type T03 = ReturnType<() => string>;
}
