import {API} from "../../api/api";
import {storage} from "../infrastructure/storage";

export const getProducts = async () => {
  const productsData = await API.requestProducts();
  const productList = JSON.stringify(productsData);
  storage.save(productList);
  return productsData;
}
