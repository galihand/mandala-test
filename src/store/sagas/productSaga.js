import { put, takeLatest } from "@redux-saga/core/effects";
import axios from "axios";

function* getAll(action) {
  try {
    const res = yield axios.get('https://fakestoreapi.com/products')
    yield put({
      type: 'GET_ALL_PRODUCT_SUCCESS',
      payload: res.data
    })
  } catch (err) {
    yield put({
      type: 'GET_ALL_PRODUCT_FAILED'
    })
  }
}

export function* watchGetAllProducts() {
  yield takeLatest('GET_ALL_PRODUCT_REQUEST', getAll)
}