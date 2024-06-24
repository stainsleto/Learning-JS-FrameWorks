import { Client } from "pg";
import * as dotenv from 'dotenv';
dotenv.config();


const client = new Client({
    connectionString: process.env.DATABASE_URL,
})


async function createUsersTable() {
    await client.connect()
    const result = await client.query(`
        CREATE TABLE users (
            id SERIAL PRIMARY KEY,
            username VARCHAR(50) UNIQUE NOT NULL,
            email VARCHAR(255) UNIQUE NOT NULL,
            password VARCHAR(255) NOT NULL,
            created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
        );
    `)
    console.log(result)
}

// createUsersTable();

async function insertData(username:string, email:string,password:string){
    try{
        await client.connect()
        const insertQuery = "INSERT INTO users (username, email, password) VALUES ($1,$2,$3)";
        const values = [username,email,password]
        const res = await client.query(insertQuery,values)
        console.log('Insertuion succcess', res)
    }
    catch(err){
        console.log('Error during insertion', err)
    }
    finally{
        await client.end()
    }

}

// insertData('stains','stains@mail.com','123');

async function getUser(email: string) {
    
  try {
    await client.connect(); 
    const query = 'SELECT * FROM users WHERE email = $1';
    const values = [email];
    const result = await client.query(query, values);
    
    if (result.rows.length > 0) {
      console.log('User found:', result.rows[0]); 
      return result.rows[0]; 
    } else {
      console.log('No user found with the given email.');
      return null; 
    }
  } catch (err) {
    console.error('Error during fetching user:', err);
    throw err; 
  } finally {
    await client.end();
  }
}

getUser('stains@mail.com').catch(console.error);