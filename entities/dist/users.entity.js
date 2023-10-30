"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.UsersEntity = void 0;
var typeorm_1 = require("typeorm");
var rol_entity_1 = require("./rol.entity");
var UsersEntity = /** @class */ (function () {
    function UsersEntity() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn('uuid')
    ], UsersEntity.prototype, "id");
    __decorate([
        typeorm_1.CreateDateColumn({
            name: 'created_at',
            type: 'timestamp',
            "default": function () { return 'CURRENT_TIMESTAMP'; }
        })
    ], UsersEntity.prototype, "created_at");
    __decorate([
        typeorm_1.UpdateDateColumn({
            name: 'updated_at',
            type: 'timestamp',
            "default": function () { return 'CURRENT_TIMESTAMP'; }
        })
    ], UsersEntity.prototype, "updated_at");
    __decorate([
        typeorm_1.DeleteDateColumn({
            name: 'deleted_at',
            type: 'timestamp',
            nullable: true
        })
    ], UsersEntity.prototype, "deleted_at");
    __decorate([
        typeorm_1.OneToOne(function () { return rol_entity_1.RolEntity; }, function (rol) { return rol.users; })
    ], UsersEntity.prototype, "rol");
    __decorate([
        typeorm_1.Column('varchar', {
            name: 'name',
            nullable: false,
            comment: 'user name'
        })
    ], UsersEntity.prototype, "title");
    __decorate([
        typeorm_1.Column('varchar', {
            name: 'username',
            nullable: false,
            comment: 'user username'
        })
    ], UsersEntity.prototype, "username");
    __decorate([
        typeorm_1.Column('varchar', {
            name: 'lastname',
            nullable: true,
            comment: 'user lastname'
        })
    ], UsersEntity.prototype, "lastname");
    __decorate([
        typeorm_1.Column('varchar', {
            name: 'email',
            nullable: true,
            comment: 'user email'
        })
    ], UsersEntity.prototype, "email");
    UsersEntity = __decorate([
        typeorm_1.Entity({ name: 'users', schema: 'usuario' })
    ], UsersEntity);
    return UsersEntity;
}());
exports.UsersEntity = UsersEntity;
