import mysql from "mysql2";

const pool = mysql
  .createPool({
    host: "localhost",
    user: "dbuser",
    password: "database",
    database: "formdb",
  })
  .promise();

export async function getAllItems() {
  const [rows] = await pool.query("select * from tbdetails");
  return rows;
}