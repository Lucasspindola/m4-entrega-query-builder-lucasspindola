import { Request, Response } from "express";
import { IPropertyRequest } from "../interfaces/properties";
import createNewPropertiesService from "../services/PropertiesServices/createNewProperties.services";
import listAllPropertiesService from "../services/PropertiesServices/listAllProperties.services";
const createNewPropertiesController = async (req: Request, res: Response) => {
  const dataProperties: IPropertyRequest = req.body;
  const dataResponse = await createNewPropertiesService(dataProperties);
  return res.status(201).json(dataResponse);
};

const listAllPropertiesController = async (req: Request, res: Response) => {
  const propertiesAll = await listAllPropertiesService();
  res.json(propertiesAll);
};
export { createNewPropertiesController, listAllPropertiesController };
