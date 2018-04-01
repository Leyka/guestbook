import { Action, createAction } from '../../../common/utils/action-utils'; // <== TODO: Fix path
import { Message } from '../types';

export module GuestBookAction {
  export const ROOT = 'guestbook';

  // Action: Send message
  export const SendMessageActionType = `${ROOT}/SEND`;
  export type SendMessageAction = Action<Message>;

  export function createSendMessageAction(message: Message): SendMessageAction {
    return createAction(SendMessageActionType, message);
  }

  export type Type = SendMessageAction;
}
