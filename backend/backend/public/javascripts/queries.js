const {Client} = require('pg')

const client = new Client({
  //for local use, host is 127.0.0.1 and port is 31000. for cluster use 172.30.110.193:5432

  user: 'postgres',
  host: '172.30.110.193',
  database: 'postgres',
  password: '0',
  port: '5432'
})

const getAdminCount = async (req,res) => {
  const result = await client.query(`SELECT COUNT(*)
                      FROM t_admins`)
  
  return(result.rows)
}

const getAdmins = async (username, password) => {
  await client.query(`SELECT COUNT(*) 
                    FROM t_admins 
                    WHERE username = $1 AND
                          password = $2`, 
                        [username, password])
    
  return(result.rows)
}

module.exports= {getAdmins, getAdminCount, client}