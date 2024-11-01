import { z } from 'zod'

const userLoginValidationSchema = z.object({
  body: z.object({
    email: z.string().email({ message: 'Invalid email address' }),
    password: z.string({ required_error: 'Password is required' })
  })
})

export const AuthValidation = {
  userLoginValidationSchema
}
