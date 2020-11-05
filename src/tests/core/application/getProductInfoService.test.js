import { API } from "../../../api/api";
import { productDetailInfo } from "../../mocks/productDetailInfoMock";
import { getProductInfo } from "../../../core/application/getProductInfoService";


describe('Application >> getProductInfoService', () =>{

  it('should be called getProductInfo properly - happy path', async () => {
    jest.spyOn(API,"requestProduct").mockReturnValue(productDetailInfo)

    const result = await getProductInfo('ZmGrkLRPXOTpxsU4jjAcv')

    expect(API.requestProduct).toHaveBeenCalled()
    expect(result).toBe(productDetailInfo)
  })

})