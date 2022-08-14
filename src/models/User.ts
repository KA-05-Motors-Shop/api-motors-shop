import { Exclude } from "class-transformer";
import {
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import Address from "./Address";
import Comment from "./Comment";
import Vehicle from "./Vehicle";

@Entity("users")
class User {
  @PrimaryGeneratedColumn("uuid")
  readonly id: string;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  cpf: string;

  @Column()
  cel: string;

  @Column()
  birth_date: string;

  @Column({ length: 500 })
  description: string;

  @Column({
    default: "Comprador",
  })
  account_type: string;

  @Exclude()
  @Column()
  password: string;

  @OneToOne(() => Address, {
    eager: true,
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn()
  address: Address;

  @OneToMany(() => Vehicle, (vehicle) => vehicle.user, {
    eager: true,
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn()
  vehicles: Vehicle[];

  @OneToMany(() => Comment, (comments) => comments.user,{
    eager: true,
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
  })
  @JoinColumn()
  comments: Comment[]
}

export default User;
