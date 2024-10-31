import { IService } from "./service.interface";
import { ServiceModel } from "./service.model";

const createServiceInDB = async (data: IService) => {
  return await ServiceModel.create(data);
};

const updateServiceInDB = async (id: string, data: Partial<IService>) => {
  return await ServiceModel.findByIdAndUpdate(id, data, { new: true });
};

const getAllServicesFromDB = async () => {
  return await ServiceModel.find();
};

const getServiceByIdFromDB = async (id: string) => {
  return await ServiceModel.findById(id);
};

const deleteServiceFromDB = async (id: string) => {
  return await ServiceModel.findByIdAndDelete(id);
};

export const serviceServices = {
  createServiceInDB,
  updateServiceInDB,
  getAllServicesFromDB,
  getServiceByIdFromDB,
  deleteServiceFromDB,
};
