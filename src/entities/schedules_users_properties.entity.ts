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

  @CreateDateColumn({ type: "time" })
  date: Date;

  @Column({ type: "time" })
  hour: Date;

  @ManyToOne(() => Property, (properties) => properties.schedule)
  property: Property;
  @ManyToOne(() => User, (user) => user.schedules)
  user: User;
}

export { SchedulesUsersProperties };
