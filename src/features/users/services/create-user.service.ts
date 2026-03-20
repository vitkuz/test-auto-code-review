import { v4 as uuidv4 } from 'uuid';
import { User } from '../users.types';
import { createUserSchema, CreateUserPayload } from '../users.schema';
import * as usersStore from './users.store';

export const createUser = (payload: CreateUserPayload): User => {
  const validatedPayload: CreateUserPayload = createUserSchema.parse(payload);

  const existingUsers: readonly User[] = usersStore.getAll();
  const emailTaken: boolean = existingUsers.some((u: User) => u.email === validatedPayload.email);

  if (emailTaken) {
    throw new Error(`User with email "${validatedPayload.email}" already exists`);
  }

  const user: User = {
    id: uuidv4(),
    name: validatedPayload.name,
    email: validatedPayload.email,
    createdAt: new Date(),
  };

  usersStore.add(user);
  return user;
};
