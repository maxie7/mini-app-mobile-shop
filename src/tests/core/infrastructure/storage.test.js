import { storage } from "../../../core/infrastructure/storage";

describe('Infrastructure >> storage', () => {

  beforeEach(() => localStorage.clear());

  it('saves a product list through storage save method', () => {
    storage.save('irrelevant');
    expect(localStorage.setItem).toBeCalledWith("productsList","irrelevant")
  });

  it('gets productList through storage get method', () => {
    storage.get();
    expect(localStorage.getItem).toBeCalledWith("productsList")
  });
});

