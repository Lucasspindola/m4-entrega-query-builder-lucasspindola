import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity("categories")
class Category {
  @PrimaryGeneratedColumn("uuid")
  id: string;
  @Column({ unique: true })
  name: string;
}

export { Category };
