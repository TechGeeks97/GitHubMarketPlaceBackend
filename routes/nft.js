const router = require("express").Router();
const { verifyToken, authorization } = require("../middleware/verifyToken");

const {
  createNfts,
  updateNft,
  deleteNft,
  getAllNft,
  searchNft,
  filterNft,
  nftVisitorsHandler,
  nftLikesHandler,
  updateNftTotalSale,
} = require("../controller/nftController");
router.post("/", verifyToken, createNfts);
router.put("/:id", verifyToken, updateNft);
router.put("/NftmostViewed/:id", verifyToken, nftVisitorsHandler);
router.put("/NftLikes/:id", verifyToken, nftLikesHandler);
router.put(
  "/updateNftTotalSale/:id/:collectionId",
  verifyToken,
  updateNftTotalSale
);

router.delete("/:id", verifyToken, deleteNft);

router.get("/getAllNft", verifyToken, getAllNft);

router.get("/filterNft", verifyToken, filterNft);
router.get("/searchNft", verifyToken, searchNft);

module.exports = router;
