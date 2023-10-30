import {
  Column,
  CreateDateColumn,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

import { JugadorEntity } from './jugador.entity';

@Entity({ schema: 'empresa', name: 'deportes' })
  export class DeporteEntity {
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
  
    @ManyToMany(() => JugadorEntity)
    @JoinTable({
      name: 'jugador_deporte',
      joinColumns: [{ name: 'deporte_id', referencedColumnName: 'id' }],
      inverseJoinColumns: [{ name: 'jugador_id', referencedColumnName: 'id' }],
    })
    jugadores: JugadorEntity[];
  
    @Column('varchar', {
      name: 'nombre',
      nullable: false,
      comment: 'Nombre del deporte',
    })
    nombre: string;
  }