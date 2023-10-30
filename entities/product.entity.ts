import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

import { CategoryEntity } from './category.entity';

@Entity({ name: 'products', schema: 'ventas' })
  export class ProductEntity {
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
  
    @ManyToOne(() => CategoryEntity, category => category.products)
    category: CategoryEntity;
  
    @Column('varchar', {
      name: 'title',
      nullable: false,
      comment: 'product name',
    })
    title: string;
  
    @Column('decimal', {
      name: 'price',
      nullable: false,
      comment: 'product price',
      precision: 10,
      scale: 2,
    })
    price: number;
  
    @Column('varchar', {
      name: 'description',
      nullable: true,
      comment: 'product description',
    })
    description: string;
  

/* @BeforeInsert()
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
