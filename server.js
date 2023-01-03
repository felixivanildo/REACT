const dbRoutes = require ("./src/routes")
const cors = require ("cors")
const express = require ('express')
const app = express();
const port = 3000;

app.use(cors())
app.use(express.json())

app.get('/', (req, resp) => {
    resp.send("Hi")
})


app.use('/api/v1', dbRoutes)

app.listen(port, ()=> console.log(`App listening on port ${port}`))