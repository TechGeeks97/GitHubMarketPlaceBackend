const router = require("express").Router();
const { verifyToken, authorization } = require("../middleware/verifyToken");

const {
  createNfts,
  updateNft,
  deleteNft,
  getAllNft,
  searchNft,
} = require("../controller/nftController");
router.post("/", verifyToken, createNfts);
router.put("/:id", verifyToken, updateNft);

router.delete("/:id", verifyToken, deleteNft);

router.get("/getAllNft", verifyToken, getAllNft);

router.get("/searchNft", verifyToken, searchNft);

module.exports = router;
