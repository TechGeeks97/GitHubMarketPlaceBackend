const router = require("express").Router();
const { verifyToken } = require("../../middleware/verifyToken");

const {
  addNavBarLinks,
  addNavBarLogo,
  updateNavLink,
  updateNavLogo,
  deleteNavLink,
  deleteNavLogo,
  getAllNavLinks,
  getAllNavLogo,
} = require("../../controller/cms/navbarController");

router.post("/navLinks", verifyToken, addNavBarLinks);
router.post("/navLogo", verifyToken, addNavBarLogo);
router.put("/navlink/:id", verifyToken, updateNavLink);
router.put("/navlogo/:id", verifyToken, updateNavLogo);
router.delete("/navlink/:id", verifyToken, deleteNavLink);
router.delete("/navlogo/:id", verifyToken, deleteNavLogo);
router.get("/getAllNavlinks", verifyToken, getAllNavLinks);
router.get("/getAllNavlogos", verifyToken, getAllNavLogo);

// router.get("/searchActivity", verifyToken, searchActivity);

module.exports = router;
