const mongoose = require("mongoose");
const validator = require("validator");


const applySchema = new mongoose.Schema(
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
    stateOfOrigin: {
      type: String,
      trime: true,
    },
    gender: {
      type: String,
      trime: true,
    },
    dateOfBirth: {
      type: Date,
      trime: true,
    },
    bvn: {
      type: Number,
      trime: true,
    },
    amount: {
      type: Number,
      trime: true,
    },
    plotLocation: {
      type: String,
      trim: true,
    },
    market: {
      type: String,
      trim: true,
    },
    water: {
      type: String,
      trim: true,
    },
    hectars: {
      type: String,
      trim: true,
    },
    grow: {
      type: String,
      trim: true,
    },
    rotateCrops: {
      type: String,
      trim: true,
    },
    harvests: {
      type: Number,
      trim: true,
    },
    pestManagement: {
      type: String,
      trim: true,
    },
    integratedPestManagement: {
      type: String,
      trim: true,
    },
    soilTesting: {
      type: String,
      trim: true,
    },
    equipment: {
      type: String,
      trim: true,
    },
    marketingStrategy: {
      type: String,
      trim: true,
    },
    netHouse: {
      type: String,
      trim: true,
    },
    hearNetHouse: {
      type: String,
      trim: true,
    },
    netInterestProd: {
      type: String,
      trim: true,
    },
    moreIncome: {
      type: String,
      trim: true,
    },
    firstInvestment: {
      type: String,
      trim: true,
    },
    findMoney: {
      type: String,
      trim: true,
    },
    diffLoan: {
      type: String,
      trim: true,
    },
    upfrontPay: {
      type: String,
      trim: true,
    },
    payBackPeriod: {
      type: String,
      trim: true,
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



const Apply = mongoose.model("Apply", applySchema)

module.exports = Apply