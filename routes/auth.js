const router = require("express").Router();

const { authRoute } = require("../controllers/auth.js");

router.get("/", authRoute);

module.exports = router;
