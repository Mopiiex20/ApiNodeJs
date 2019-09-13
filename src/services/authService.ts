import { authModel } from "@apiV1/models/authModel";

export interface user {
  _id: number;
  age: number;
  email: string;
  password: string;
  firstName: string;
  roleId: number
}

export class AuthService {

  public async getUserByEmail(email: string) {
    var user = await authModel.findOne({ email: email });
    if (user) return user;
  }

  public async register(user: user) {
    var regUser = await authModel.findOne({ email: user.email });
    if (!regUser) {
      await authModel.create(user);
    } else return regUser

  }
}
