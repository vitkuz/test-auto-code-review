import { User } from '../users.types';

let users: readonly User[] = [];

export const getAll = (): readonly User[] => users;

export const add = (user: User): readonly User[] => {
  users = [...users, user];
  return users;
};

export const removeById = (id: string): readonly User[] => {
  users = users.filter((u: User) => u.id !== id);
  return users;
};
