module.exports = {
  type: 'mysql',
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  entities: [
    process.env.ENV === 'PROD'
      ? __dirname + '/dist/modules/**/entities/*.js'
      : __dirname + '/src/modules/**/entities/*.ts'
  ],
  migrations: [
    process.env.ENV === 'PROD'
      ? __dirname + '/dist/shared/infra/database/migrations/*.js'
      : __dirname + '/src/shared/infra/database/migrations/*.ts'
  ],
  cli: {
    migrationsDir: './src/shared/infra/database/migrations'
  },
  options: {
    enableArithAbort: true
  }
}
