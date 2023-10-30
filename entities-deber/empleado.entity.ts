import {
  Column,
  CreateDateColumn,
  Entity,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

import { UsuarioEntity } from './usuario.entity';

@Entity('empleados', { schema: 'empresa' })
export class EmpleadoEntity {
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



  @OneToOne(() => UsuarioEntity, usuario => usuario.empleado)
  usuario: UsuarioEntity;

  
  @Column('varchar', {
    name: 'nombre',
    nullable: false,
    comment: 'Nombre del empleado',
  })
  nombre: string;

  @Column('varchar', {
    name: 'cargo',
    nullable: false,
    comment: 'Cargo del empleado',
  })
  cargo: string;

}