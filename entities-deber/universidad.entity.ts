import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

import { EstudianteEntity } from './estudiante.entity';

@Entity('universidades', { schema: 'educacion' })
export class UniversidadEntity {
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


  @OneToMany(() => EstudianteEntity, estudiante => estudiante.universidad)
  estudiantes: EstudianteEntity[];


   @Column('varchar', {
    name: 'nombre',
    nullable: false,
    comment: 'Nombre de la universidad',
  })
  nombre: string;

  @Column('varchar', {
    name: 'ubicacion',
    nullable: false,
    comment: 'Ubicación de la universidad',
  })
  ubicacion: string;

}