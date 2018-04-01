import { GuestBookAction } from './action';
import { GuestBookState, Message } from '../types';
import { initialState } from './initial-state';

export function reducer(state : GuestBookState = initialState, action: GuestBookAction.Type) : GuestBookState {
  switch(action.type) {
    case GuestBookAction.SendMessageActionType:
      return {
        ...state,
        messages: [
          ...state.messages,
          { ...action.payload } as Message
        ]
      };
    default:
      return state;
  }
}
