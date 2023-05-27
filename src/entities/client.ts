import { Contact } from './contact';
import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('clients')
export class Client {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', length: 127 })
  fullName: string;

  @Column({ type: 'varchar', length: 127, unique: true })
  email: string;

  @Column({ type: 'varchar', length: 127 })
  password: string;

  @Column({ type: 'varchar', length: 20, unique: true })
  phoneNumber: string;

  @CreateDateColumn()
  createdAt: string | Date;

  @OneToMany(() => Contact, (contact) => contact.client)
  contacts: any;
}
