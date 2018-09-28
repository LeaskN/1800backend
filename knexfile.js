module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres://localhost/flowers-info'
  },
  test: {
    client: 'pg',
    connection: 'postgres://localhost/test-flowers-info'
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }
};
