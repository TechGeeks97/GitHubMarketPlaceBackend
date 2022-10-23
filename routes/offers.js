const router = require("express").Router();
const { verifyToken, authorization } = require("../middleware/verifyToken");

const {
  createOffers,
  updateOffers,
  deleteOffer,
  getAllOffers,
  searchOffer,
} = require("../controller/offersController");
router.post("/", verifyToken, createOffers);
router.put("/:id", verifyToken, updateOffers);

router.delete("/:id", verifyToken, deleteOffer);

router.get("/getAllOffers", verifyToken, getAllOffers);

router.get("/searchOffer", verifyToken, searchOffer);

module.exports = router;
