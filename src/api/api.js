import * as axios from "axios";

const instance = axios.create({
  baseURL: 'https://front-test-api.herokuapp.com'
})

export const API = {
  requestProducts() {
    return instance.get(`/api/product`)
  },

  requestProduct(id) {
    return instance.get(`/api/product/${id}`)
  }
}
