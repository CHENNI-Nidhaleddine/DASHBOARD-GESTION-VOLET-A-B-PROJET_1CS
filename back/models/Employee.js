const mongoose = require("mongoose");

const EmployeeSchema = new mongoose.Schema(
  {
    admin:{
     type: Boolean,
     default:false
    },
    firstName: {
      type: String,
      require: true,
      min: 3,
      max: 20,
    },
    lastName: {
        type: String,
        require: true,
        min: 3,
        max: 20,
      },
    email: {
      type: String,
      required: true,
      max: 50,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      min: 6,
    },
    wilaya:{
       type:String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Employee", EmployeeSchema);