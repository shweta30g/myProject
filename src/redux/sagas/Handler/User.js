import { call, put } from "redux-saga/effects";
import { setUser } from "../../Action/SagaActionReducer";
import { requestGetUser } from "../../sagas/Request/User";

export function* handleGetUser(action) {
  try {
    const response = yield call(requestGetUser);
    const { data } = response;
    yield put(setUser(data));
  } catch (error) {
    console.log(error);
  }
}
