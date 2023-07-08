// controllers/tasksController.js
import { Request, Response } from "express";
import {
  getAllTasksServices,
  getTaskByIdServices,
  createServices,
  updateTaskServices,
  deleteTaskServices,
} from "../repositories/tasksServices";

export const getAllTasksController = async (req: Request, res: Response) => {
  try {
    const tasks = await getAllTasksServices();
    return res.json(tasks);
  } catch (error) {
    return res.status(500).json({ error: "Failed to retrieve tasks." });
  }
};

export const getTaskByIdController = async (req: Request, res: Response) => {
  const taskId = req.params.id;

  try {
    const task = await getTaskByIdServices(taskId);
    if (task) {
      return res.json(task);
    } else {
      return res.status(404).json({ error: "Task not found." });
    }
  } catch (error) {
    return res.status(500).json({ error: "Failed to retrieve task." });
  }
};

export const createTaskController = async (req: Request, res: Response) => {
  const { title, description } = req.body;

  try {
    const task = await createServices(title, description);
    return res.status(201).json(task);
  } catch (error) {
    return res.status(500).json({ error: "Failed to create task." });
  }
};

export const updateTaskController = async (req: Request, res: Response) => {
  const taskId = req.params.id;
  const { title, description, status } = req.body;

  try {
    const haveTask = await getTaskByIdServices(taskId);

    if (!haveTask) {
      return res.status(404).json({ error: "Task not found." });
    }

    const task = await updateTaskServices(taskId, title, description, status);
    return res.json(task);
  } catch (error) {
    return res.status(500).json({ error: "Failed to update task." });
  }
};

export const deleteTaskController = async (req: Request, res: Response) => {
  const taskId = req.params.id;

  try {
    const haveTask = await getTaskByIdServices(taskId);

    if (!haveTask) {
      return res.status(404).json({ error: "Task not found." });
    }

    await deleteTaskServices(taskId);

    return res.status(204).json();
  } catch (error) {
    return res.status(500).json({ error: "Failed to delete task." });
  }
};
