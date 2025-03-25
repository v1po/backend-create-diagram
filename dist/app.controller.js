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
exports.SurveyController = void 0;
const common_1 = require("@nestjs/common");
const survey_service_1 = require("./survey/survey.service");
let SurveyController = class SurveyController {
    constructor(surveyService) {
        this.surveyService = surveyService;
    }
    async findOneByChartId(chartId) {
        return this.surveyService.findOneByChartId(chartId);
    }
    async findAll() {
        return this.surveyService.findAll();
    }
    async findOne(chartId) {
        return this.surveyService.findOneByChartId(chartId);
    }
    async getReport(id, res) {
        const buffer = await this.surveyService.generateReport(id);
        res.status(common_1.HttpStatus.OK)
            .header('Content-Disposition', 'attachment; filename=report.xlsx')
            .header('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet')
            .send(buffer);
    }
};
exports.SurveyController = SurveyController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)('chartId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], SurveyController.prototype, "findOneByChartId", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], SurveyController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':chartId'),
    __param(0, (0, common_1.Param)('chartId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], SurveyController.prototype, "findOne", null);
__decorate([
    (0, common_1.Get)('report/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], SurveyController.prototype, "getReport", null);
exports.SurveyController = SurveyController = __decorate([
    (0, common_1.Controller)('survey'),
    __metadata("design:paramtypes", [survey_service_1.SurveyService])
], SurveyController);
//# sourceMappingURL=app.controller.js.map