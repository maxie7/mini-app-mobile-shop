import { getProducts } from "../../../core/application/getProductsService";


describe('Application >> getProductsService', () =>{
  it('should be called properly', () => {
    const testResult = getProducts();
    expect(testResult).toBeDefined();
  });

  it("should have 'brand', 'price', 'model' properties", async () => {
    expect.assertions(4);
    const testResult = await getProducts();
    expect(testResult[0]).toHaveProperty('brand');
    expect(testResult[0]).toHaveProperty('price');
    expect(testResult[0]).toHaveProperty('model');
    expect(testResult.some( ({brand}) => brand === 'Acer')).toBe(true);
  });
});