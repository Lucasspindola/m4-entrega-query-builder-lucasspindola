import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Property } from "./properties.entity";

@Entity("categories")
class Category {
  @PrimaryGeneratedColumn("uuid")
  id: string;
  @Column({ unique: true })
  name: string;

  @OneToMany(() => Property, (properties) => properties.category)
  properties: Property[];
}

export { Category };
