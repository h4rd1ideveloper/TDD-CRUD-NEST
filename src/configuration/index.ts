export const port = parseInt(process.env.PORT, 10) || 3000;
export const database = {
  host: process.env.DATABASE_HOST,
  port: parseInt(process.env.DATABASE_PORT, 10) || 49153,
};
