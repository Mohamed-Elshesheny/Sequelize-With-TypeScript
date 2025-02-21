import { Table, Column, Model, ForeignKey } from "sequelize-typescript";
import { User } from "./userModel";
import { Project } from "./projectModel";

@Table({ tableName: "user_projects", timestamps: false }) // Junction table
export class UserProject extends Model {
  @ForeignKey(() => User)
  @Column
  userId!: string;

  @ForeignKey(() => Project)
  @Column
  projectId!: string;
}
