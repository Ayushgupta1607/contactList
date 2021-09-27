import mongoose from "mongoose";
const mobileSchema = new mongoose.Schema({
  type: { type: String, required: true },
  countryCode: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  areaCode: { type: String, required: true },
  conatct: { type: mongoose.Schema.Types.ObjectId, ref: "Contact" },
});

export default mongoose.model("Mobile", mobileSchema);
