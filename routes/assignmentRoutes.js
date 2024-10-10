import express from 'express';
import { getAssignmentsByAdmin, acceptAssignment, rejectAssignment } from '../controllers/assignmentController.js';

const router = express.Router();

// Route to get all assignments tagged to an admin
router.get('/assignments', getAssignmentsByAdmin);

// Route to accept an assignment
router.post('/assignments/:id/accept', acceptAssignment);

// Route to reject an assignment
router.post('/assignments/:id/reject', rejectAssignment);

export default router;
