"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.BooksEntity = void 0;
var typeorm_1 = require("typeorm");
var authors_entity_1 = require("./authors.entity");
var BooksEntity = /** @class */ (function () {
    function BooksEntity() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn('uuid')
    ], BooksEntity.prototype, "id");
    __decorate([
        typeorm_1.CreateDateColumn({
            name: 'created_at',
            type: 'timestamp',
            "default": function () { return 'CURRENT_TIMESTAMP'; }
        })
    ], BooksEntity.prototype, "created_at");
    __decorate([
        typeorm_1.UpdateDateColumn({
            name: 'updated_at',
            type: 'timestamp',
            "default": function () { return 'CURRENT_TIMESTAMP'; }
        })
    ], BooksEntity.prototype, "updated_at");
    __decorate([
        typeorm_1.DeleteDateColumn({
            name: 'deleted_at',
            type: 'timestamp',
            nullable: true
        })
    ], BooksEntity.prototype, "deleted_at");
    __decorate([
        typeorm_1.ManyToMany(function () { return authors_entity_1.AuthorsEntity; }, function (authors) { return authors.books; })
    ], BooksEntity.prototype, "authors");
    __decorate([
        typeorm_1.Column('varchar', {
            name: 'name',
            nullable: false,
            comment: 'author name'
        })
    ], BooksEntity.prototype, "name");
    __decorate([
        typeorm_1.Column('integer', {
            name: 'age',
            nullable: false,
            comment: 'author age'
        })
    ], BooksEntity.prototype, "age");
    __decorate([
        typeorm_1.Column('varchar', {
            name: 'phone',
            nullable: true,
            comment: 'author phone'
        })
    ], BooksEntity.prototype, "phone");
    BooksEntity = __decorate([
        typeorm_1.Entity({ name: 'books', schema: 'libros' })
    ], BooksEntity);
    return BooksEntity;
}());
exports.BooksEntity = BooksEntity;
