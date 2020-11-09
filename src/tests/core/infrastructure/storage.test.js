import { storage } from "../../../core/infrastructure/storage";

describe ('Infrastructure >> storage', () => {

  beforeEach(() => localStorage.clear());

  it ('saves a product list through storage save method', () => {
    storage.save("irrelevant", "irrelevant");
    expect(localStorage.setItem).toBeCalledWith("irrelevant", "irrelevant")
  });

  it ('gets productList through storage get method', () => {
    storage.get("irrelevant");
    expect(localStorage.getItem).toBeCalledWith("irrelevant")
  });
});

