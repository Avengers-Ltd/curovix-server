import catchAsync from "../../utils/catchAsync";
import SendResponse from "../../utils/sendResponse";
import httpStatus from "http-status";
import { UserServices } from "./user.service";

const createUser = catchAsync(async (req, res) => {
  const userData = req.body;

  const result = await UserServices.createUserIntoDb(userData);

  SendResponse(res, {
    success: true,
    statusCode: httpStatus.CREATED,
    message: "User Created Successfully",
    data: result,
  });
});

const getAllUser = catchAsync(async (req, res) => {
  const result = await UserServices.getAllUsersFromDb();

  SendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Users retrieved Successfully",
    data: result,
  });
});

const getUser = catchAsync(async (req, res) => {
  const { id } = req.params;

  const result = await UserServices.getUserFromDb(id);

  SendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "User retrieved Successfully",
    data: result,
  });
});

export const UserControllers = {
  createUser,
  getAllUser,
  getUser,
};
