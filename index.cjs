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

const express = require('express')
const app = express()
const port = 3000



app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

app.use( express.json() )

app.get('/testes', (req, res)=> {
    res.status(200).send(
    quer()
    
       
)}
    )
 





