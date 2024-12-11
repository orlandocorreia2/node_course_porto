import pg from 'pg';
const { Client } = pg;

export const db = new Client({
  user: 'postgres',
  password: 'postgres',
  host: '0.0.0.0',
  port: 5432,
  database: 'node_course_porto',
});
