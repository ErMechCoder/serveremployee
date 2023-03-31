import mongoose from "mongoose";

const ClientSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
      min: 2,
      max: 100,
    },
    lastName: {
      type: String,
      required: true,
      min: 2,
      max: 100,
    },
    componyName:String,
    gender: String,
    address: String,
    states: String,
    country: String,
    pinCode: String,
    email: {
      type: String,
      required: true,
      max: 50,
    }, 
    contact:Number,
    designation: String,
    clientId: String,
    
  },
  { timestamps: true }
);

const Client = mongoose.model("Client", ClientSchema);
export default Client;
