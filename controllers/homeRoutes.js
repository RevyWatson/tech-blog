const router = require("express").Router();
const { Blog, User } = require("../models");
const withAuth = require("../utils/auth");

router.get('/', async (req, res) => {
  try {
    const blogData = await Blog.findAll({
      include: [
        {
          model: User,
          attributes: ["username"],
        },
      ],
    });
    const blogs = blogData.map((blog) => blog.get({ plain: true }));
    res.render("homepage", {
      blogs,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

//This route doesn't work. Can't figure out why.
//Supposed to redirect from homepage (when individual blog is clicked) and get  
//the blog page and render the blog.handlebars content.
router.get("/blog/:id", withAuth, async (req, res) => {
  try {
    const blogData = await Blog.findByPk(req.params.id, {
      attributes: { exclude: ["password"] },
      include: [{ model: Blog, User }],
    });
    const blog = blogData.get({ plain: true });
    res.render("blog", {
      ...blog,
      logged_in: true
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/dashboard", withAuth, async (req, res) => {
  try {
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ["password"] },
      include: [{ model: Blog }],
    });
    const user = userData.get({ plain: true });
    res.render("dashboard", {
      ...user,
      logged_in: true
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

//This route doesn't work. Can't figure out why. Have tried changing the "blog" to "create" too.
//Supposed to redirect from the dashboard to the create new blog post by rendering the create.handlebars content.
router.get("/blog", withAuth, async (re, res) => {
  if (req.session.logged_in) {
    res.redirect("/create");
    return;
  }
  res.render("blog");
});

router.get("/login", (req, res) => {
  if (req.session.logged_in) {
    res.redirect("/dashboard");
    return;
  }
  res.render("login");
});

router.get("/signup", (req, res) => {
  if (req.session.logged_in) {
    res.redirect("/dashboard");
    return;
  }
  res.render("signup");
});

module.exports = router;