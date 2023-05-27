import { Client } from './client';
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('contacts')
export class Contact {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', length: 127 })
  fullName: string;

  @Column({ type: 'varchar', length: 127 })
  email: string;

  @Column({ type: 'varchar', length: 20 })
  phoneNumber: string;

  @CreateDateColumn()
  createdAt: string | Date;

  @ManyToOne(() => Client, (client) => client.contacts)
  client: any;
}
