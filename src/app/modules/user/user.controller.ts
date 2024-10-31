import catchAsync from "../../utils/catchAsync";
import { UserServices } from "./user.service";

const createUser = catchAsync((req, res) => {
  const userData = req.body;

  const result = UserServices.createUserIntoDb(userData);

  return result;
});

export const UserControllers = {
  createUser,
};
