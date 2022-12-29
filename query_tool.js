const {Pool, Client} = require ('pg')
const pool = new Pool (
    {
        user: 'postgres',
        host: 'localhost',
        database: 'App_agreste',
        password: 'senha',
        port: 5432
    }
)

function quer (){
    pool.query("SELECT * FROM ocorrencias", (err,res)=>{
        // console.log(err,res)
        if (res){
            res.rows.forEach((E) => {console.log(E)
            return E;
        })
        }
        pool.end()
        
        
        

    })
}

export default quer