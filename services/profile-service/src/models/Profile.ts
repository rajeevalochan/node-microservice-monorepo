import mongoose, { Document, Schema } from "mongoose";

interface IProfile extends Document {
  userId: string;
  name: string;
  age: number;
}

const ProfileSchema: Schema = new Schema({
  userId: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  age: { type: Number, required: true },
});

export default mongoose.model<IProfile>("Profile", ProfileSchema);
