const router = require("express").Router();
const POU = require("../models/Pou");
const { verifyToken } = require("../middleware/verifyToken");
// const ObjectId = require("mongoose").Types.ObjectId;
router.post("/", verifyToken, async (req, res) => {
  try {
    let pou = new POU(req.body);
    let response = await pou.save();
    res.status(200).send({ status: 200, data: response });
  } catch (err) {
    res.status(500).send({ status: 500, message: err });
  }
});
router.put("/:id", verifyToken, async (req, res) => {
  try {
    let body = { ...req.body };

    const updatePou = await POU.findByIdAndUpdate(
      { _id: req.params.id },
      {
        $set: body,
      },
      { new: true }
    );
    res.status(200).send({ status: 200, data: updatePou });
  } catch (err) {
    console.log("err", err);
    res.status(500).send({ status: 500, message: err });
  }
});
router.delete("/:id", verifyToken, async (req, res) => {
  try {
    await POU.findByIdAndDelete(req.params.id);
    res.status(200).send({
      status: 200,
      message: "pou has been deleted successfully",
    });
  } catch (err) {
    res.status(500).send({ status: 500, route: "delete pou", message: err });
  }
});
router.get("/", verifyToken, async (req, res) => {
  try {
    let pouList = await POU.find();
    res.status(200).send({ status: 200, data: pouList });
  } catch (err) {
    res.status(500).send({ status: 500, message: err });
  }
});

module.exports = router;
