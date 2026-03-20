import { User } from '../users.types';

let users: readonly User[] = [];

export const getAll = (): readonly User[] => users;

export const add = (user: User): void => {
  users = [...users, user];
};

export const removeById = (id: string): void => {
  users = users.filter((u: User) => u.id !== id);
};

export const findById = (id: string): User | undefined =>
  users.find((u: User) => u.id === id);

export const findByEmail = (email: string): User | undefined =>
  users.find((u: User) => u.email === email);
