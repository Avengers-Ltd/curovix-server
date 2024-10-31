import { model, Schema } from "mongoose";
import { TUser, User } from "./user.interface";
import { ROLE } from "./user.constant";

const userSchema = new Schema<TUser, User>({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  phone: { type: String, required: true },
  role: { type: String, enum: Object.values(ROLE) },
  isDeleted: { type: Boolean, default: false },
  passwordChangedAt: { type: Date },
  needsPasswordChange: { type: Boolean, default: true },
});

userSchema.statics.isUserExistsByEmail = async function (email: string) {
  return await UserModel.findOne({ email: email });
};

export const UserModel = model<TUser, User>("User", userSchema);
