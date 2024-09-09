const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const customerSignUpSchema = new mongoose.Schema({
  fName: {
    type: String,
    require: true,
  },
  lName: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
  phone: {
    type: String,
    require: true,
  },
  deliveryAddress: {
    type: String,
    require: true,
  },
  password: {
    type: String,
    require: true,
  },
  cpassword: {
    type: String,
    require: true,
  },
});

// Password Hashing Middleware
customerSignUpSchema.pre("save", async function (next) {
  console.log("hi from hashing method");
  if (this.isModified("password")) {
    this.password = bcrypt.hash(this.password, 12);
    this.cpassword = bcrypt.hash(this.cpassword, 12);
  }
  next();
});

const Customer = mongoose.model("customer", customerSignUpSchema);

module.exports = Customer;
