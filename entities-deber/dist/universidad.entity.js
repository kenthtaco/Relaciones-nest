"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.UniversidadEntity = void 0;
var typeorm_1 = require("typeorm");
var estudiante_entity_1 = require("./estudiante.entity");
var UniversidadEntity = /** @class */ (function () {
    function UniversidadEntity() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn('uuid')
    ], UniversidadEntity.prototype, "id");
    __decorate([
        typeorm_1.CreateDateColumn({
            name: 'create_at',
            type: 'timestamp',
            "default": function () { return 'CURRENT_TIMESTAMP'; }
        })
    ], UniversidadEntity.prototype, "create_at");
    __decorate([
        typeorm_1.UpdateDateColumn({
            name: 'update_at',
            type: 'timestamp',
            "default": function () { return 'CURRENT_TIMESTAMP'; }
        })
    ], UniversidadEntity.prototype, "update_at");
    __decorate([
        typeorm_1.DeleteDateColumn({
            name: 'delete_at',
            type: 'timestamp',
            nullable: true
        })
    ], UniversidadEntity.prototype, "delete_at");
    __decorate([
        typeorm_1.OneToMany(function () { return estudiante_entity_1.EstudianteEntity; }, function (estudiante) { return estudiante.universidad; })
    ], UniversidadEntity.prototype, "estudiantes");
    __decorate([
        typeorm_1.Column('varchar', {
            name: 'nombre',
            nullable: false,
            comment: 'Nombre de la universidad'
        })
    ], UniversidadEntity.prototype, "nombre");
    __decorate([
        typeorm_1.Column('varchar', {
            name: 'ubicacion',
            nullable: false,
            comment: 'Ubicación de la universidad'
        })
    ], UniversidadEntity.prototype, "ubicacion");
    UniversidadEntity = __decorate([
        typeorm_1.Entity('universidades', { schema: 'educacion' })
    ], UniversidadEntity);
    return UniversidadEntity;
}());
exports.UniversidadEntity = UniversidadEntity;
