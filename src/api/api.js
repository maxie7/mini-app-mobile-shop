import * as axios from "axios";

const instance = axios.create({
  baseURL: 'https://front-test-api.herokuapp.com'
})

export const API = {

  async requestProducts() {
    const response = await instance.get(`/api/product`);
    return await response.data;
  },

  async requestProduct(id) {
    const response = await instance.get(`/api/product/${id}`);
    return await response.data;
  }

}
