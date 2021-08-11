import { takeLatest } from "redux-saga/effects";
import { handleGetUser } from "./Handler/User";
import { GET_USER } from "../Action/SagaActionReducer";

export function* watcherSaga() {
  yield takeLatest(GET_USER, handleGetUser);
}
