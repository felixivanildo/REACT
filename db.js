const Pool = require ('pg').Pool;


const pool = new Pool (
    {
        user: 'postgres',
        host: 'localhost',
        database: 'App_agreste',
        password: 'senha',
        port: 5432
    }
)

module.exports = pool;