const router = require("express").Router();
const { verifyToken, authorization } = require("../middleware/verifyToken");

const {
  createCollections,
  updateCollection,
  deleteCollection,
  getAllCollections,
  searchCollections,
} = require("../controller/collectionController");
router.post("/", verifyToken, createCollections);
router.put("/:id", verifyToken, updateCollection);

router.delete("/:id", verifyToken, deleteCollection);

router.get("/getAllCollections", verifyToken, getAllCollections);

router.get("/searchCollection", verifyToken, searchCollections);

module.exports = router;
