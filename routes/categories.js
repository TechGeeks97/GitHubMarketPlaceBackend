const router = require("express").Router();
const { verifyToken, authorization } = require("../middleware/verifyToken");

const {
  createCategories,
  updateCategories,
  deleteCategory,
  getAllCategories,
  searchCategory,
} = require("../controller/categoryController");
router.post("/", verifyToken, createCategories);
router.put("/:id", verifyToken, updateCategories);

router.delete("/:id", verifyToken, deleteCategory);

router.get("/getAllCategories", verifyToken, getAllCategories);

router.get("/searchCategory", verifyToken, searchCategory);

module.exports = router;
