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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SuperheroService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const superhero_entity_1 = require("./superhero.entity");
let SuperheroService = class SuperheroService {
    constructor(superheroRepository) {
        this.superheroRepository = superheroRepository;
    }
    async create(createSuperheroDto) {
        const superhero = this.superheroRepository.create(createSuperheroDto);
        return await this.superheroRepository.save(superhero);
    }
    async findAll() {
        // Sort by humilityScore descending
        return await this.superheroRepository.find({ order: { humilityScore: 'DESC' } });
    }
};
SuperheroService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(superhero_entity_1.Superhero)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], SuperheroService);
exports.SuperheroService = SuperheroService;
//# sourceMappingURL=superhero.service.js.map