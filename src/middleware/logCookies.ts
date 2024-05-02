import { Request, Response, NextFunction } from "express";

export default function logCookies(
  req: Request,
  res: Response,
  next: NextFunction
) {
  res.on("finish", () => {
    const cookies = res.getHeaders()["set-cookie"];
    if (cookies) {
      console.log("Cookies definidos:", cookies);
    }
  });
  next();
}
