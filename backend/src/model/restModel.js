import mongoose from "mongoose";

const restSchema = new mongoose.Schema(
  {
    NameOfBusiness: {
      type: String,
    },
    OwnerFullName: {
      type: String,
    },
    MobileNumber: {
      type: Number,
    },
    Email : {
        type: String
    },
    Password:{
      type:String
    }
  },
  { timestamps: true }
);


const Rest = mongoose.model("Rest", restSchema);

export default Rest;
