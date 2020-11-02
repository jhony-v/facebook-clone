import { KEY_TOKEN } from "@root/config/environments";
import jwt from "jsonwebtoken";

export default class TokenAuthentication {
  static verify = async (token: string) => {
    try {
      const request = jwt.verify(token, KEY_TOKEN);
      return request;
    } catch (error) {
      return null;
    }
  }

  static sign = (payload: object) => jwt.sign(payload, KEY_TOKEN, {
      expiresIn: "7d",
  });

  static decode = (token : string) => jwt.decode(token);
}
