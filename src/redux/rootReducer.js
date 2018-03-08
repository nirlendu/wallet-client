// @flow
import { type Reducer } from 'redux';
import type RoutineAction from 'redux-saga-routines';
import type { LocationShape } from 'react-router';
import { logoutRoutine } from '../login';
import type { LoginState } from '../login/loginReducer';
import type { PageState } from '../page/pageState';
import type { UserState } from '../user/userState';
import type { SendState } from '../wallet/send/sendReducer';
import type { WalletState } from '../wallet/walletState';
import type { ConfirmState } from '../verify/confirm/confirmReducer';
import tracker from '../tracker';

export type State = {
  router: {
    location: LocationShape,
  },
  user: UserState,
  wallet: WalletState,
  login: LoginState,
  form: Object,
  page: PageState,
  send: SendState,
  confirm: ConfirmState,
};

const rootReducer = (appReducer: Reducer<any, RoutineAction>) => (
  state: State,
  action: RoutineAction,
) => {
  let newState = state;
  if (action.type === logoutRoutine.TRIGGER) {
    newState = undefined;
  }
  const { type, ...params } = action;
  tracker.track(type, params);
  return appReducer(newState, action);
};

export default rootReducer;
