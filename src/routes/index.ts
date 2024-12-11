import { FastifyInstance } from 'fastify';
import { db } from '../infra/database/postgres';

export const routes = (fastify: FastifyInstance) => {
  fastify.addHook('onSend', (_, response, error, done) => {
    response.header('Content-Type', 'application/json; charset=utf-8');
    if (error) console.log(`Error: ${error}`);
    done();
  });

  fastify.get('/', async function handler(request, response) {
    const users = await db.query('select * from users');
    console.log('users');
    response.code(200).send(users);
  });
};
