/* 交叉类型 */
namespace intersectionTypes {
  interface DogInterface {
    run(): void;
  }

  interface CatInterface {
    jump(): void;
  }

  let pet: DogInterface & CatInterface = {
    // 要包含
    run() {},
    jump() {}
  };

  //   pet 是一个 value
  console.log(pet);
}
