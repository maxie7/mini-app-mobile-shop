import * as axios from "axios";

const instance = axios.create({
  baseURL: 'https://front-test-api.herokuapp.com'
})

export const API = {
  // requestProducts() {
  //   return instance.get(`/api/product`)
  //     .then(response => response.data);
  // },

  async requestProducts() {
    const response = await instance.get(`/api/product`);
    return await response.data;
  },

  requestProduct(id) {
    return instance.get(`/api/product/${id}`)
  }

}
