const router = require("express").Router();
const User = require("../models/user");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

router.post("/register", async (req, res) => {
  const salt = await bcrypt.genSalt(10);
  const hassedPassword = await bcrypt.hash(req.body.password, salt);

  const user = new User({
    name: req.body.name,
    email: req.body.email,
    password: hassedPassword,
  });

  const result = await user.save(req);

  const { password, ...data } = await result.toJSON();

  res.send(data);
});

router.post("/login", async (req, res) => {
  const user = await User.findOne({ email: req.body.email });
  if (!user) {
    return res.status(404).send({ message: "email salah " });
  }

  if (!(await bcrypt.compare(req.body.password, user.password))) {
    return res.status(400).send({ message: "password salah" });
  }
  const token = jwt.sign({ _id: user._id }, "secret");
  res.cookie("jwt", token, {
    httpOnly: true,
    maxAge: 24 * 60 * 60 * 1000,
  });

  res.send(token);
  res.send({ message: "sukses" });
});

router.get("/user", async (req, res) => {
  try {
    const cookie = req.cookies["jwt"];
    const claims = jwt.verify(cookie, "secret");

    if (!claims) {
      return res.status(401).send({ message: "unauth " });
    }
    const user = await User.findOne({ _id: claims._id });
    const { password, ...data } = await user.toJSON();

    res.send(data);
  } catch {
    return res.status(401).send({ message: "unauth " });
  }
});

router.post("/logout", (req, res) => {
  res.cookie("jwt", "", { maxAge: 0 });
  res.send({ message: "logout berhasil" });
});
module.exports = router;
