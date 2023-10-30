import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

import { RolEntity } from './rol.entity';

@Entity({ name: 'users', schema: 'usuario' })
  export class UsersEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;
  
    @CreateDateColumn({
      name: 'created_at',
      type: 'timestamp',
      default: () => 'CURRENT_TIMESTAMP',
    })
    created_at: Date;
  
    @UpdateDateColumn({
      name: 'updated_at',
      type: 'timestamp',
      default: () => 'CURRENT_TIMESTAMP',
    })
    updated_at: Date;
  
    @DeleteDateColumn({
      name: 'deleted_at',
      type: 'timestamp',
      nullable: true,
    })
    deleted_at: Date;
  
    @OneToOne(() => RolEntity, rol => rol.users)
    rol: RolEntity;
  
    @Column('varchar', {
      name: 'name',
      nullable: false,
      comment: 'user name',
    })
    title: string;
  
    @Column('varchar', {
      name: 'username',
      nullable: false,
      comment: 'user username',
    })
    username: string;
  
    @Column('varchar', {
      name: 'lastname',
      nullable: true,
      comment: 'user lastname',
    })
    lastname: string;
  
    @Column('varchar', {
      name: 'email',
      nullable: true,
      comment: 'user email',
    })
    email: string;
  }