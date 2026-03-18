import { v4 as uuidv4 } from 'uuid';
import { User } from '../users.types';
import { CreateUserPayload } from '../users.schema';
import * as usersStore from './users.store';

export const createUser = (payload: CreateUserPayload): User => {
  const user: User = {
    id: uuidv4(),
    name: payload.name,
    email: payload.email,
    createdAt: new Date(),
  };

  usersStore.add(user);
  return user;
};
