import AppError from "../errors/AppError";
import catchAsync from "../utils/catchAsync";
import httpStatus from "http-status";
import { verifyToken } from "../utils/jwtVerification";
import config from "../config";
import { JwtPayload } from "jsonwebtoken";
import { UserModel } from "../modules/user/user.model";
import { ROLE } from "../modules/user/user.constant";

const auth = async (...requiredRoles: (keyof typeof ROLE)[]) => {
  return catchAsync(async (req, res, next) => {
    const token = req.headers.authorization;

    // checking if there any token given
    if (!token) {
      throw new AppError(
        httpStatus.UNAUTHORIZED,
        "You are not authorized to access this",
      );
    }

    // decoding the token
    const decode = verifyToken(
      token,
      config.access_token_secret as string,
    ) as JwtPayload;

    const { role, email, iat } = decode;

    // checking if the user is exists in the database
    const user = await UserModel.isUserExistsByEmail(email);

    if (!user) {
      throw new AppError(httpStatus.NOT_FOUND, "User is not found");
    }

    const userStatus = user?.status;

    if (userStatus === "blocked") {
      throw new AppError(httpStatus.FORBIDDEN, "User is blocked");
    }

    if (
      user?.passwordChangedAt &&
      UserModel.isJWTIssuedBeforePasswordChange(
        user?.passwordChangedAt,
        iat as number,
      )
    ) {
      throw new AppError(
        httpStatus.FORBIDDEN,
        "Your password has been changed, please login again",
      );
    }

    if (requiredRoles && !requiredRoles.includes(role)) {
      throw new AppError(httpStatus.UNAUTHORIZED, "You are not authorized");
    }

    req.user = decode;
    next();
  });
};
