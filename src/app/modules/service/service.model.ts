import mongoose, { Schema } from "mongoose";
import { IService } from "./service.interface";

const ServiceSchema = new Schema<IService>({
  title: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

export const ServiceModel = mongoose.model<IService>("Service", ServiceSchema);
