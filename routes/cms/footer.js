const router = require("express").Router();
const Footer = require("../../models/cms/footer/Footer");
const ObjectId = require("mongoose").Types.ObjectId;
router.post("/", async (req, res) => {
  try {
    let footer = new Footer(req.body);
    let response = await footer.save();
    res.status(200).send({ status: 200, data: response });
  } catch (err) {
    res.status(500).send({ status: 500, message: err });
  }
});
router.put("/", async (req, res) => {
  try {
    const footer = await Footer.find().lean();

    console.log("req", footer);
    let body = { ...req.body };

    console.log("body", body);
    let keyToUpdate = Object.keys(body)[0];
    console.log("keytoUpdate", keyToUpdate);
    let footerObj = { ...footer[0].footer };
    delete footerObj[keyToUpdate];

    console.log("footer obje fter delete", footerObj);
    let reqBody = body[keyToUpdate];

    if (reqBody.title) {
      footerObj[reqBody.title] = reqBody.list;
      console.log("footer obj", footerObj);
    }
    console.log("id", footer[0]._id);
    const updateFooter = await Footer.findByIdAndUpdate(
      { _id: footer[0]._id },
      {
        $set: { footer: footerObj },
      },
      { new: true }
    );
    res.status(200).send({ status: 200, data: updateFooter });
  } catch (err) {
    console.log("err", err);
    res.status(500).send({ status: 500, message: err });
  }
});

router.get("/", async (req, res) => {
  try {
    let footerlist = await Footer.find();
    res.status(200).send({ status: 200, data: footerlist });
  } catch (err) {
    res.status(500).send({ status: 500, message: err });
  }
});

module.exports = router;
