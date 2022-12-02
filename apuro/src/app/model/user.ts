export interface User {
  credentials: Credentials;
  userId: number;
  role: string;
}
export interface Credentials {
  username: string;
  password: string;
}
