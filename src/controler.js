const pool = require ('../db')
const queries = require ("./queries")


const getRegisters = (req, res) => {
    pool.query(queries.getRegisters, (err, results)=>
    {
        if (err){
            throw err
        }
        res.status(200).json(results.rows)
    })
}

const getRegistersId = (req, res) => {
    const isncrição = req.params.id;
    console.log (isncrição)
    pool.query(queries.getRegistersId+"'"+isncrição+"'", (err, results)=>{
        console.log(queries.getRegistersId, "'"+isncrição+"'")
        if (err){
            throw err
        }
        res.status(200).json(results.rows)

    })
}

module.exports = {
    getRegisters,
    getRegistersId
}