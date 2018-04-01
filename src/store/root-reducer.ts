import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { reducer as guestBookReducer } from '../pages/Guestbook/store/reducer';

export const reducer = combineReducers({
  form: formReducer,
  guestbook: guestBookReducer
});
