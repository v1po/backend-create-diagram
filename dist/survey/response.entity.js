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
exports.Response = void 0;
const typeorm_1 = require("typeorm");
const survey_entity_1 = require("./survey.entity");
let Response = class Response {
};
exports.Response = Response;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Response.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Response.prototype, "respondentType", void 0);
__decorate([
    (0, typeorm_1.Column)('json'),
    __metadata("design:type", Object)
], Response.prototype, "answers", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => survey_entity_1.Survey, survey => survey.responses, { onDelete: 'CASCADE' }),
    __metadata("design:type", survey_entity_1.Survey)
], Response.prototype, "survey", void 0);
exports.Response = Response = __decorate([
    (0, typeorm_1.Entity)()
], Response);
//# sourceMappingURL=response.entity.js.map