"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.UsuarioEntity = void 0;
var typeorm_1 = require("typeorm");
var empleado_entity_1 = require("./empleado.entity");
var UsuarioEntity = /** @class */ (function () {
    function UsuarioEntity() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn('uuid')
    ], UsuarioEntity.prototype, "id");
    __decorate([
        typeorm_1.CreateDateColumn({
            name: 'create_at',
            type: 'timestamp',
            "default": function () { return 'CURRENT_TIMESTAMP'; }
        })
    ], UsuarioEntity.prototype, "create_at");
    __decorate([
        typeorm_1.UpdateDateColumn({
            name: 'update_at',
            type: 'timestamp',
            "default": function () { return 'CURRENT_TIMESTAMP'; }
        })
    ], UsuarioEntity.prototype, "update_at");
    __decorate([
        typeorm_1.OneToOne(function () { return empleado_entity_1.EmpleadoEntity; }, function (empleado) { return empleado.usuario; })
    ], UsuarioEntity.prototype, "empleado");
    __decorate([
        typeorm_1.Column('varchar', {
            name: 'nombre',
            nullable: false,
            comment: 'Nombre del usuario'
        })
    ], UsuarioEntity.prototype, "nombre");
    __decorate([
        typeorm_1.Column('varchar', {
            name: 'contraseña',
            nullable: false,
            comment: 'contraseña del usuario'
        })
    ], UsuarioEntity.prototype, "email");
    UsuarioEntity = __decorate([
        typeorm_1.Entity('usuarios', { schema: 'empresa' })
    ], UsuarioEntity);
    return UsuarioEntity;
}());
exports.UsuarioEntity = UsuarioEntity;
