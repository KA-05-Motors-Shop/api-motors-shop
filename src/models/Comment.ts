import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import User from "./User";
import Vehicle from "./Vehicle";

@Entity("comments")
class Comment {
  @PrimaryGeneratedColumn("uuid")
  readonly id: string;

  @Column({ nullable: false, length: 256 })
  message: string;

  @CreateDateColumn()
  created_at: Date;

  @ManyToOne(() => User, (user) => user.comments, {
    nullable: false,
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn()
  user: User;

  @ManyToOne(() => Vehicle, (vehicle) => vehicle.comments, {
    nullable: false,
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
  })
  @JoinColumn()
  vehicle: Vehicle
}

export default Comment;
