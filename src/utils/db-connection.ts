"use server";

// import mysql from 'promise-mysql';
import mysql from 'mysql2/promise';



const createTCPPool = async () => {
    return mysql.createPool({
        host: process.env.DB_HOST,
        port: Number(process.env.DB_PORT),
        user: process.env.DB_USER, 
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
    });
};


export const getAllCollections = async () => {
    try {
        const pool = await createTCPPool();
        const conn = await pool.getConnection();
        const res = await conn.query('SELECT * FROM launchpad.Collections;');
        const responseJSON = JSON.parse(JSON.stringify(res));
        conn.release();
        return responseJSON;
    } catch (err) {
        console.log('error here : ', err);
        throw err;
    }
}

export const getCollection = async (address: string) => {
    try {
        const pool = await createTCPPool();
        const conn = await pool.getConnection();
        const res = await conn.query(`SELECT * FROM launchpad.Collections WHERE collection_address = "${address}"`);
        const responseJSON = JSON.parse(JSON.stringify(res));
        conn.release();
        return responseJSON;
    } catch (err) {
        console.log('error here : ', err);
        throw err;
    }
}