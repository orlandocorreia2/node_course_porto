import 'reflect-metadata';
import './shared/container';
import Fastify, { FastifyInstance } from 'fastify';
import { routes } from './routes';

const app: FastifyInstance | any = Fastify({
  logger: true,
});

routes(app);

export { app };
