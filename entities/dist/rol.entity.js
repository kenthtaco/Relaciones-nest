"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.RolEntity = void 0;
var typeorm_1 = require("typeorm");
var users_entity_1 = require("./users.entity");
var RolEntity = /** @class */ (function () {
    function RolEntity() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn('uuid')
    ], RolEntity.prototype, "id");
    __decorate([
        typeorm_1.CreateDateColumn({
            name: 'created_at',
            type: 'timestamp',
            "default": function () { return 'CURRENT_TIMESTAMP'; }
        })
    ], RolEntity.prototype, "created_at");
    __decorate([
        typeorm_1.UpdateDateColumn({
            name: 'updated_at',
            type: 'timestamp',
            "default": function () { return 'CURRENT_TIMESTAMP'; }
        })
    ], RolEntity.prototype, "updated_at");
    __decorate([
        typeorm_1.DeleteDateColumn({
            name: 'deleted_at',
            type: 'timestamp',
            nullable: true
        })
    ], RolEntity.prototype, "deleted_at");
    __decorate([
        typeorm_1.OneToOne(function () { return users_entity_1.UsersEntity; }, function (users) { return users.rol; })
    ], RolEntity.prototype, "users");
    __decorate([
        typeorm_1.Column('varchar', {
            name: 'name',
            nullable: false,
            comment: 'user name'
        })
    ], RolEntity.prototype, "title");
    __decorate([
        typeorm_1.Column('varchar', {
            name: 'username',
            nullable: false,
            comment: 'user username'
        })
    ], RolEntity.prototype, "username");
    __decorate([
        typeorm_1.Column('varchar', {
            name: 'lastname',
            nullable: true,
            comment: 'user lastname'
        })
    ], RolEntity.prototype, "lastname");
    __decorate([
        typeorm_1.Column('varchar', {
            name: 'email',
            nullable: true,
            comment: 'user email'
        })
    ], RolEntity.prototype, "email");
    RolEntity = __decorate([
        typeorm_1.Entity({ name: 'rol', schema: 'ventas' })
    ], RolEntity);
    return RolEntity;
}());
exports.RolEntity = RolEntity;
