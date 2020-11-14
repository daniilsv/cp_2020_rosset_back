export default () => ({
  server: {
    port: 3000,
  },
  database: {
    dialect: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'tod',
    password: 'tod',
    database: 'tod',
    synchronize: true,
    logging: console.log,
  },
  jwt: {
    expiresIn: 3600,
    secret: 'topmegasecret',
  },
});

// docker run -p 5432:5432 -e POSTGRES_DB=tod -e POSTGRES_USER=tod -e POSTGRES_PASSWORD=tod -d postgres
