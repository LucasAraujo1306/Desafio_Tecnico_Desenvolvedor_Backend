import express from "express";
import {
  getAllTasksController,
  getTaskByIdController,
  createTaskController,
  updateTaskController,
  deleteTaskController,
} from "../controllers/tasksController";

const router = express.Router();

// Rota para listar todas as tarefas cadastradas
router.get("/", getAllTasksController);

// Rota para obter os detalhes de uma tarefa específica
router.get("/:id", getTaskByIdController);

// Rota para cadastrar uma nova tarefa
router.post("/", createTaskController);

// Rota para atualizar uma tarefa existente
router.put("/:id", updateTaskController);

// Rota para excluir uma tarefa
router.delete("/:id", deleteTaskController);

export default router;
