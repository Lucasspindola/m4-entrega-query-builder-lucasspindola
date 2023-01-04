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

  @Column({ type: "date" })
  date: string;

  @Column({ type: "time" })
  hour: string;

  @ManyToOne(() => Property, (properties) => properties.schedules, {
    eager: true,
  })
  property: Property;
  @ManyToOne(() => User, (users) => users.schedules, { eager: true })
  user: User;
}

export { SchedulesUsersProperties };
