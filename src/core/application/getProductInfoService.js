import {API} from "../../api/api";
import {storage} from "../infrastructure/storage";


export const getProductInfo = async (id) => {
  const productDetailsInfo = await API.requestProduct(id);
  storage.save(id, JSON.stringify(productDetailsInfo));

  return productDetailsInfo;
}