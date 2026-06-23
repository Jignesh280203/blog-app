const pool = require('../db');
const { v4: uuidv4 } = require('uuid');

// Insert new post
async function createPost(title, slug, image, description) {
    const id = uuidv4();
    const [result] = await pool.query(
        'INSERT INTO posts (id, title, slug, image, description) VALUES (?, ?, ?, ?, ?)',
        [id, title, slug, image, description]
    );
    return { id, title, slug, image, description };
}


async function getPostBySlug(slug) {
    const [rows] = await pool.query(
        'SELECT * FROM posts WHERE slug = ?',
        [slug]
    );
    return rows[0];
}

module.exports = { createPost, getPostBySlug };
