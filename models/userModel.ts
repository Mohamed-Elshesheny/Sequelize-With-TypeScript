import {
  Table,
  Column,
  Model,
  DataType,
  BelongsToMany,
} from "sequelize-typescript";
import { Project } from "./projectModel";
import { UserProject } from "./UserProjectModel";

@Table({
  tableName: "users",
  timestamps: true,
})
export class User extends Model {
  @Column({
    type: DataType.UUID,
    defaultValue: DataType.UUIDV4,
    primaryKey: true,
  })
  id!: string;

  @Column({ type: DataType.STRING, allowNull: false })
  name!: string;

  @Column({ type: DataType.STRING, allowNull: false, unique: true })
  email!: string;

  @Column({ type: DataType.STRING, allowNull: false })
  password!: string;

  // ✅ Many-to-Many Association
  @BelongsToMany(() => Project, () => UserProject)
  projects!: Project[];
  // @BelongsToMany(() => Project, { through: "user_projects" })
  // projects!: Project[];
}
