import { getInitialValues } from "../../utils/getInitialValues";
import { storage } from "../../core/infrastructure/storage";
import { productDetailsInfo } from "../mocks/productDetailsInfoMock";


describe ('getInitialValues function should be called properly', () => {

  it ('should return undefined if there is no such a property in local storage', () => {
    jest.spyOn(storage, "get").mockReturnValue(false)

    const result = getInitialValues("incorrectId")

    expect(storage.get).toHaveBeenCalled()
    expect(result).toBe(undefined)
  })

  it ('should return converted from JSON data', () => {
    jest.spyOn(storage, "get").mockReturnValue(JSON.stringify(productDetailsInfo))

    const result = getInitialValues("correctId")

    expect(storage.get).toHaveBeenCalled()
    expect(result).toStrictEqual(productDetailsInfo)
  })

})
