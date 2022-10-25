const router = require("express").Router();
const Section = require("../../models/cms/Section/Section");
const ObjectId = require("mongoose").Types.ObjectId;
router.post("/", async (req, res) => {
  try {
    let section = new Section(req.body);
    let response = await section.save();
    res.status(200).send({ status: 200, data: response });
  } catch (err) {
    res.status(500).send({ status: 500, message: err });
  }
});
router.put("/", async (req, res) => {
  try {
    const section = await Section.find().lean();

    console.log("req", section);
    let body = { ...req.body };
    let newSchema = { ...section[0].section };
    console.log("body", body);
    Object.keys(body).map((item) => {
      newSchema[item] = body[item];
      //   newSchema = { ...newSchema, [item]: body[item] };
    });
    console.log("newcschme", newSchema);
    // console.log("keytoUpdate", keyToUpdate);
    // let footerObj = { ...section[0].section };
    // delete footerObj[keyToUpdate];

    // console.log("section obje fter delete", footerObj);
    // let reqBody = body[keyToUpdate];

    // console.log("id", section[0]._id);
    const updateSection = await Section.findByIdAndUpdate(
      { _id: section[0]._id },
      {
        $set: { section: newSchema },
      },
      { new: true }
    );
    res.status(200).send({ status: 200, data: updateSection });
  } catch (err) {
    console.log("err", err);
    res.status(500).send({ status: 500, message: err });
  }
});

router.get("/", async (req, res) => {
  try {
    let sectionlist = await Section.find();
    res.status(200).send({ status: 200, data: sectionlist });
  } catch (err) {
    res.status(500).send({ status: 500, message: err });
  }
});

module.exports = router;
