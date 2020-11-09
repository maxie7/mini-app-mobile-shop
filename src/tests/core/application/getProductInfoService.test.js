import { API } from "../../../api/api";
import { getProductInfo } from "../../../core/application/getProductInfoService";
import { storage } from "../../../core/infrastructure/storage";
import { productDetailsInfo } from "../../mocks/productDetailsInfoMock";


describe ('Application >> getProductInfoService', () =>{

  it ('should be call getProductInfo properly', async () => {
    jest.spyOn(API,"requestProduct").mockReturnValue(productDetailsInfo)
    jest.spyOn(storage, "save").mockReturnValue()

    const result = await getProductInfo('correctId')

    expect(API.requestProduct).toHaveBeenCalled()
    expect(storage.save).toHaveBeenCalledWith("correctId", JSON.stringify(productDetailsInfo))
    expect(result).toBe(productDetailsInfo)
  })

})