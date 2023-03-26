const express = require("express");
const Donation = require("../models/donation");
const { auth } = require("../middleware/auth");
const { sendDonationEmail } = require("../emails/account");
const router = express.Router();

router.post("/donation", auth, async (req, res) => {
  const donation = new Donation({
    ...req.body,
    owner: req.user._id,
  }); 
  try {
    await donation.save();
    sendDonationEmail(donation.email, donation.firstName, donation.amount);
    res.status(201).send(donation);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.get("/donation/all", auth, async (req, res) => {
  try {
    const donation = await Donation.find({});
    res.send(donation);
  } catch (error) {
    res.status(500).send();
  }
});

module.exports = router;
