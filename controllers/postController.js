const { createPost, getPostBySlug } = require('../services/postService');
const generateSlug = require('../utils/slugify');

exports.createPost = async (req, res) => {
    const { title, image, description } = req.body;
    const slug = generateSlug(title);

    try {
        const post = await createPost(title, slug, image, description);
        res.status(201).json({ success: true, post });
    } catch (err) {
        if (err.code === 'ER_DUP_ENTRY') {
            res.status(400).json({ success: false, message: 'Slug already exists' });
        } else {
            res.status(500).json({ success: false, message: 'Server error' });
        }
    }
};

exports.getPost = async (req, res) => {
    const { slug } = req.params;
    const post = await getPostBySlug(slug);

    if (post) {
        res.status(200).json(post);
    } else {
        res.status(404).json({ message: 'Post not found' });
    }
};
