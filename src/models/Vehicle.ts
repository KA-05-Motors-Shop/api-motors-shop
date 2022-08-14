import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import Comment from "./Comment";
import User from "./User";

@Entity("vehicles")
class Vehicle {
  @PrimaryGeneratedColumn("uuid")
  readonly id: string;

  @ManyToOne((type) => User, (user) => user.vehicles, {
    nullable: false,
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn()
  user: User;

  @OneToMany(() => Comment, (comment) => comment.vehicle ,{
    eager: true,
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
  })
  @JoinColumn()
  comments: Comment[]

  @Column()
  title: string;

  @Column()
  type_of_ad: string;

  @Column()
  year: number;

  @Column()
  km: number;

  @Column({ type: "decimal", precision: 20, scale: 2 })
  price: number;

  @Column({ length: 500 })
  description: string;

  @Column()
  type_of_vehicle: string;

  @Column()
  cover_image: string;

  @Column()
  gallery_image: string;

  @Column({ nullable: true })
  gallery_image2: string;

  @Column({ nullable: true })
  gallery_image3: string;

  @Column({ nullable: true })
  gallery_image4: string;

  @Column({ nullable: true })
  gallery_image5: string;

  @Column({ nullable: true })
  gallery_image6: string;

  @Column({ default: true })
  published: boolean;
}

export default Vehicle;
