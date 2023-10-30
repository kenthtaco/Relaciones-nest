import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

import { UsersEntity } from './users.entity';

@Entity('rol',{schema: 'ventas'})

export class RolEntity {
@PrimaryGeneratedColumn('uuid')
id: string;
@CreateDateColumn({
    name: 'create_at',
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
})
create_at: Date;
@UpdateDateColumn({
    name: 'update_at',
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
})
updateAt: Date;
@DeleteDateColumn({
    name: 'update_at',
    type: 'timestamp',
    nullable: true,
})
deleteAT: Date;


@OneToOne(() => UsersEntity, users => users.rol )
users:UsersEntity[];


@Column ('varchar', { 
    name: 'name',
    nullable: false,
    comment: 'users name',
})
title: string;

@Column ('varchar', { 
    name: 'username',
    nullable: false,
    comment: 'users username',
})
username: string;

@Column ('varchar', { 
    name: 'lastname',
    nullable: true,
    comment: 'users lastname',
})
lastname: string;


@Column ('varchar', { 
    name: 'email',
    nullable: true,
    comment: 'users email',
})
email: string;




  }