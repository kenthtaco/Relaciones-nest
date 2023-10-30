"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.EmpleadoEntity = void 0;
var typeorm_1 = require("typeorm");
var usuario_entity_1 = require("./usuario.entity");
var EmpleadoEntity = /** @class */ (function () {
    function EmpleadoEntity() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn('uuid')
    ], EmpleadoEntity.prototype, "id");
    __decorate([
        typeorm_1.CreateDateColumn({
            name: 'create_at',
            type: 'timestamp',
            "default": function () { return 'CURRENT_TIMESTAMP'; }
        })
    ], EmpleadoEntity.prototype, "create_at");
    __decorate([
        typeorm_1.UpdateDateColumn({
            name: 'update_at',
            type: 'timestamp',
            "default": function () { return 'CURRENT_TIMESTAMP'; }
        })
    ], EmpleadoEntity.prototype, "update_at");
    __decorate([
        typeorm_1.OneToOne(function () { return usuario_entity_1.UsuarioEntity; }, function (usuario) { return usuario.empleado; })
    ], EmpleadoEntity.prototype, "usuario");
    __decorate([
        typeorm_1.Column('varchar', {
            name: 'nombre',
            nullable: false,
            comment: 'Nombre del empleado'
        })
    ], EmpleadoEntity.prototype, "nombre");
    __decorate([
        typeorm_1.Column('varchar', {
            name: 'cargo',
            nullable: false,
            comment: 'Cargo del empleado'
        })
    ], EmpleadoEntity.prototype, "cargo");
    EmpleadoEntity = __decorate([
        typeorm_1.Entity('empleados', { schema: 'empresa' })
    ], EmpleadoEntity);
    return EmpleadoEntity;
}());
exports.EmpleadoEntity = EmpleadoEntity;
