import {
  Entity,
  OneToMany,
  OneToOne,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  PrimaryGeneratedColumn,
  JoinColumn,
} from "typeorm";
import { Address } from "./addresses.entity";
import { Category } from "./categories.entity";
import { SchedulesUsersProperties } from "./schedules_users_properties.entity";

@Entity("properties")
class Property {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ default: false })
  sold: boolean;

  @Column({ type: "decimal", precision: 12, scale: 2 })
  value: number;

  @Column({ type: "integer" })
  size: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @OneToOne(() => Address, (adresses) => adresses)
  @JoinColumn()
  address: Address;
  @OneToOne(() => Category, (category) => category)
  @JoinColumn()
  category: Category;
  @OneToMany(() => SchedulesUsersProperties, (schedule) => schedule.property)
  schedule: SchedulesUsersProperties;
}

export { Property };
