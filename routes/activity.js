const router = require("express").Router();
const { verifyToken, authorization } = require("../middleware/verifyToken");

const {
  createActivity,
  updateActivity,
  deleteActivity,
  getAllActivities,
  searchActivity,
} = require("../controller/activityController");
router.post("/", verifyToken, createActivity);
router.put("/:id", verifyToken, updateActivity);

router.delete("/:id", verifyToken, deleteActivity);

router.get("/getAllActivities", verifyToken, getAllActivities);

router.get("/searchActivity", verifyToken, searchActivity);

module.exports = router;
