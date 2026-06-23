const postService = require('../services/postService');


async function createPost(req, res) {
    try {
        const { title, image, description } = req.body;

        
        const slugify = require('../utils/slugify');
        const slug = slugify(title);

        const post = await postService.createPost(title, slug, image, description);

        res.json({
            success: true,
            message: 'Post created successfully',
            post
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error creating post',
            error: error.message
        });
    }
}


async function getPost(req, res) {
    try {
        const { slug } = req.params;
        const post = await postService.getPostBySlug(slug);

        if (!post) {
            return res.status(404).json({
                success: false,
                message: 'Post not found'
            });
        }

        res.json({
            success: true,
            post
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error fetching post',
            error: error.message
        });
    }
}

module.exports = {
    createPost,
    getPost
};
