import {
  Column,
  CreateDateColumn,
  Entity,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

import { EmpleadoEntity } from './empleado.entity';

@Entity('usuarios', { schema: 'empresa' })
export class UsuarioEntity {
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



  @OneToOne(() => EmpleadoEntity, empleado => empleado.usuario)
  empleado: EmpleadoEntity;

  @Column('varchar', {
    name: 'nombre',
    nullable: false,
    comment: 'Nombre del usuario',
  })
  nombre: string;

  @Column('varchar', {
    name: 'contraseña',
    nullable: false,
    comment: 'contraseña del usuario',
  })
  email: string;

}