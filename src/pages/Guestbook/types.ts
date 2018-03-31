export interface Message {
  first_name: string;
  last_name: string;
  comment: string;
}

export interface GuestBookStore {
  messages: Message[];
}
