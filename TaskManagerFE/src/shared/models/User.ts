import { ROLES } from '../utils/enums';

export type User = {
  username: string;
  email: string;
  password: string;
  role: ROLES;
  _id: string;
};
