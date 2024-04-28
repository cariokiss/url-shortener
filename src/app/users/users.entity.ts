import {
    BeforeInsert,
    Column,
    CreateDateColumn,
    DeleteDateColumn,
    Entity,
    OneToMany,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
  } from 'typeorm';
  import { hashSync } from 'bcrypt';
import { SitesEntity } from '../sites/sites.entity';
  
  @Entity({ name: 'users' })
  export class UsersEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;
  
    @Column({ name: 'first_name' })
    firstName: string;
  
    @Column({ name: 'last_name' })
    lastName: string;
  
    @Column()
    email: string;
  
    @Column()
    password: string;

    @OneToMany(() => SitesEntity, site => site.user)
    sites: SitesEntity[];
  
    @CreateDateColumn({ name: 'created_at' })
    createdAt: string;
  
    @UpdateDateColumn({ name: 'updated_at' })
    updatedAt: string;
  
    @DeleteDateColumn({ name: 'deleted_at' })
    deletedAt: string;
  
    @BeforeInsert()
    hashPassword() {
      this.password = hashSync(this.password, 10);
    }
  }
  