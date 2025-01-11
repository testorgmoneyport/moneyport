// utils/db.js
import { Pool } from 'pg';

let pool;

export const getPool = () => {
  if (!pool) {
    pool = new Pool({
      host: process.env.DB_HOST,
      port: process.env.DB_PORT,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      ssl: {
        rejectUnauthorized: false // AWS RDS için gerekli
      }
    });
  }
  return pool;
};