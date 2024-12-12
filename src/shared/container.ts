import { container } from 'tsyringe';
import { FindAllUsersService } from '../services/FindAllUsersService';
import { FindAllUsersServiceInterface } from '../services/interfaces/FindAllUsersServiceInterface';
import { UsersRepositoryInterface } from '../repositories/interfaces/UsersRepositoryInterface';
import UsersRepository from '../repositories/UsersRepository';

container.register<FindAllUsersServiceInterface>(
  'FindAllUsersService',
  FindAllUsersService,
);

container.register<UsersRepositoryInterface>(
  'UsersRepository',
  UsersRepository,
);
