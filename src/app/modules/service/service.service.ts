import AppError from "../../errors/AppError";
import { IService } from "./service.interface";
import { ServiceModel } from "./service.model";

const createServiceInDB = async (data: IService) => {
  const result = await ServiceModel.create(data);
  return result;
};

const updateServiceInDB = async (id: string, data: Partial<IService>) => {
  const result = await ServiceModel.findByIdAndUpdate(id, data, { new: true });
  if (!result) {
    throw new AppError(httpStatus.NOT_FOUND, "Service not found");
  }
  return result;
};

const getAllServicesFromDB = async () => {
  const result = await ServiceModel.find().sort({ createdAt: -1 });
  return result;
};

const getServiceByIdFromDB = async (id: string) => {
  const result = await ServiceModel.findById(id);
  if (!result) {
    throw new AppError(httpStatus.NOT_FOUND, "Service not found");
  }
  return result;
};

const deleteServiceFromDB = async (id: string) => {
  const result = await ServiceModel.findByIdAndDelete(id);
  if (!result) {
    throw new AppError(httpStatus.NOT_FOUND, "Service not found");
  }
  return result;
};

export const serviceServices = {
  createServiceInDB,
  updateServiceInDB,
  getAllServicesFromDB,
  getServiceByIdFromDB,
  deleteServiceFromDB,
};
