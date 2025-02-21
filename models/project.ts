import {
  Table,
  Column,
  Model,
  DataType,
  AllowNull,
} from "sequelize-typescript";

@Table({
  tableName: "project",
  timestamps: true,
})
export class Project extends Model {
  @Column({
    type: DataType.UUID,
    defaultValue: DataType.UUIDV4,
    primaryKey: true,
  })
  id!: string;
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  status!: string;
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  title!: string;
}
