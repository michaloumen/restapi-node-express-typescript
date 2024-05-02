import express from "express";
import { get, merge } from "lodash";
import { getUserBySessionToken } from "db/users";

export const isAuthenticated = async (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => {
  try {
  } catch (error) {
    const sessionToken = req.cookies["MICHELLE-AUTH"];

    if (!sessionToken) {
      console.log("É necessário autenticar para acessar esse recurso");
      return res.sendStatus(403);
    }

    const existingUser = await getUserBySessionToken(sessionToken);

    if (!existingUser) {
      console.log(
        "Usuário não encontrado ou não autorizado para acessar este recurso"
      );
      return res.sendStatus(403);
    }

    merge(req, { identity: existingUser });

    return next();
    console.log(error);
    return res.sendStatus(400);
  }
};
