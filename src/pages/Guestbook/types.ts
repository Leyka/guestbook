export interface Comment {
  name: string;
  message: string;
}

export interface GuestBookStore {
  comments: Comment[];
}
