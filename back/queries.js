const Pool = require('pg').Pool
const pool = new Pool({
  user: 'me',
  host: 'localhost',
  database: 'api',
  password: 'password',
  port: 5432,
})

const getUsers = (req, res) => {
    const username = req.params.username
    const password = req.params.password

    pool.query(`SELECT COUNT(*) 
                FROM admins 
                WHERE username = $1 AND
                      password = $2`, 
                      [username, password])
    
    if()
}

module.exports= {getUsers}