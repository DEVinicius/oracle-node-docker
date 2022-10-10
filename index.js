require('dotenv').config()
const oracledb = require('oracledb');
const config = require('./db.config');

const query = ``;

async function runTest() {
 let conn;
 try {
   conn = await oracledb.getConnection(config);
   const result = await conn.execute(
     query
   );
   console.log(result);
 } catch (err) {
   console.error("PROBLEM",err);
 } finally {
   if (conn) {
     try {
       await conn.close();
     } catch (err) {
       console.error(err);
     }
   }
 }
}
console.log('TESTE')
runTest();
