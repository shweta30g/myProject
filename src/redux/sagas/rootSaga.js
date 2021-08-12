import { takeLatest } from "redux-saga/effects";
import { handleGetUser } from "../sagas/Handler/User";
import { GET_USER } from "../Action/SagaActionReducer";

export function* watcherSaga() {
  console.log("hellooojdijkn")
  yield takeLatest(GET_USER, handleGetUser);
}
