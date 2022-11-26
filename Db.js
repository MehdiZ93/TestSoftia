const mysql = require("mysql");

class Db {
    con;

    constructor() {
        this.con = mysql.createConnection({
            host: "localhost",
            user: "root",
            password: "root",
            database: "SOFTIA"
        });
    }

    query(sql) {
        return new Promise((resolve, reject) => {
            this.con.query(sql, (err, rows) => {
                if (err) return reject(err);
                resolve(rows);
            })
        })
    }

    insert(sql, userId, conventionId, message) {
        return new Promise((resolve, reject) => {
            this.con.query(sql,[userId, conventionId, message], (err, rows) => {
                if (err) return reject(err);
                resolve(rows);
            })
        })
    }
}

module.exports = Db;
