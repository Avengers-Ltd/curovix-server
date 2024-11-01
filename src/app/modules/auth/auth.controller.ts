import catchAsync from "../../utils/catchAsync";
import SendResponse from "../../utils/sendResponse";
import { AuthServices } from "./auth.service";
import httpStatus from "http-status";

const loginUser = catchAsync(async (req, res) => {
  const result = await AuthServices.loginUser(req.body);

  SendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Service Created Successfully",
    data: result,
  });
});

export const AuthControllers = {
  loginUser,
};
