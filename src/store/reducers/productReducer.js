const initialState = {
  isLoading: false,
  products: [],
  isFailed: false
}

export default function productReducer(state = initialState, action) {
  const { type, payload } = action

  switch (type) {
    case "GET_ALL_PRODUCT_REQUEST":
      return {
        ...state, isLoading: true
      }
    case "GET_ALL_PRODUCT_FAILED":
      return {
        ...state, isLoading: false, isFailed: true
      }
    case "GET_ALL_PRODUCT_SUCCESS":
      return {
        ...state, isLoading: false, products: payload
      }
    default:
      return state
  }
}