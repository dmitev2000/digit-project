import User from "../models/UserModel.js";
import { createError } from "../utils/error.js";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export const register = async (req, res, next) => {
    try {
      if (!req.body.password) {
        return next(createError(400, "Password required."));
      } else if (req.body.password.length < 8) {
        return next(
          createError(400, "Password must be at least 8 characters long.")
        );
      }
  
      const salt = bcrypt.genSaltSync(10);
      const hash = bcrypt.hashSync(req.body.password, salt);
  
      const newUser = new User({
        username: req.body.username,
        password: hash,
      });
      await newUser.save();
      res.status(201).json("User has been created.");
    } catch (err) {
      if (err.toString().includes("duplicate key error")) {
        next(createError(400, "User already exist."));
      } else next(err);
    }
  };

  export const login = async (req, res, next) => {
    try {
      const user = await User.findOne({ username: req.body.username });
      if (!user) {
        return next(createError(404, "User not found."));
      }
      const correctPassword = await bcrypt.compare(
        req.body.password,
        user.password
      );
      if (!correctPassword) {
        return next(createError(400, "Wrong password."));
      }
  
      const token = jwt.sign({ id: user._id }, process.env.JWT);
  
      const { password, ...otherProps } = user._doc;
      res
        .cookie("access_token", token, {
          httpOnly: true,
          maxAge: 3600,
          sameSite: "lax",
          path: "/",
        })
        .status(200)
        .json({ ...otherProps });
    } catch (err) {
      next(err);
    }
  };