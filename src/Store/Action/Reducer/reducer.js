import { GET_PRODUCTS } from "../ActionType";

const initialState = {
  loading: false,
  error: null,
};

export const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return { ...state, productData: action.payload, loading: true };
    default:
      return state;
  }
};
