import { v4 as uuidv4 } from 'uuid';
import { User } from '../users.types';
import { CreateUserPayload } from '../users.schema';

const users: User[] = [];

export const createUser = (payload: CreateUserPayload): User => {
  const user: User = {
    id: uuidv4(),
    name: payload.name,
    email: payload.email,
    createdAt: new Date(),
  };

  users.push(user);
  return user;
};

export const getUsers = (): User[] => users;
