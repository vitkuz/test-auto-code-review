import { User } from '../users.types';
import * as usersStore from './users.store';

export const deleteUser = (id: string): boolean => {
  const users: readonly User[] = usersStore.getAll();
  const exists: boolean = users.some((u: User) => u.id === id);

  if (!exists) {
    return false;
  }

  usersStore.removeById(id);
  return true;
};
