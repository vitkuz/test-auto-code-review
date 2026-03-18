import { User } from '../users.types';
import { getUsers } from './create-user.service';

export const getUserById = (id: string): User | undefined => {
  const users: User[] = getUsers();
  return users.find((u: User) => u.id === id);
};

export const getAllUsers = (): User[] => {
  return getUsers();
};
