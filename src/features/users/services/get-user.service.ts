import { User } from '../users.types';
import * as usersStore from './users.store';

export const getUserById = (id: string): User | undefined => {
  const users: readonly User[] = usersStore.getAll();
  return users.find((u: User) => u.id === id);
};

export const getAllUsers = (): readonly User[] => {
  return usersStore.getAll();
};
