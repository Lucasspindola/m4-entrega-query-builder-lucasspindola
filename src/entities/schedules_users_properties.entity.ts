import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  ManyToOne,
} from "typeorm";
import { Property } from "./properties.entity";
import { User } from "./user.entity";

@Entity("schedules_users_properties")
class SchedulesUsersProperties {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @CreateDateColumn({ type: "date" })
  date: Date;

  @Column({ type: "time" })
  hour: Date;

  @ManyToOne(() => Property, { eager: true })
  property: Property;
  @ManyToOne(() => User, { eager: true })
  user: User;
}

export { SchedulesUsersProperties };
