module.exports = {

  development: {
    client: 'pg',
    connection: {
      database: "learning_platform"
    },
    migrations: {
      directory: './db/migrations'
    }
  }
}
