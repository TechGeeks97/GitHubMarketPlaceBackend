const router = require("express").Router();
const {
  register,
  login,
  sendVerificationCode,
} = require("../controller/authController");

router.post("/register", register);

router.post("/login", login);
router.post("/verifyUser", sendVerificationCode);
module.exports = router;
