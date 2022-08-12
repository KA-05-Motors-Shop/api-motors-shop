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
  cpf: number;

  @Column()
  cel: number;

  @Column()
  birth_date: number;

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

  @OneToMany((type) => Vehicle, (vehicle) => vehicle.user, {
    eager: true,
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn()
  vehicles: Vehicle[];
}

export default User;
