import {API} from "../../api/api";
import {storage} from "../infrastructure/storage";


export const getProductInfo = async (id) => {
  const productData = await API.requestProduct(id);
  storage.save("productDetailsInfo", JSON.stringify(productData));

  return productData;
}