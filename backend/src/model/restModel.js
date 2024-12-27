import mongoose from "mongoose";

const restSchema = new mongoose.Schema(
  {
    RestId: {
      type: Number,
      required: true,
      unique: true, // Ensure no duplicates
    },
    NameOfBusiness: {
      type: String,
    },
    OwnerName: {
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
    Rest_Images: {
      type: [String],
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
    NumberOfActiveBranches: {
      type: Number,
    },
    Status: {
      type: String,
    },

    SubscriptionPlan: {
      type: String,
    },
  },
  { timestamps: true }
);


const Rest = mongoose.model("Rest", restSchema);

export default Rest;
