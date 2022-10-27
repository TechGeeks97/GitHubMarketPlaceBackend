const router = require("express").Router();
const {
  register,
  login,
  sendVerificationCode,
} = require("../controller/authController");

const metaAuth = require("meta-auth");
router.post("/register", register);
let meta = new metaAuth();
router.get("/:MetaAddress", meta, (req, res) => {
  // Request a message from the server
  res.send(req.metaAuth.challenge);
});
router.get("/:MetaMessage/:MetaSignature", meta, (re, res) => {
  if (req.metaAuth.recovered) {
    // Signature matches the cache address/challenge
    // Authentication is valid, assign JWT, etc.
    res.send(req.metaAuth.recovered);
  } else {
    // Sig did not match, invalid authentication
    res.status(500).send();
  }
});
router.post("/login", login);
router.post("/verifyUser", sendVerificationCode);
module.exports = router;
