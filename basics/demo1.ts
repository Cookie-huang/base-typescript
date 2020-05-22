// 定义一个数据库操作的 接口，定义行为和动作的规范
interface DBI<T> {
  add(info: T): boolean;
  update(info: T, id: number): boolean;
  delete(id: number): boolean;
  get(id: number): any[];
}

// 如果 类 实现泛型接口规范，这个类也应该是泛型类
// 简单模拟数据库 1
class MysqlDb_demo<T> implements DBI<T> {
  add(info: T): boolean {
    console.log(info);
    return true;
  }
  update(info: T, id: number): boolean {
    throw new Error("Method not implemented.");
  }
  delete(id: number): boolean {
    throw new Error("Method not implemented.");
  }
  get(id: number): any[] {
    throw new Error("Method not implemented.");
  }
}

// 简单模拟数据库 2
class MongoDb_demo<T> implements DBI<T> {
  add(info: T): boolean {
    console.log(info);
    return true;
  }
  update(info: T, id: number): boolean {
    throw new Error("Method not implemented.");
  }
  delete(id: number): boolean {
    throw new Error("Method not implemented.");
  }
  get(id: number): any[] {
    throw new Error("Method not implemented.");
  }
}

class User_demo {
  public username: string | undefined;
  public password: string | undefined;
}

const u_demo = new User_demo();
u_demo.username = "cooky";
u_demo.password = "123";

const mysql_ = new MongoDb_demo<User_demo>();
mysql_.add(u_demo);

const mongo_ = new MongoDb_demo<User_demo>();
mongo_.add(u_demo);
