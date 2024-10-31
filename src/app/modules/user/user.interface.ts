import { Model } from "mongoose";
import { ROLE } from "./user.constant";
export type TUser = {
  _id: string;
  name: string;
  profileImage: string;
  email: string;
  password: string;
  phone: string;
  role: keyof typeof ROLE;
  isDeleted: boolean;
  passwordChangedAt?: Date;
  needsPasswordChange: boolean;
};

export interface User extends Model<TUser> {
  isUserExistsByEmail(email: string): Promise<TUser | null>;
  isPasswordMatched(
    plainPassword: string,
    hashedPassword: string,
  ): Promise<boolean>;
  isJWTIssuedBeforePasswordChange(
    passwordChangedAt: Date,
    jwtIssuedTimestamp: number,
  ): boolean;
}
