import { ResponseErrorProps, ResponseSuccessProps } from '../types/response';

export const Response = {
  success: ({ data, reply, statusCode = 200 }: ResponseSuccessProps) => {
    return reply.code(statusCode).send({ data });
  },
  error: ({ message, reply, statusCode = 500 }: ResponseErrorProps) => {
    return reply.code(statusCode).send({ message });
  },
};
