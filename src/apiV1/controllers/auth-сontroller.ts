import * as bcrypt from "bcrypt";
import { Request, Response } from "express";
import * as jwt from "jwt-then";
import config from "@config/config";
import { AuthService, user } from "@services/auth-service";

export default class UserController {
  public authenticate = async (req: Request, res: Response): Promise<any> => {
    const { email, password } = req.body;
    try {
      const user : any = await new AuthService().getUserByEmail(email);

      if (!user) {
        return res.status(404).send({
          success: false,
          message: "User not found",
          isLoggedIn: false
        });
      }

      const matchPasswords = await bcrypt.compare(password, user.password);
      if (!matchPasswords) {
        return res.status(401).send({
          success: false,
          message: "Not authorized",
          isLoggedIn: false
        });
      }

      const isAdmin: boolean = (user.roleId === 0 ? true : false);
      
      const token = await jwt.sign(
        {
          email: user.email,
          firstName: user.firstName,
          age: user.age,
          avatar: user.avatar,
          isAdmin: isAdmin,
          _id : user._id
        },
        config.JWT_ENCRYPTION,
        { expiresIn: config.JWT_EXPIRATION }
      );

      res.status(200).send({
        success: true,
        message: "Token generated Successfully",
        token: token,
        isLoggedIn: true
      });
    } catch (err) {
      res.status(500).send({
        success: false,
        message: err.toString(),
        isLoggedIn: false
      });
    }
  };

  public register = async (req: Request, res: Response): Promise<any> => {

    const user: user = {
      _id: null,
      email: req.body.email,
      password: await bcrypt.hash(req.body.password, config.SALT_ROUNDS),
      firstName: req.body.firstName,
      age: req.body.age,
      roleId: 1
    };

    try {
      const matchUser: any = await new AuthService().register(user);
      if (!matchUser) {
        res.status(200).send({
          success: false,
          message: "User Successfully created",
          data: user
        });
      } else return res.status(401).send({
        success: false,
        message: `User with E-mail:${matchUser.email} alredy exist!`
      });

    } catch (err) {
      res.status(500).send({
        success: false,
        message: err
      });
    }
  };
}