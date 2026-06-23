const mysql = require('mysql2/promise');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',       
    password: 'Varsha@143',       
    database: 'blog_app'
});

module.exports = pool;
