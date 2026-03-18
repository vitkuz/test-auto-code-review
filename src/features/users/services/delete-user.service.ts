import { getUsers } from './create-user.service';

export const deleteUser = (id: string): boolean => {
  const users = getUsers();
  const index: number = users.findIndex((u) => u.id === id);

  if (index === -1) {
    return false;
  }

  users.splice(index, 1);
  return true;
};
