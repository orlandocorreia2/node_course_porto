import Fastify, { FastifyInstance } from 'fastify';
import { routes } from './routes';

const app: FastifyInstance = Fastify({
  logger: true,
});

routes(app);

export { app };
