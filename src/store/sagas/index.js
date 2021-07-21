import { all } from 'redux-saga/effects'
import { watchGetAllProducts } from './productSaga'

export default function* rootSaga() {
  yield all([
    watchGetAllProducts()
  ])
}