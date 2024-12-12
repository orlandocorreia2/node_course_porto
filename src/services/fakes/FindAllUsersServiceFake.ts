import { injectable } from 'tsyringe';
import { FindAllUsersServiceInterface } from '../interfaces/FindAllUsersServiceInterface';

@injectable()
export class FindAllUsersServiceFake implements FindAllUsersServiceInterface {
  async execute(): Promise<any> {
    return [
      {
        id: '7cf44254-2363-4620-8584-7af8a3ccc268',
        name: 'John Doe',
        email: 'johndoe@email.com',
      },
    ];
  }
}
