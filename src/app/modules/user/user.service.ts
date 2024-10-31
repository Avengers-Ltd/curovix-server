import config from "../../config";
import { ROLE } from "./user.constant";
import { TUser } from "./user.interface";
import { UserModel } from "./user.model";

const createUserIntoDb = async (payload: TUser) => {
  payload.password = payload.password || config.default_password!;

  payload.role = payload.role || "admin";

  const result = await UserModel.create(payload);

  return result;
};

export const UserServices = {
  createUserIntoDb,
};
