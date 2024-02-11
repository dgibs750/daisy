"use server";

import mariadb from 'mariadb';

const config = process.env;

const pool = mariadb.createPool({
    host: config.DB_HOST,
    port: Number(config.DB_PORT),
    user: config.DB_USER,
    password: config.DB_PASSWORD,
    database: config.DB_NAME,
    connectionLimit: 100,
    idleTimeout: 0
    });

export const submit = async () => {
    let conn;
    try {
        conn = await pool.getConnection();
        const res = conn.query(
            "INSERT INTO launchpad.Collections (collection_address, contract, name, description, bio, website, twitter, discord, rpc, network, nft_name_type, groups, expired) VALUES(?, ?, ?, ?, NULL, 'https://twitter.com/LoserLabs', 'https://twitter.com/LoserLabs', 'https://twitter.com/LoserLabs', 'https://sei-testnet-rpc.polkachu.com/', 'atlantic-2', 'default', ?, 0)",
            ["sei188055ran99mw5zekq4x5vvv0mfwdrers53pqp63qgknmzplfedrq0a6v2e", "sei12gjnfdh2kz06qg6e4y997jfgpat6xpv9dw58gtzn6g75ysy8yt5snzf4ac", "Benchies", "its another description", '[{"name":"public"}]' ]
        )
    } catch (err) {
        console.log('error here : ', err);
        throw err;
    } finally {
        if(conn) {
            conn.end();
        }
    }
};

export const getAllCollections = async () => {
    let conn;
    try {
        conn = await pool.getConnection();
        const res = conn.query("SELECT * FROM launchpad.Collections;");
        return res;
    } catch (err) {
        console.log('error here : ', err);
        throw err;
    } finally {
        if(conn) {
            conn.end();
        }
    }
}

export const getCollection = async (address: string) => {
    let conn
    try {
        conn = await pool.getConnection();
        const res = conn.query(`SELECT * FROM launchpad.Collections WHERE collection_address = "${address}"`);
        return res;
    } catch (err) {
        console.log('error here : ', err);
        throw err;
    } finally {
        if(conn) {
            conn.end();
        }
    }
}