import { getProducts } from "../../../core/application/getProductsService";
import { storage } from "../../../core/infrastructure/storage";
import { API } from "../../../api/api";
import { productList } from '../../mocks/productListMock';

describe ('Application >> getProductsService', () =>{

  it ("should be call getProducts properly - happy path", async () => {
    jest.spyOn(API,"requestProducts").mockReturnValue(productList)
    jest.spyOn(storage, "save").mockReturnValue()

    const actualProducts = await getProducts()

    expect(API.requestProducts).toHaveBeenCalled()
    expect(storage.save).toHaveBeenCalledWith("productList", JSON.stringify(productList))
    expect(actualProducts).toBe(productList)
  })

  // TODO: Cover with test when render 404 be realized in app
  // it("should be called properly - unhappy path", async () => {
  //   jest.spyOn(API,"requestProducts").mockRejectedValue({error: 404})
  //   jest.spyOn(storage, "save").mockReturnValue()
  //
  //   const actualProducts = await getProducts();
  //
  //   expect(API.requestProducts).toHaveBeenCalled()
  //   expect(storage.save).toHaveBeenCalledWith(JSON.stringify(productList))
  //   expect(actualProducts).toBe(productList)
  // })

});
