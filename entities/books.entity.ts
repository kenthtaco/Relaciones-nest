import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  ManyToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

import { AuthorsEntity } from './authors.entity';

@Entity({ name: 'books', schema: 'libros' })
  export class BooksEntity {
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
  
    @ManyToMany(() => AuthorsEntity, authors => authors.books)
    authors: AuthorsEntity[];
  
    @Column('varchar', {
      name: 'name',
      nullable: false,
      comment: 'author name',
    })
    name: string;
  
    @Column('integer', {
      name: 'age',
      nullable: false,
      comment: 'author age',
    })
    age: number;
  
    @Column('varchar', {
      name: 'phone',
      nullable: true,
      comment: 'author phone',
    })
    phone: string;
  }

