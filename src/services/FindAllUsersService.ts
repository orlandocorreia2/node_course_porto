import { inject, injectable } from 'tsyringe';
import { FindAllUsersServiceInterface } from './interfaces/FindAllUsersServiceInterface';
import { UsersRepositoryInterface } from '../repositories/interfaces/UsersRepositoryInterface';

@injectable()
export class FindAllUsersService implements FindAllUsersServiceInterface {
  constructor(
    @inject('UsersRepository')
    private _usersRepository: UsersRepositoryInterface,
  ) {}

  async execute(): Promise<any> {
    return await this._usersRepository.findAll();
  }
}
