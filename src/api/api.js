import * as axios from "axios";

const instance = axios.create({
  baseURL: 'https://front-test-api.herokuapp.com'
})

export const usersAPI = {
  requestProducts() {
    return instance.get(`/api/product`)
  }
}
