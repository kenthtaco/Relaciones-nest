import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

import { UniversidadEntity } from './universidad.entity';

@Entity('estudiantes', { schema: 'educacion' })
export class EstudianteEntity {
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
  update_at: Date;

  @DeleteDateColumn({
    name: 'delete_at',
    type: 'timestamp',
    nullable: true,
  })
  delete_at: Date;

  
  @ManyToOne(() => UniversidadEntity, universidad => universidad.estudiantes)
  universidad: UniversidadEntity;

  @Column('varchar', {
    name: 'nombre',
    nullable: false,
    comment: 'Nombre del estudiante',
  })
  nombre: string;

  @Column('number', {
    name: 'edad',
    nullable: false,
    comment: 'Edad del estudiante',
  })
  edad: number;

  @Column('varchar', {
    name: 'nacionalidad',
    nullable: true,
    comment: 'Nacionalidad del estudiante',
  })
  nacionalidad: string;

}