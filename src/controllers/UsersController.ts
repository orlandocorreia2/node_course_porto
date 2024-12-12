import { inject, injectable } from 'tsyringe';
import { FastifyReply, FastifyRequest } from 'fastify';
import { Response } from '../utils/response';
import { FindAllUsersServiceInterface } from '../services/interfaces/FindAllUsersServiceInterface';

@injectable()
export class UsersController {
  constructor(
    @inject('FindAllUsersService')
    private _findAllUsersService: FindAllUsersServiceInterface,
  ) {}

  public async findAll(_: FastifyRequest, reply: FastifyReply) {
    const data = await this._findAllUsersService.execute();
    return Response.success({ data, reply });
  }
}
