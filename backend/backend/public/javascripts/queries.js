const {Client} = require('pg')

const client = new Client({
  // for local use, host is 127.0.0.1 and port is 31000.
  // for cluster use host is 172.30.110.193 and port is 5432

  user: 'postgres',
  host: '127.0.0.1',
  database: 'postgres',
  password: '0',
  port: '31000'
})

const getAdminCount = async (req,res) => {
  const result = await client.query(`SELECT COUNT(*)
                      FROM t_admins`)
  
  return(result.rows)
}

const getAdminByCount = async (username, password) => {
 const result = await client.query(`SELECT COUNT(*) 
                    FROM t_admins 
                    WHERE username = $1 AND
                          password = $2`, 
                        [username, password])
    
  return(result.rows)
}

const getAllRequests = async () => {
  const result = await client.query(`SELECT request_id AS id, name, phone_num AS phone, department, state AS status, body
                                     FROM t_requests`)

                                     return(result.rows)
}

const updateRequestState = async(newState, requestId) => {
  const result = await client.query(`UPDATE t_requests
                                     SET state = $1
                                     WHERE request_id = $2`, [
                                       newState, requestId
                                     ])
                                     console.log(result.rowCount)
                                     return(result.rowCount) 
}

const addRequest = async(requestDetails) => {
  const result = await client.query(`INSERT INTO t_requests(name, phone_num, department, body)
                                     VALUES ($1, $2, $3, $4)`, [
                                       requestDetails.senderName, requestDetails.phoneNum, requestDetails.department, requestDetails.content
                                     ])
                                     console.log(result)
                                     return(result)
}
module.exports= {addRequest, updateRequestState, getAllRequests, getAdminCount, getAdminByCount, client}

