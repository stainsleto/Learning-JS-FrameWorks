"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const pg_1 = require("pg");
const client = new pg_1.Client({
    host: 'sumserver.girei.tech',
    database: 'postgres',
    user: 'postgres',
    password: 'stains',
});
const db = () => __awaiter(void 0, void 0, void 0, function* () {
    yield client.connect();
    const result = yield client.query('SELECT * FROM users;');
    console.log(result);
});
const insertUserData = (userInput) => __awaiter(void 0, void 0, void 0, function* () {
    const { username, password, email } = userInput;
    yield client.connect();
    const insert = yield client.query(`INSERT INTO users (username, password, email) VALUES ('${username}', '${password}', '${email}')`);
    console.log(insert);
});
// insertUserData({username : 'leto', password:  '1234', email: 'leto@girei.tech'})
// to avoid sql Injection use this method
const insertNewUserData = (userInput) => __awaiter(void 0, void 0, void 0, function* () {
    const { username, password, email } = userInput;
    yield client.connect();
    const insert = yield client.query(`INSERT INTO users (username, password, email) VALUES ($1,$2,$3)`, [username, password, email]); // we are saying that the inserted value can only be a string not a sql command 
    console.log(insert);
});
insertNewUserData({ username: 'raj', password: '1234', email: 'raj@girei.tech' });
