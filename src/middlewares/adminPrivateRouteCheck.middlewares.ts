import { Request, Response, NextFunction, request } from "express";
import "dotenv/config";

const adminPrivateRouteCheckMiddlewar = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const isAdm = req.user.isAdm;

  if (!isAdm) {
    return res.status(403).json({ message: "Not authorization" });
  }
  next();
};

export default adminPrivateRouteCheckMiddlewar;
