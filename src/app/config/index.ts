import dotenv from "dotenv";
dotenv.config();

export default {
  port: process.env.PORT,
  db_url: process.env.DB_URL,
  NODE_ENV: process.env.NODE_ENV,
  default_password: process.env.DEFAULT_PASSWORD,
  bcrypt_salt_round: process.env.BCRYPT_SALT_ROUNDS,
  access_token_secret: process.env.ACCESS_TOKEN_SECRET,
  access_token_exp: process.env.ACCESS_TOKEN_EXP,
};
