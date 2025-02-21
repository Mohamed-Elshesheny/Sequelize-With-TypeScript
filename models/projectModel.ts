import {
  Table,
  Column,
  Model,
  DataType,
  BelongsToMany,
} from "sequelize-typescript";
import { User } from "./userModel";
import { UserProject } from "./UserProjectModel";

@Table({
  tableName: "projects",
  timestamps: true,
})
export class Project extends Model {
  @Column({
    type: DataType.UUID,
    defaultValue: DataType.UUIDV4,
    primaryKey: true,
  })
  id!: string;

  @Column({ type: DataType.STRING, allowNull: false })
  status!: string;

  @Column({ type: DataType.STRING, allowNull: false })
  title!: string;

  @BelongsToMany(() => User, () => UserProject)
  users!: User[];
}
