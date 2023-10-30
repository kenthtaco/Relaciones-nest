import {
  Column,
  CreateDateColumn,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

import { DeporteEntity } from './deporte.entity';

@Entity({ schema: 'empresa', name: 'jugadores' })
  export class JugadorEntity {
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
  
    @ManyToMany(() => DeporteEntity)
    @JoinTable({
      name: 'jugador_deporte',
      joinColumns: [{ name: 'jugador_id', referencedColumnName: 'id' }],
      inverseJoinColumns: [{ name: 'deporte_id', referencedColumnName: 'id' }],
    })
    deportes: DeporteEntity[];
  
    @Column('varchar', {
      name: 'nombre',
      nullable: false,
      comment: 'Nombre del jugador',
    })
    nombre: string;
  
    @Column('varchar', {
      name: 'posicion',
      nullable: false,
      comment: 'Posición del jugador',
    })
    posicion: string;
  }