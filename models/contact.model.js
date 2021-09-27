import mongoose from "mongoose";

const contactSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  middleName: {
    type: String,
    required: true,
  },
  addresses: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Address",
    },
  ],
  mobiles: [{ type: mongoose.Schema.Types.ObjectId, ref: "Mobile" }],
});

export default mongoose.model("Contact", contactSchema);
