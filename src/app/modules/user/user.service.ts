import config from "../../config";
import AppError from "../../errors/AppError";
import { TUser } from "./user.interface";
import { UserModel } from "./user.model";

const createUserIntoDb = async (payload: TUser) => {
  payload.password = payload.password || config.default_password!;

  payload.role = payload.role || "admin";

  const result = await UserModel.create(payload);

  return result;
};

const getAllUsersFromDb = async () => {
  const result = await UserModel.find({ isDeleted: false });
  return result;
};

const getUserFromDb = async (userId: string) => {
  const result = await UserModel.findById(userId);
  return result;
};

const updateUserIntoDb = async (email: string, payload: Partial<TUser>) => {
  // checking if the user is exists in the database
  const user = await UserModel.isUserExistsByEmail(email);

  if (!user) {
    throw new AppError(httpStatus.NOT_FOUND, "User is not found");
  }

  const result = await UserModel.findByIdAndUpdate(user?._id, payload, {
    new: true,
  });

  return result;
};

export const UserServices = {
  createUserIntoDb,
  getAllUsersFromDb,
  getUserFromDb,
  updateUserIntoDb,
};
