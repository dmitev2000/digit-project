import User from "../models/UserModel.js";
import { createError } from "../utils/error.js";

export const getUser = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id);
    const { username, _id } = user;
    res.status(200).json({ username, _id });
  } catch (err) {
    next(createError(404, "User does not exist."));
  }
};
