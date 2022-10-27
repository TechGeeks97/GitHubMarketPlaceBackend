const router = require("express").Router();
const Article = require("../models/Article");
const { verifyToken } = require("../middleware/verifyToken");
const { verify } = require("jsonwebtoken");
const ObjectId = require("mongoose").Types.ObjectId;
router.post("/", verifyToken, async (req, res) => {
  try {
    let article = new Article(req.body);
    let response = await article.save();
    res.status(200).send({ status: 200, data: response });
  } catch (err) {
    res.status(500).send({ status: 500, message: err });
  }
});
router.put("/:id", verifyToken, async (req, res) => {
  try {
    const article = await Article.find().lean();

    console.log("req", article);
    let body = { ...req.body };

    const updateArticle = await Article.findByIdAndUpdate(
      { _id: req.params.id },
      {
        $set: body,
      },
      { new: true }
    );
    res.status(200).send({ status: 200, data: updateArticle });
  } catch (err) {
    console.log("err", err);
    res.status(500).send({ status: 500, message: err });
  }
});

router.delete("/:id", verifyToken, async (req, res) => {
  try {
    await Article.findByIdAndDelete(req.params.id);
    res
      .status(200)
      .send({ status: 200, message: "Article has been deleted successfully" });
  } catch (err) {
    res.status(500).send({ status: 500, route: "delete artice", message: err });
  }
});

router.get("/", verifyToken, async (req, res) => {
  try {
    let articleList = await Article.find();
    res.status(200).send({ status: 200, data: articleList });
  } catch (err) {
    res.status(500).send({ status: 500, message: err });
  }
});

module.exports = router;
