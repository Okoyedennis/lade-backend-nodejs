const express = require("express");
const Apply = require("../models/apply");
const { auth } = require("../middleware/auth");
const { sendAppliedEmail } = require("../emails/account");
const router = express.Router();

router.post("/apply", auth, async (req, res) => {
  const apply = new Apply({
    ...req.body,
    owner: req.user._id,
  });
    
  try {
    await apply.save();
    sendAppliedEmail(apply.email, apply.firstName);
    res.status(201).send(apply);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.get("/apply/me/application", auth, async (req, res) => {
  const match = {};
  const sort = {};

  if (req.query.amount) {
    match.amount = req.query.amount === "true";
  }

  if (req.query.sortBy) {
    const parts = req.query.sortBy.split(":");
    sort[parts[0]] = parts[1] === "desc" ? -1 : 1;
  }
  try {
    await req.user
      .populate({
        path: "applied",
        match,
        options: {
          limit: parseInt(req.query.limit),
          skip: parseInt(req.query.skip),
          sort,
        },
      })
      .execPopulate();
    res.send(req.user.applied);
  } catch (error) {
    res.status(500).send();
  }
});

router.get("/appied/me/application/:id", auth, async (req, res) => {
  const _id = req.params.id;

  try {
    const apply = await Apply.findOne({ _id, owner: req.user._id });
    if (!apply) {
      return res.status(404).send();
    }
    res.send(apply);
  } catch (error) {
    res.status(500).send();
  }
});

//find all by id without passing owner
router.get("/appied/all/:id", auth, async (req, res) => {
  const _id = req.params.id;

  try {
    const apply = await Apply.findOne({ _id });
    if (!apply) {
      return res.status(404).send();
    }
    res.send(apply);
  } catch (error) {
    res.status(500).send();
  }
});

router.get("/apply/all", auth, async (req, res) => {
  try {
    const apply = await Apply.find({});
    res.send(apply);
  } catch (error) {
    res.status(500).send();
  }
});

module.exports = router;
