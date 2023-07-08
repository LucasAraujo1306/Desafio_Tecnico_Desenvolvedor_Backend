import dotenv from "dotenv";
import express from "express";
import swaggeerUi from "swagger-ui-express";
import cors from "cors";
import tasksRouter from "./routes/tasksRoutes";
import prisma from "./database/prisma";
import swaggerDocs from "../swagger.json";

dotenv.config();

const app = express();

app.use(express.json());

app.use(cors());

app.use("/api-docs", swaggeerUi.serve, swaggeerUi.setup(swaggerDocs));

app.use("/tasks", tasksRouter);

async function main() {
  try {
    await prisma.$connect();
    console.log("Conexão estabelecida com o banco de dados.");
  } catch (error) {
    console.error("Erro ao conectar ao banco de dados:", error);
    process.exit(1);
  }
}

main();

export default app;
