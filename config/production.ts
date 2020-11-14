export default () => ({
  server: {
    port: 3000,
  },
  database: {
    dialect: 'postgres',
    host: 'postgres',
    port: 5432,
    username: 'tod',
    password: 'tod',
    database: 'tod',
    synchronize: false,
  },
  jwt: {
    expiresIn: 3600,
    secret: 'topmegasecret',
  },
});