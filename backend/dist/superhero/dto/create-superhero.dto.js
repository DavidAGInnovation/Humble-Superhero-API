"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateSuperheroDto = void 0;
const class_validator_1 = require("class-validator");
class CreateSuperheroDto {
}
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'Name is required' }),
    (0, class_validator_1.IsString)({ message: 'Name must be a string' }),
    __metadata("design:type", String)
], CreateSuperheroDto.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'Superpower is required' }),
    (0, class_validator_1.IsString)({ message: 'Superpower must be a string' }),
    __metadata("design:type", String)
], CreateSuperheroDto.prototype, "superpower", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'Humility score is required' }),
    (0, class_validator_1.IsInt)({ message: 'Humility score must be an integer' }),
    (0, class_validator_1.Min)(1, { message: 'Humility score must be at least 1' }),
    (0, class_validator_1.Max)(10, { message: 'Humility score must not exceed 10' }),
    __metadata("design:type", Number)
], CreateSuperheroDto.prototype, "humilityScore", void 0);
exports.CreateSuperheroDto = CreateSuperheroDto;
//# sourceMappingURL=create-superhero.dto.js.map