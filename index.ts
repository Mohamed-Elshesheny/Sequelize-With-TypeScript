import express from "express";
import dotenv from "dotenv";
import { Sequelize } from "sequelize-typescript";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// ✅ Initialize Sequelize and load models dynamically
const sequelize = new Sequelize({
  database: process.env.DB_NAME,
  dialect: "postgres",
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  host: "localhost",
  models: [],
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
