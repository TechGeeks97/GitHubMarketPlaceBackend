const router = require("express").Router();
const { verifyToken, authorization } = require("../middleware/verifyToken");

const {
  updateUser,
  deleteUser,
  getAllUsers,
  searchUser,
} = require("../controller/userController");
router.put("/:id", verifyToken, updateUser);

router.delete("/:id", verifyToken, deleteUser);

router.get("/getAllUsers", verifyToken, getAllUsers);

router.get("/searchUser", verifyToken, searchUser);

module.exports = router;
