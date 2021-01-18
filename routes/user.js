const router = require("express").Router();

const { getUsers, getUser } = require("../controllers/user.js");

router.get("/", getUsers);
rotuer.get("/:id", getUser);

module.exports = router;
