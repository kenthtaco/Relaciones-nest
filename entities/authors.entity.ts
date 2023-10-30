import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  ManyToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

import { BooksEntity } from './books.entity';

@Entity('authors',{schema: 'autores'})

export class AuthorsEntity {
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


@ManyToMany(() => AuthorsEntity, books => books.authors )
authors:BooksEntity[];


@Column ('varchar', { 
    name: 'name',
    nullable: false,
    comment: 'users name',
})
name: string;

@Column ('varchar', { 
    name: 'age',
    nullable: false,
    comment: 'Age authors',
})
Age: number;

@Column ('varchar', { 
    name: 'phone',
    nullable: true,
    comment: 'Phone authors',
})
phone: number;


  }