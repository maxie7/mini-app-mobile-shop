const save = (productList) => localStorage.setItem("productsList", productList);
const get = () => localStorage.getItem("productsList")

export const storage = {
    save,
    get
}