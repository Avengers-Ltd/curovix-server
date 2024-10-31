import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import SendResponse from "../../utils/sendResponse";
import { serviceServices } from "./service.service";

const createService = catchAsync(async (req, res) => {
  const result = await serviceServices.createServiceInDB(req.body);

  SendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Service Created Successfully",
    data: result,
  });
});

const updateService = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await serviceServices.updateServiceInDB(id, req.body);

  SendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Service Updated Successfully",
    data: result,
  });
});

const getAllServices = catchAsync(async (req, res) => {
  const result = await serviceServices.getAllServicesFromDB();

  SendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Services Retrieved Successfully",
    data: result,
  });
});

const getSingleService = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await serviceServices.getServiceByIdFromDB(id);

  SendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Service Retrieved Successfully",
    data: result,
  });
});

const deleteService = catchAsync(async (req, res) => {
  const id = req.params.id;
  await serviceServices.deleteServiceFromDB(id);

  SendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Service Deleted Successfully",
    data: null,
  });
});

export const ServiceController = {
  createService,
  updateService,
  getAllServices,
  getSingleService,
  deleteService,
};
