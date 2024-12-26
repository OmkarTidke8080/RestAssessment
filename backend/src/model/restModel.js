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
    Email: {
      type: String,
    },
    GST: {
      type: String,
    },
    Address: {
      type: String,
    },
    DateOfJoining: {
      type: Date,
    },
    DateOfExpiry: {
      type: Date,
    },
    Password: {
      type: String,
    },
    NumberOfBranches: {
      type: Number,
    },
    Status : {
      type:String
    },
    
    SubscriptionPlan : {
        type: String
    }
  
  },
  { timestamps: true }
);


const Rest = mongoose.model("Rest", restSchema);

export default Rest;
