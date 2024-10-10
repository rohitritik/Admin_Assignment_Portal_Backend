import { catchAsynError } from "../middlewares/catchAsyncError.js";
import ErrorHandler from "../middlewares/error.js";
import Assignment from '../models/assignmentModel.js';


// View assignments tagged to an admin
export const getAssignmentsByAdmin = catchAsynError(async (req, res, next) => {
  const { admin } = req.query;

  // Validate that admin is provided
  if (!admin) {
      return next(new ErrorHandler('Admin name is required', 400));
  }

    // Perform case-insensitive search using regular expression
    const assignments = await Assignment.find({ 
        admin: { $regex: new RegExp(`^${admin}$`, 'i') } // Case-insensitive search
    });

  if (!assignments || assignments.length === 0) {
      return next(new ErrorHandler('No assignments found for this admin', 404));
  }

  res.status(200).json({ success: true, data: assignments });
});

  

// Accept an assignment by ID
export const acceptAssignment = catchAsynError(async (req, res, next) => {
  const { id } = req.params; // Get assignment ID from URL parameters

  // Find the assignment and update its status to 'accepted'
  const assignment = await Assignment.findByIdAndUpdate(
      id,
      { status: 'accepted' }, // Update the status
      { new: true } // Return the updated document
  );

  // Check if assignment exists
  if (!assignment) {
      return next(new ErrorHandler('Assignment not found', 404));
  }

  // Return the updated assignment
  res.status(200).json({
      success: true,
      message: "Assignment accepted successfully!",
      data: assignment // Send the updated assignment data
  });
});



// Reject an assignment by ID
export const rejectAssignment = catchAsynError(async (req, res, next) => {
  const { id } = req.params; // Get assignment ID from URL parameters

  // Find the assignment and update its status to 'rejected'
  const assignment = await Assignment.findByIdAndUpdate(
      id,
      { status: 'rejected' }, // Update the status
      { new: true } // Return the updated document
  );

  // Check if assignment exists
  if (!assignment) {
      return next(new ErrorHandler('Assignment not found', 404));
  }

  // Return the updated assignment
  res.status(200).json({
      success: true,
      message: "Assignment rejected successfully!",
      data: assignment // Send the updated assignment data
  });
});




  