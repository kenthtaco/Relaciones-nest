"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.CategoryEntity = void 0;
var typeorm_1 = require("typeorm");
var product_entity_1 = require("./product.entity");
var CategoryEntity = /** @class */ (function () {
    function CategoryEntity() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn('uuid')
    ], CategoryEntity.prototype, "id");
    __decorate([
        typeorm_1.CreateDateColumn({
            name: 'created_at',
            type: 'timestamp',
            "default": function () { return 'CURRENT_TIMESTAMP'; }
        })
    ], CategoryEntity.prototype, "created_at");
    __decorate([
        typeorm_1.UpdateDateColumn({
            name: 'updated_at',
            type: 'timestamp',
            "default": function () { return 'CURRENT_TIMESTAMP'; }
        })
    ], CategoryEntity.prototype, "updated_at");
    __decorate([
        typeorm_1.DeleteDateColumn({
            name: 'deleted_at',
            type: 'timestamp',
            nullable: true
        })
    ], CategoryEntity.prototype, "deleted_at");
    __decorate([
        typeorm_1.OneToMany(function () { return product_entity_1.ProductEntity; }, function (product) { return product.category; })
    ], CategoryEntity.prototype, "products");
    __decorate([
        typeorm_1.Column('varchar', {
            name: 'title',
            nullable: false,
            comment: 'category name'
        })
    ], CategoryEntity.prototype, "title");
    __decorate([
        typeorm_1.Column('decimal', {
            name: 'price',
            nullable: false,
            comment: 'category price'
        })
    ], CategoryEntity.prototype, "price");
    __decorate([
        typeorm_1.Column('varchar', {
            name: 'description',
            nullable: true,
            comment: 'category description'
        })
    ], CategoryEntity.prototype, "description");
    CategoryEntity = __decorate([
        typeorm_1.Entity({ name: 'categories', schema: 'ventas' })
    ], CategoryEntity);
    return CategoryEntity;
}());
exports.CategoryEntity = CategoryEntity;
