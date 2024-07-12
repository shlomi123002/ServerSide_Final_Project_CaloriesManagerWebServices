import mongoose from "mongoose";
const { Schema } = mongoose;

// Define the user schema
const userSchema = new Schema({
  id: { type: Number, required: true }, // Use Number type for ID
  first_name: { type: String, required: true },
  last_name: { type: String, required: true },
  birthday: { type: String }, // String type for birthday
});

export default mongoose.model("User", userSchema);
