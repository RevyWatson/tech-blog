const router = require("express").Router();
const { Blog } = require("../../models");
const withAuth = require("../../utils/auth");

router.post("/create", withAuth, async (req, res) => {
    try {
        const newBlogPost = await Blog.create({
            user_id: req.session.user.id,
            title: req.body.title,
            content: req.body.content,
        });
        res.status(200).json(newBlogPost);
    } catch (err) {
        res.status(400).json(err);
    }
});

router.delete("/:id", withAuth, async (req, res) => {
    try {
        const blogData = await Blog.destroy({
            where: {
                id: req.params.id,
                user_id: req.session.user_id,
            },
        });
        if (!blogData) {
            res.status(404).json({ message: "Sorry, that id doesn't match any existing blog posts!" });
            return;
        }
        res.status(200).json(blogData);
    } catch (err) {
        res.status(500).json(err);
    }
});


module.exports = router