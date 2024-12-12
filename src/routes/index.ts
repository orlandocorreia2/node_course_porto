import { FastifyInstance } from 'fastify';
import { container } from 'tsyringe';
import { UsersController } from '../controllers/UsersController';

export const routes = (fastify: FastifyInstance) => {
  const usersController = container.resolve(UsersController);

  fastify.addHook('onSend', (_, response, error, done) => {
    response.header('Content-Type', 'application/json; charset=utf-8');
    if (error) console.log(`Error: ${error}`);
    done();
  });

  fastify.get('/users', {
    handler: async (request, reply) => {
      return await usersController.findAll(request, reply);
    },
  });
};
