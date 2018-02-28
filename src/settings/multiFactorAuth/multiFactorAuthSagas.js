import { call, put, takeLatest } from 'redux-saga/effects';
import multiFactorAuthApi from './multiFactorAuthApi';
import { createSecretRoutine } from './multiFactorAuthRoutines';

export function* get2FaSecret(action) {
  try {
    const secretHolder = yield call(
      multiFactorAuthApi.createNewSecret,
      action.payload,
    );
    yield put(createSecretRoutine.success(secretHolder));
  } catch (error) {
    console.error(error);
    yield put(createSecretRoutine.failure((error.body || {}).message));
  }
}

function* create2FaSecretSaga() {
  yield takeLatest(createSecretRoutine.TRIGGER, get2FaSecret);
}

export default create2FaSecretSaga;
