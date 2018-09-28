module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres://localhost/flowers-info'
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }
};
