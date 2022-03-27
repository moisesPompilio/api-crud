module.exports = {
    client: "mysql2",
    connection:{
        host : "127.0.0.1",
        database: "back",
        user: "root",
        passwor: ""
    },
    pool:{
        min: 2,
        max: 10
    },
    migrations:{
        tableName: "knex_migrations"
    }
}