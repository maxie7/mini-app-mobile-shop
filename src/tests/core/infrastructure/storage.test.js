import { storage } from "../../../core/infrastructure/storage";


describe('Infrastructure >> storage', () => {
  const productList = [
    {
      "id": "ZmGrkLRPXOTpxsU4jjAcv",
      "brand": "Acer",
      "model": "Iconia Talk S",
      "price": "170",
      "imgUrl": "https://front-test-api.herokuapp.com/images/ZmGrkLRPXOTpxsU4jjAcv.jpg"
    },
    {
      "id": "cGjFJlmqNPIwU59AOcY8H",
      "brand": "Acer",
      "model": "Liquid Z6 Plus",
      "price": "250",
      "imgUrl": "https://front-test-api.herokuapp.com/images/cGjFJlmqNPIwU59AOcY8H.jpg"
    }
  ];

  beforeEach(() => localStorage.clear());

  it('is initialized properly and is empty', () => {
    expect(localStorage).toEqual({});
  });

  it("returns undefined if requested item doesn't exist", () => {
    const testResult = localStorage.getItem('maxie7');
    expect(testResult).toBeUndefined();
  });

  it('should be called properly', () => {
    localStorage.setItem('productsList', JSON.stringify(productList));
    expect(localStorage.setItem).toHaveBeenCalledTimes(1);
  });

  it('saves a product list through storage save method', () => {
    const testResult = storage.save(JSON.stringify(productList));
    expect(localStorage.getItem('productList')).toEqual(testResult);
  });

  it('gets productList through storage get method', () => {
    localStorage.setItem('productsList', JSON.stringify(productList));
    const testResult = storage.get();
    expect(localStorage.getItem('productList')).toEqual(testResult);
  });
});

