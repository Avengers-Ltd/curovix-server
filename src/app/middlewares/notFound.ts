import httpStatus from 'http-status';
import { Request, Response } from "express";

const notFound = (req: Request, res: Response) => {
  return res.status(httpStatus.NOT_FOUND).json({
    success: false,
    statusCode: 404,
    message: "Not Found",
  });
};

export default notFound;
