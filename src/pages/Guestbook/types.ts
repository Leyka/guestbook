export interface Message {
  name: string;
  content: string;
}

export interface GuestBookState {
  messages: Message[];
}

export interface GuestBookProps {
  messages: Message[];
}
