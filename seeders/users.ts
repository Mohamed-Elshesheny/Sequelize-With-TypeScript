import { v4 as uuidv4 } from "uuid";

export const user = [
  // ✅ Exporting an array
  {
    id: uuidv4(),
    name: "Mohamed",
    email: "mohamed@io.com",
    password: "mohamed@2002",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: uuidv4(),
    name: "Loay",
    email: "loay@io.com",
    password: "mohamed@2002",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];
