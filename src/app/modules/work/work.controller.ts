import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import SendResponse from "../../utils/sendResponse";
import { workServices } from "./work.service";

const createWork = catchAsync(async (req, res) => {
  const result = await workServices.createWorkIntoDB(req.body);

  SendResponse(res, {
    success: true,
    statusCode: httpStatus.CREATED,
    message: "Work Created Successfully",
    data: result,
  });
});

const updateWork = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await workServices.updateWorkInDB(id, req.body);

  SendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Work Updated Successfully",
    data: result,
  });
});

const getAllWorks = catchAsync(async (req, res) => {
  const result = await workServices.getAllWorksFromDB();

  SendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Works Retrieved Successfully",
    data: result,
  });
});

const getSingleWork = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await workServices.getWorkByIdFromDB(id);

  SendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Work Retrieved Successfully",
    data: result,
  });
});

const deleteWork = catchAsync(async (req, res) => {
  const { id } = req.params;
  await workServices.deleteWorkFromDB(id);

  SendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Work Deleted Successfully",
    data: null,
  });
});

export const WorkController = {
  createWork,
  updateWork,
  getAllWorks,
  getSingleWork,
  deleteWork,
};
