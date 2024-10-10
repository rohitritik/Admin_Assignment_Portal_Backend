import mongoose from "mongoose";

const assignmentSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },
  task: {
    type: String,
    required: [true, "Please provide your task!"],
  },
  admin: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    enum: ['pending', 'accepted', 'rejected'],
    default: 'pending',
  },
  createdAt: {
    type: Date,
    default: Date.now,
  }
});

const Assignment = mongoose.model('Assignment', assignmentSchema);

export default Assignment;
