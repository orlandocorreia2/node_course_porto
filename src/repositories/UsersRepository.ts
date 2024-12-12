import { injectable } from 'tsyringe';
import BaseRepository from './BaseRepository';
import { UsersRepositoryInterface } from './interfaces/UsersRepositoryInterface';

@injectable()
export default class UsersRepository
  extends BaseRepository
  implements UsersRepositoryInterface
{
  constructor() {
    super();
    this._model = 'users';
  }
}
