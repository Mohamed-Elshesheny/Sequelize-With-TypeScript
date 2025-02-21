import express from "express";
import dotenv from "dotenv";
import { Sequelize } from "sequelize-typescript";
import { User } from "./models/userModel";
import { Project } from "./models/projectModel";
import { UserProject } from "./models/UserProjectModel";
import { user } from "./seeders/users"; // ✅ Import user array correctly

dotenv.config();

const app = express();
const port = process.env.PORT || 3020;

// ✅ Initialize Sequelize and load models dynamically
const sequelize = new Sequelize({
  database: process.env.DB_NAME,
  dialect: "postgres",
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  host: "localhost",
  logging: console.log,
  models: [User, Project, UserProject],
});

const createUser = async () => {
  try {
    await User.bulkCreate(user); // ✅ Now user is an array
    console.log("✅ Users seeded successfully!");
  } catch (error) {
    console.error("❌ Error seeding users:", error);
  }
};

// ✅ Ensure database syncs before inserting users
sequelize
  .sync()
  .then(async () => {
    console.log("✅ Database synced!");
    
    // ✅ Now we create users AFTER syncing the DB
    await createUser();

    app.listen(port, () => {
      console.log(`🚀 Server running on port ${port}`);
    });
  })
  .catch((error) => {
    console.error("❌ Error syncing database:", error);
  });