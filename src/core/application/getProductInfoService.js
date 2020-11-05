import {API} from "../../api/api";


export const getProductInfo = async (id) => {
  return await API.requestProduct(id);
}