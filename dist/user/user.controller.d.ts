import { UserService } from './user.service';
export declare class UserController {
    private readonly userService;
    private readonly logger;
    constructor(userService: UserService);
    registerUser(createUserDto: {
        firstName: string;
        lastName: string;
    }): Promise<{
        userId: number;
    }>;
    getUserId(firstName: string, lastName: string): Promise<{
        report: import("./user.entity").User;
    }>;
}
