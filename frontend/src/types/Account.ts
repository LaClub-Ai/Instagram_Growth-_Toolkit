export interface Account {
  id: string;
  username: string;
  followers: number;
  following: number;
  posts: number;
  isActive: boolean;
}