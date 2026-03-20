import { User } from '../users.types';
import { updateUserSchema, UpdateUserPayload } from '../users.schema';
import * as usersStore from './users.store';

export const updateUser = (id: string, payload: UpdateUserPayload): User => {
  const validatedPayload: UpdateUserPayload = updateUserSchema.parse(payload);

  const existingUser: User | undefined = usersStore.findById(id);

  if (!existingUser) {
    throw new Error(`User with id "${id}" not found`);
  }

  if (validatedPayload.email !== undefined && validatedPayload.email !== existingUser.email) {
    const emailTaken: User | undefined = usersStore.findByEmail(validatedPayload.email);

    if (emailTaken) {
      throw new Error(`User with email "${validatedPayload.email}" already exists`);
    }
  }

  usersStore.removeById(id);

  const updatedUser: User = {
    ...existingUser,
    ...validatedPayload,
  };

  usersStore.add(updatedUser);
  return updatedUser;
};
