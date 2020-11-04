import { getProducts } from "../../../core/application/getProductsService";


describe('Application >> getProductsService', () =>{
  it('should be called properly', () => {
    const testResult = getProducts();
    expect(testResult).toBeDefined();
  });

  it('should have brand property', async () => {
    expect.assertions(2);
    const testResult = await getProducts();
    expect(testResult[0]).toHaveProperty('brand');
    expect(testResult.some( ({brand}) => brand === 'Acer')).toBe(true);
  });
});