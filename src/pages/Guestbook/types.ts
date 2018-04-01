export interface Message {
  id: string;
  name: string;
  content: string;
}

export interface GuestBookState {
  messages: Message[];
}

export interface GuestBookProps {
  messages: Message[];
  sendMessage: (values) => void;
}
