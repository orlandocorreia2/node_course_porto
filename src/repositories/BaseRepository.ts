import { db } from '../infra/database/postgres';
import { BaseRepositoryInterface } from './interfaces/BaseRepositoryInterface';

export default class BaseRepository implements BaseRepositoryInterface {
  protected _model: string = '';

  async findAll(): Promise<any[]> {
    const { rows } = await db.query(`select * from ${this._model}`);
    return rows;
  }
}
