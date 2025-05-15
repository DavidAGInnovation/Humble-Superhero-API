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
exports.SuperheroController = void 0;
const common_1 = require("@nestjs/common");
const create_superhero_dto_1 = require("./dto/create-superhero.dto");
const superhero_service_1 = require("./superhero.service");
let SuperheroController = class SuperheroController {
    constructor(superheroService) {
        this.superheroService = superheroService;
    }
    create(createSuperheroDto) {
        return this.superheroService.create(createSuperheroDto);
    }
    findAll() {
        return this.superheroService.findAll();
    }
    // Explicit OPTIONS handler for /superheroes if needed
    handleOptions(req, res) {
        res.header('Access-Control-Allow-Origin', 'http://localhost:8080');
        res.header('Access-Control-Allow-Methods', 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS');
        res.header('Access-Control-Allow-Headers', 'Content-Type, Accept');
        return res.status(204).send();
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_superhero_dto_1.CreateSuperheroDto]),
    __metadata("design:returntype", void 0)
], SuperheroController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], SuperheroController.prototype, "findAll", null);
__decorate([
    (0, common_1.Options)(),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], SuperheroController.prototype, "handleOptions", null);
SuperheroController = __decorate([
    (0, common_1.Controller)('superheroes'),
    __metadata("design:paramtypes", [superhero_service_1.SuperheroService])
], SuperheroController);
exports.SuperheroController = SuperheroController;
//# sourceMappingURL=superhero.controller.js.map