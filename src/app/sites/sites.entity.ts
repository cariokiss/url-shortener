import {
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  Column,
} from 'typeorm';
import { UsersEntity } from '../users/users.entity';

@Entity({ name: 'sites' })
export class SitesEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'original_url' })
  originalUrl: string;

  @Column({ name: 'shortened_url' })
  shortenedUrl: string;

  @ManyToOne(() => UsersEntity, user => user.sites)
  user: UsersEntity;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;

  @DeleteDateColumn({ name: 'deleted_at' })
  deletedAt: Date;
}
