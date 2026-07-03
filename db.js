const mysql = require('mysql2/promise');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',       
    password: 'Your_password',       
    database: 'blog_app'
});

module.exports = pool;
