import mongoose from "mongoose";
const addressSchema = mongoose.Schema({
  type: {
    type: String,
    required: true,
  },
  streetName: {
    type: String,
    required: true,
  },
  streetNumber: {
    type: String,
    required: true,
  },
  apartmentNumber: { type: String },
  city: {
    type: String,
    required: true,
  },
  postalCode: { type: String, required: true },
  country: { type: String, required: true },
  conatct: { type: mongoose.Schema.Types.ObjectId, ref: "Contact" },
});
export default mongoose.model("Address", addressSchema);
