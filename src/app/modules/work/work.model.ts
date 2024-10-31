import mongoose, { Schema } from "mongoose";
import { IWork } from "./work.interface";

const WorkSchema = new Schema<IWork>({
   image: {
     type: String,
     required: true,
   },
   title: {
     type: String,
     required: true,
   },
   tags: {
     type: [String],
     required: true,
   },
 });
 
 const WorkModel = mongoose.model<IWork>('Work', WorkSchema);

 export default WorkModel;