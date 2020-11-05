const router = require("express").Router();
const User = require("../model/User");
const { registerValidation } = require("../validation");

//Post route to /api/user/register
//async call because it takes time to post to the db
router.post("/register", async (req, res) => {
  //Validate data before registering user
  const { error } = registerValidation(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const user = new User({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  });
  try {
    const savedUser = await user.save();
    res.send(savedUser);
  } catch (err) {
    res.status(400).send(err);
  }
});

//Post route to /api/user/login
router.post("/login", (req, res) => {});

module.exports = router;
