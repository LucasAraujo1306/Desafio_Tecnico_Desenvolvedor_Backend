import prisma from "../database/prisma";

export async function getAllTasksServices() {
  const tasks = await prisma.tasks.findMany();
  return tasks;
}

export async function getTaskByIdServices(taskId: string) {
  const task = await prisma.tasks.findUnique({ where: { id: taskId } });
  return task;
}

export async function createServices(title: string, description: string) {
  const task = await prisma.tasks.create({ data: { title, description } });
  return task;
}

export async function updateTaskServices(
  taskId: string,
  title: string,
  description: string,
  status: boolean
) {
  const task = await prisma.tasks.update({
    where: { id: taskId },
    data: { title, description, status },
  });
  return task;
}

export async function deleteTaskServices(taskId: string) {
  await prisma.tasks.delete({ where: { id: taskId } });
}
