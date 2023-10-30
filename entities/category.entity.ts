import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

import { ProductEntity } from './product.entity';

@Entity({ name: 'categories', schema: 'ventas' })
  export class CategoryEntity {
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
  
    @OneToMany(() => ProductEntity, product => product.category)
    products: ProductEntity[];
  
    @Column('varchar', {
      name: 'title',
      nullable: false,
      comment: 'category name',
    })
    title: string;
  
    @Column('decimal', {
      name: 'price',
      nullable: false,
      comment: 'category price',
      
    })
    price: number;
  
    @Column('varchar', {
      name: 'description',
      nullable: true,
      comment: 'category description',
    })
    description: string;
  }

 
