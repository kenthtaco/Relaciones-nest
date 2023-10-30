"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.JugadorEntity = void 0;
var typeorm_1 = require("typeorm");
var deporte_entity_1 = require("./deporte.entity");
var JugadorEntity = /** @class */ (function () {
    function JugadorEntity() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn('uuid')
    ], JugadorEntity.prototype, "id");
    __decorate([
        typeorm_1.CreateDateColumn({
            name: 'created_at',
            type: 'timestamp',
            "default": function () { return 'CURRENT_TIMESTAMP'; }
        })
    ], JugadorEntity.prototype, "created_at");
    __decorate([
        typeorm_1.UpdateDateColumn({
            name: 'updated_at',
            type: 'timestamp',
            "default": function () { return 'CURRENT_TIMESTAMP'; }
        })
    ], JugadorEntity.prototype, "updated_at");
    __decorate([
        typeorm_1.ManyToMany(function () { return deporte_entity_1.DeporteEntity; }),
        typeorm_1.JoinTable({
            name: 'jugador_deporte',
            joinColumns: [{ name: 'jugador_id', referencedColumnName: 'id' }],
            inverseJoinColumns: [{ name: 'deporte_id', referencedColumnName: 'id' }]
        })
    ], JugadorEntity.prototype, "deportes");
    __decorate([
        typeorm_1.Column('varchar', {
            name: 'nombre',
            nullable: false,
            comment: 'Nombre del jugador'
        })
    ], JugadorEntity.prototype, "nombre");
    __decorate([
        typeorm_1.Column('varchar', {
            name: 'posicion',
            nullable: false,
            comment: 'Posición del jugador'
        })
    ], JugadorEntity.prototype, "posicion");
    JugadorEntity = __decorate([
        typeorm_1.Entity({ schema: 'empresa', name: 'jugadores' })
    ], JugadorEntity);
    return JugadorEntity;
}());
exports.JugadorEntity = JugadorEntity;
