const { Pool } = require("pg") //import Pool object from PG

const pool = new Pool() //THIS will read the .env file and try to connect to our DB

module.exports = {
    //I'm exporting the query function from the pool
    //everytime in my application I'll ask the pool for sending or receiving info, I'll pass trough this method
    query: (text, params) => pool.query(text, params)
}