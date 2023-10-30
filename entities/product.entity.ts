import {
  BeforeInsert,
  BeforeUpdate,
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

import { CategoryEntity } from './category.entity';

@Entity('products',{schema: 'ventas'})

export class ProductEntity {
@PrimaryGeneratedColumn('uuid')
id: string;
@CreateDateColumn({
    name: 'create_at',
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
})
crate_at: Date;
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



@ManyToOne (() => CategoryEntity, category => category.products)
category:CategoryEntity;



@Column ('varchar', { 
    name: 'title',
    nullable: false,
    comment: 'product name',
})
title: string;

@Column ('number', { 
    name: 'price',
    nullable: false,
    comment: 'product price',
})
price: number;

@Column ('varchar', { 
    name: 'description',
    nullable: true,
    comment: 'product description',
})
description: string;
    password: any;

@BeforeInsert()
@BeforeUpdate()
async setTitle(){
    if(!this.title){
     return;
    }
    this.title = this.title.toUpperCase();
}
 


/*@BeforeInsert()
@BeforeUpdate()
async setEmail(){
    if(!this.email){
     return;
    }
    this.email = this.email.toLowerCase().trim(); 
}*/

/*@BeforeInsert()
@BeforeUpdate()
async setPassword(){
    if(!this.password){
     return;
    }
    this.password = await Bcryps.hash(this.password, 15);
}*/


/*@BeforeInsert()
@BeforeUpdate()
async setDescription(){
    if(!this.description){
        return;
    }
    this.description = this.capitalizeFirstLetter(this.description);
}

capitalizeFirstLetter(str){
    return str.charAt(0).toUpperCase() + str.slice(1);
}*/
}
