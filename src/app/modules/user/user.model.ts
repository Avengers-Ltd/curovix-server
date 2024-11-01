import { model, Schema } from 'mongoose'
import bcrypt from 'bcryptjs'
import { TUser, User } from './user.interface'
import { ROLE, STATUS } from './user.constant'
import config from '../../config'

const userSchema = new Schema<TUser, User>({
  name: { type: String, required: true },
  profileImage: {
    type: String,
    default: 'https://i.ibb.co.com/vkVW6s0/download.png'
  },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  phone: { type: String, required: true },
  role: { type: String, enum: Object.values(ROLE) },
  status: { type: String, enum: Object.values(STATUS), default: 'active' },
  passwordChangedAt: { type: Date },
  needsPasswordChange: { type: Boolean, default: true }
})

userSchema.pre('save', async function (next) {
  this.password = await bcrypt.hash(
    this.password,
    Number(config.bcrypt_salt_round)
  )
  next()
})

userSchema.post('save', async function (doc, next) {
  doc.password = 'Password is hidden for security reasons'
  next()
})

userSchema.statics.isUserExistsByEmail = async function (email: string) {
  return await UserModel.findOne({ email: email })
}

userSchema.statics.isPasswordMatched = async function name(
  plainPassword: string,
  hashedPassword: string
) {
  return await bcrypt.compare(plainPassword, hashedPassword)
}

userSchema.statics.isJWTIssuedBeforePasswordChange = async function (
  passwordChangedAt: Date,
  jwtIssuedTimestamp: number
) {
  return jwtIssuedTimestamp < passwordChangedAt.getTime() / 1000
}

export const UserModel = model<TUser, User>('User', userSchema)
