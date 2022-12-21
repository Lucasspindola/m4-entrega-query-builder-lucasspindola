import { Request, Response } from "express";
import { AppError } from "../errors/AppError";
import { IUpdateUserRequest, IUserRequest } from "../interfaces/users";
import createNewUserService from "../services/UserServices/createNewUser.services";
import deleteUserService from "../services/UserServices/deleteUser.services";
import listAllUsersService from "../services/UserServices/listAllUsers.services";
import updateDataUserService from "../services/UserServices/updateDataUser.services";

const createNewUserController = async (req: Request, res: Response) => {
  const dataUser: IUserRequest = req.body;
  const registerUser = await createNewUserService(dataUser);
  return res.status(201).json(registerUser);
};

const listAllUsersController = async (req: Request, res: Response) => {
  const users = await listAllUsersService();
  res.json(users);
};

const updateDataUserController = async (req: Request, res: Response) => {
  try {
    const dataUserUpdate: IUpdateUserRequest = req.body;

    const idUser = req.params.id;
    const userUpdate = await updateDataUserService(dataUserUpdate, idUser);
    return res.json(userUpdate);
  } catch (error) {
    if (error instanceof Error) {
      throw new AppError(401, error.message);
    }
  }
};

const deleteUserController = async (req: Request, res: Response) => {
  const idRemove = req.params.id;
  const userDelete = await deleteUserService(idRemove);

  return res.status(204).json(userDelete);
};

export {
  createNewUserController,
  listAllUsersController,
  updateDataUserController,
  deleteUserController,
};
