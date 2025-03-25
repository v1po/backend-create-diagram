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
var UserService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const user_entity_1 = require("./user.entity");
const survey_entity_1 = require("../survey/survey.entity");
let UserService = UserService_1 = class UserService {
    constructor(userRepository, surveyRepository) {
        this.userRepository = userRepository;
        this.surveyRepository = surveyRepository;
        this.logger = new common_1.Logger(UserService_1.name);
    }
    async findOrCreate(firstName, lastName) {
        this.logger.log(`Finding or creating user: ${firstName} ${lastName}`);
        let user;
        try {
            if (!firstName || !lastName) {
                throw new Error('First name and last name must be provided');
            }
            const cleanedFirstName = firstName.trim();
            const cleanedLastName = lastName.trim();
            this.logger.log(`Cleaned firstName: ${cleanedFirstName}, Cleaned lastName: ${cleanedLastName}`);
            user = await this.userRepository.findOne({ where: { firstName: cleanedFirstName, lastName: cleanedLastName } });
            if (!user) {
                this.logger.log('User not found, creating new user');
                user = this.userRepository.create({ firstName: cleanedFirstName, lastName: cleanedLastName });
                await this.userRepository.save(user);
            }
            this.logger.log('User found or created:', user);
        }
        catch (error) {
            this.logger.error('Error in findOrCreate:', error);
            throw error;
        }
        return user;
    }
    async findReport(firstName, lastName) {
        const cleanedFirstName = firstName;
        const cleanedLastName = lastName;
        const user = await this.userRepository.findOne({ where: { firstName: cleanedFirstName, lastName: cleanedLastName }, relations: ['surveys'] });
        return user;
    }
};
exports.UserService = UserService;
exports.UserService = UserService = UserService_1 = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __param(1, (0, typeorm_1.InjectRepository)(survey_entity_1.Survey)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], UserService);
//# sourceMappingURL=user.service.js.map