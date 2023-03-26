const mongoose = require("mongoose");
const validator = require("validator");


const donationSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      trime: true,
    },
    lastName: {
      type: String,
      trime: true,
    },
    email: {
      type: String,
      trim: true,
      lowerCase: true,
      validate(value) {
        if (!validator.isEmail(value)) {
          throw new Error("Email is invalid");
        }
      },
    },
    country: {
      type: String,
      trime: true,
    },
    bvn: {
      type: Number,
      trime: true,
    },
    amount: {
      type: String,
      trime: true,
    },
    message: {
      type: String,
      trime: true,
    },
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    }, 
  }, 
  {
    timestamps: true,
  }
);

const Donation = mongoose.model("Donation", donationSchema)

module.exports = Donation