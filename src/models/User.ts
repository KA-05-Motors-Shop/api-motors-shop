import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

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

  @Column()
  cep: number;

  @Column()
  state: string;

  @Column()
  city: string;

  @Column()
  street: string;

  @Column()
  number: number;

  @Column()
  complement: string;

  @Column()
  account_type: string;

  @Column()
  password: string;
}

export default User;
