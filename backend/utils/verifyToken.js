/* eslint-disable no-unused-vars */
import jwt from "jsonwebtoken";
import { createError } from "./error.js";

export const verifyToken = (req, res, next) => {
  let token;
  try {
    token = req.headers.cookie.split("=")[1];
    next();
  } catch (err) {
    return next(createError(401, "You are not authenticated."));
  }
  // try {
  //   jwt.verify(token, process.env.JWT);
  //   next();
  // } catch {
  //   return next(createError(403, "Token is not valid!"));
  // }
};
