"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ProductEntity = void 0;
var typeorm_1 = require("typeorm");
var category_entity_1 = require("./category.entity");
var ProductEntity = /** @class */ (function () {
    function ProductEntity() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn('uuid')
    ], ProductEntity.prototype, "id");
    __decorate([
        typeorm_1.CreateDateColumn({
            name: 'created_at',
            type: 'timestamp',
            "default": function () { return 'CURRENT_TIMESTAMP'; }
        })
    ], ProductEntity.prototype, "created_at");
    __decorate([
        typeorm_1.UpdateDateColumn({
            name: 'updated_at',
            type: 'timestamp',
            "default": function () { return 'CURRENT_TIMESTAMP'; }
        })
    ], ProductEntity.prototype, "updated_at");
    __decorate([
        typeorm_1.DeleteDateColumn({
            name: 'deleted_at',
            type: 'timestamp',
            nullable: true
        })
    ], ProductEntity.prototype, "deleted_at");
    __decorate([
        typeorm_1.ManyToOne(function () { return category_entity_1.CategoryEntity; }, function (category) { return category.products; })
    ], ProductEntity.prototype, "category");
    __decorate([
        typeorm_1.Column('varchar', {
            name: 'title',
            nullable: false,
            comment: 'product name'
        })
    ], ProductEntity.prototype, "title");
    __decorate([
        typeorm_1.Column('decimal', {
            name: 'price',
            nullable: false,
            comment: 'product price',
            precision: 10,
            scale: 2
        })
    ], ProductEntity.prototype, "price");
    __decorate([
        typeorm_1.Column('varchar', {
            name: 'description',
            nullable: true,
            comment: 'product description'
        })
    ], ProductEntity.prototype, "description");
    ProductEntity = __decorate([
        typeorm_1.Entity({ name: 'products', schema: 'ventas' })
    ], ProductEntity);
    return ProductEntity;
}());
exports.ProductEntity = ProductEntity;
