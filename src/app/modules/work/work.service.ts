import AppError from "../../errors/AppError";
import { IWork } from "./work.interface";
import WorkModel from "./work.model";

const createWorkIntoDB = async (body: IWork) => {
  const result = await WorkModel.create(body);
  return result;
};

const updateWorkInDB = async (id: string, body: Partial<IWork>) => {
  const result = await WorkModel.findByIdAndUpdate(id, body, { new: true });
  if (!result) {
    throw new AppError(httpStatus.NOT_FOUND, "Work not found");
  }
  return result;
};

const getAllWorksFromDB = async () => {
  const result = await WorkModel.find().sort({ createdAt: -1 });
  return result;
};

const getWorkByIdFromDB = async (id: string) => {
  const result = await WorkModel.findById(id);
  if (!result) {
    throw new AppError(httpStatus.NOT_FOUND, "Work not found");
  }
  return result;
};

const deleteWorkFromDB = async (id: string) => {
  const result = await WorkModel.findByIdAndDelete(id);
  if (!result) {
    throw new AppError(httpStatus.NOT_FOUND, "Work not found");
  }
  return result;
};

export const workServices = {
  createWorkIntoDB,
  updateWorkInDB,
  getAllWorksFromDB,
  getWorkByIdFromDB,
  deleteWorkFromDB,
};
