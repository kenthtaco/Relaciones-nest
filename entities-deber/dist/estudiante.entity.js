"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.EstudianteEntity = void 0;
var typeorm_1 = require("typeorm");
var universidad_entity_1 = require("./universidad.entity");
var EstudianteEntity = /** @class */ (function () {
    function EstudianteEntity() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn('uuid')
    ], EstudianteEntity.prototype, "id");
    __decorate([
        typeorm_1.CreateDateColumn({
            name: 'create_at',
            type: 'timestamp',
            "default": function () { return 'CURRENT_TIMESTAMP'; }
        })
    ], EstudianteEntity.prototype, "create_at");
    __decorate([
        typeorm_1.UpdateDateColumn({
            name: 'update_at',
            type: 'timestamp',
            "default": function () { return 'CURRENT_TIMESTAMP'; }
        })
    ], EstudianteEntity.prototype, "update_at");
    __decorate([
        typeorm_1.DeleteDateColumn({
            name: 'delete_at',
            type: 'timestamp',
            nullable: true
        })
    ], EstudianteEntity.prototype, "delete_at");
    __decorate([
        typeorm_1.ManyToOne(function () { return universidad_entity_1.UniversidadEntity; }, function (universidad) { return universidad.estudiantes; })
    ], EstudianteEntity.prototype, "universidad");
    __decorate([
        typeorm_1.Column('varchar', {
            name: 'nombre',
            nullable: false,
            comment: 'Nombre del estudiante'
        })
    ], EstudianteEntity.prototype, "nombre");
    __decorate([
        typeorm_1.Column('number', {
            name: 'edad',
            nullable: false,
            comment: 'Edad del estudiante'
        })
    ], EstudianteEntity.prototype, "edad");
    __decorate([
        typeorm_1.Column('varchar', {
            name: 'nacionalidad',
            nullable: true,
            comment: 'Nacionalidad del estudiante'
        })
    ], EstudianteEntity.prototype, "nacionalidad");
    EstudianteEntity = __decorate([
        typeorm_1.Entity('estudiantes', { schema: 'educacion' })
    ], EstudianteEntity);
    return EstudianteEntity;
}());
exports.EstudianteEntity = EstudianteEntity;
