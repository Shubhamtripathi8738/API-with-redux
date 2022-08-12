import { getProducts } from "../../Api"
import { GET_PRODUCTS } from "./ActionType"

// export default   getProducts().then((Response) => { return ((Response.data)) })
export const getProductsAction=(dispatch)=>{
   getProducts().then((response) => 
   dispatch({ type: GET_PRODUCTS, payload:response.data}))
}
