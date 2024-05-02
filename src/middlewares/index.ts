import express from "express";
import { get, merge } from "lodash";
import { getUserBySessionToken } from "../db/users";

export const isOwner = async (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => {
  try {
    const { id } = req.params;
    const currentUserId = get(req, "identity._id") as string;

    if (!currentUserId) {
      console.log("Id do usuário atual não está definido");
      return res.sendStatus(403);
    }

    if (currentUserId.toString() !== id) {
      console.log(
        "O ID do usuário atual não corresponde ao ID fornecido nos parâmetros da requisição"
      );
      return res.sendStatus(403);
    }

    next();
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
};

export const isAuthenticated = async (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => {
  try {
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
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
};
