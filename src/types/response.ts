import { FastifyReply } from 'fastify';

export type ResponseSuccessProps = {
  data: any;
  reply: FastifyReply;
  statusCode?: number;
};

export type ResponseErrorProps = {
  message: string;
  reply: FastifyReply;
  statusCode?: number;
};
