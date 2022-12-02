import { Credentials } from './credentials';

export interface User {
  credentials: Credentials;
  userId: number;
  userTypeId: number;
}
