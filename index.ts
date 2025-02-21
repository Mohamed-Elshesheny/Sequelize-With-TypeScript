import express from "express";
import dotenv from "dotenv";
import { Sequelize } from "sequelize-typescript";
import { User } from "./models/userModel";
import { Project } from "./models/projectModel";
import { UserProject } from "./models/UserProjectModel";

dotenv.config();

const app = express();
const port = process.env.PORT || 3010;

// ✅ Initialize Sequelize and load models dynamically
const sequelize = new Sequelize({
  database: process.env.DB_NAME,
  dialect: "postgres",
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  host: "localhost",
  logging: console.log,
  models: [User, Project,UserProject],
});

sequelize
  .sync()
  .then(() => {
    app.listen(port, () => {
      console.log(`🚀 Server running on port ${port}`);
    });
  })
  .catch((error) => {
    console.error("❌ Error syncing database:", error);
  });
