import axios from "axios";

export const Api = axios.create({
    baseURL: "https://fakestoreapi.com/"
});
export const getProducts = () => {
    return Api.get("/products");
}