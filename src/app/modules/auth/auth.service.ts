import config from '../../config'
import AppError from '../../errors/AppError'
import { createToken } from '../../utils/jwtVerification'
import { UserModel } from '../user/user.model'
import { TLoginUser } from './auth.interface'
import httpStatus from 'http-status'

const loginUser = async (payload: TLoginUser) => {
  // checking if the user is exist in our data base
  const user = await UserModel.isUserExistsByEmail(payload?.email)

  if (!user) {
    throw new AppError(httpStatus.NOT_FOUND, 'User is not found!')
  }

  // checking if the user's status
  if (user?.status === 'blocked') {
    throw new AppError(httpStatus.FORBIDDEN, 'User is blocked!')
  }

  //checking if the password is correct
  if (!(await UserModel.isPasswordMatched(payload?.password, user?.password)))
    throw new AppError(httpStatus.FORBIDDEN, 'Password do not matched')

  // jwt payload for create access
  const jwtPayload = {
    _id: user._id!,
    name: user.name,
    email: user.email,
    phone: user.phone
  }

  // create access token and send it to the client
  const accessToken = createToken(
    jwtPayload,
    config.access_token_secret as string,
    config.access_token_exp as string
  )

  return {
    accessToken
  }
}

export const AuthServices = {
  loginUser
}
