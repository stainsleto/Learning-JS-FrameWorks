import { Client } from 'pg'

type InsertUserDataType = {
    username : string;
    password : string;
    email: string
}
 
const client = new Client({
  host: 'sumserver.girei.tech',
  database: 'postgres',
  user: 'postgres',
  password: 'stains',
})

const db = async () => {
    await client.connect()
    const result = await client.query('SELECT * FROM users;')
    console.log(result)
}

const insertUserData = async( userInput : InsertUserDataType) => {
    const {username, password, email} = userInput
    await client.connect();
    const insert = await client.query(`INSERT INTO users (username, password, email) VALUES ('${username}', '${password}', '${email}')`)
    console.log(insert)
}

// insertUserData({username : 'leto', password:  '1234', email: 'leto@girei.tech'})

// to avoid sql Injection use this method


const insertNewUserData = async( userInput : InsertUserDataType) => {
    const {username, password, email} = userInput
    await client.connect();
    const insert = await client.query(`INSERT INTO users (username, password, email) VALUES ($1,$2,$3)`, [username, password,email])  // we are saying that the inserted value can only be a string not a sql command 
    console.log(insert)
}

insertNewUserData({username : 'raj', password:  '1234', email: 'raj@girei.tech'})

// Foreign Key ----

// CREATE TABLE addresses (
//     id SERIAL PRIMARY KEY,
//     user_id INTEGER NOT NULL,
//     city VARCHAR(100) NOT NULL,
//     country VARCHAR(100) NOT NULL,
//     street VARCHAR(255) NOT NULL,
//     pincode VARCHAR(20),
//     created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
//     FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
// );


// transaction sql command  ---- 

// BEGIN; -- Start transaction

// INSERT INTO users (username, email, password)
// VALUES ('john_doe', 'john_doe1@example.com', 'securepassword123');

// INSERT INTO addresses (user_id, city, country, street, pincode)
// VALUES (currval('users_id_seq'), 'New York', 'USA', '123 Broadway St', '10001');

// COMMIT;


// explaination currval -----

// currval --> this gets the most recently added primary key from the users table
//currval is session-specific, meaning it returns the current value of the sequence in the context of the current session or transaction.


// Join ---- 

// SELECT users.id, users.username, users.email, addresses.city, addresses.country, addresses.street, addresses.pincode
// FROM users
// JOIN addresses ON users.id = addresses.user_id
// WHERE users.id = '1';


// short hand approach for joins ----- 

// SELECT u.id, u.username, u.email, a.city, a.country, a.street, a.pincode
// FROM users u
// JOIN addresses a ON u.id = a.user_id
// WHERE u.id = YOUR_USER_ID;