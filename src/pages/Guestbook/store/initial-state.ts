import shortid from 'shortid';
import { GuestBookState } from '../types';

export const initialState : GuestBookState = {
  messages: [
    {
      id: shortid.generate(),
      name: 'Bob Marley',
      content: 'Get up, stand up, stand up for your rights!'
    },
    {
      id: shortid.generate(),
      name: 'Martin Luther King',
      content: 'We may have all come on different ships, but we’re in the same boat now.'
    },
  ]
};
