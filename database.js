import mysql from 'mysql2'
import dotenv from 'dotenv'
dotenv.config()



const pool = mysql.createPool({
    host:process.env.MYSQL_HOST,
    user:process.env.MYSQL_USER,
    password:process.env.MYSQL_PASSWORD,
    database:process.env.MYSQL_DATABASE,
}).promise();

export async function getUsers(){
    const [rows] = await pool.query("SELECT * FROM upg_test");
    return rows;
}

export async function getUser(id){
    const [rows] = await pool.query(`
    SELECT * FROM 
    upg_test 
    WHERE id=?`, [id]);
    return rows;
}

export async function createUser(id_upg,name,surname,upg_testcol,city,id){
    const [newRows] = await pool.query(
    `INSERT INTO upg_test (id_upg,name,surname,upg_testcol,city,id) VALUES (?,?,?,?,?,?)`,
    [id_upg,name,surname,upg_testcol,city,id]);
    return newRows;
    
}
/* const userList = await getUsers()
console.log(userList); */

/* const user = await getUser(4)
console.log(user); */

/* const userCreated = await createUser("55","enzo","bruma","test","milano","6")
console.log(userCreated) */