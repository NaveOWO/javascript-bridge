const BridgeMaker = require("../src/BridgeMaker");
const BridgeRandomNumberGenerator = require("../src/BridgeRandomNumberGenerator");

describe("BridgeMaker 함수 기능테스트", () => {
  test("입력받은 다리 크기에 맞게 랜덤 다리를 생성하는 함수의 길이 테스트", () => {
    const size = 3;
    expect(
      BridgeRandomNumberGenerator.createRandomLocation(
        size,
        BridgeRandomNumberGenerator.generate
      ).length
    ).toBe(size);
  });

  test("입력받은 다리 크기에 맞게 랜덤 다리를 생성하는 함수의 길이 테스트", () => {
    const size = 3;
    expect(
      BridgeMaker.makeBridge(size, BridgeRandomNumberGenerator.generate).length
    ).toBe(size);
  });
});