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
exports.SurveyService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const survey_entity_1 = require("./survey.entity");
const user_entity_1 = require("../user/user.entity");
let SurveyService = class SurveyService {
    constructor(surveyRepository, userRepository) {
        this.surveyRepository = surveyRepository;
        this.userRepository = userRepository;
    }
    async saveSurvey(data) {
        const { userId, studentClass, year, category, recommendations, studentData, parentData, teacherData, chartId } = data;
        const user = await this.userRepository.findOne({ where: { id: userId } });
        if (!user) {
            throw new common_1.NotFoundException('Пользователь не найден');
        }
        const parsedStudentData = studentData ? JSON.parse(studentData) : null;
        const parsedParentData = parentData ? JSON.parse(parentData) : null;
        const parsedTeacherData = teacherData ? JSON.parse(teacherData) : null;
        const survey = this.surveyRepository.create({
            userId,
            studentClass,
            year,
            category,
            recommendations,
            studentAnswers: parsedStudentData,
            parentAnswers: parsedParentData,
            teacherAnswers: parsedTeacherData,
            chartId,
        });
        await this.surveyRepository.save(survey);
        return survey;
    }
    async findAll() {
        return this.surveyRepository.find({ relations: ['user'] });
    }
    async findOneByChartId(chartId) {
        const survey = await this.surveyRepository.findOne({ where: { chartId }, relations: ['user'] });
        if (!survey) {
            throw new common_1.NotFoundException('Опрос не найден');
        }
        return survey;
    }
    async generateReport(chartId) {
        const survey = await this.findOneByChartId(chartId);
        if (!survey) {
            throw new common_1.NotFoundException('Опрос не найден');
        }
        const report = {
            user: {
                firstName: survey.userId.firstName,
                lastName: survey.userId.lastName,
            },
            survey: {
                chartId: survey.chartId,
                category: survey.category,
                recommendations: survey.recommendations,
                studentAnswers: survey.studentAnswers,
                parentAnswers: survey.parentAnswers,
                teacherAnswers: survey.teacherAnswers,
                studentClass: survey.studentClass,
                year: survey.year,
            },
        };
        return report;
    }
};
exports.SurveyService = SurveyService;
exports.SurveyService = SurveyService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(survey_entity_1.Survey)),
    __param(1, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], SurveyService);
//# sourceMappingURL=survey.service.js.map