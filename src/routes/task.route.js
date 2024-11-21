import express from "express";
const router = express.Router();
import {
  createTask,
  deleteTask,
  getTasks,
  markTaskAsComplete,
  updateTask,
} from "../controllers/task.controller.js";

router.post("/", createTask);
router.get("/", getTasks);
router.put("/:taskId/complete", markTaskAsComplete);
router.delete("/:taskId", deleteTask);
router.put("/:taskId", updateTask);
export default router;
