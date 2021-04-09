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
exports.Initorm = void 0;
const decorator_1 = require("@midwayjs/decorator");
let Initorm = class Initorm {
    async start(config) {
        if (!config)
            return null;
        const result = await this.ctx.curl('https://registry.npm.taobao.org/egg/latest', {
            dataType: 'json',
        });
        console.log('--result', result.data.version);
        return `加密处理：${config}`;
    }
};
__decorate([
    decorator_1.Inject(),
    __metadata("design:type", Object)
], Initorm.prototype, "ctx", void 0);
Initorm = __decorate([
    decorator_1.Provide()
], Initorm);
exports.Initorm = Initorm;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5pdC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvUXVuL1VuY2x1dHRlci9taWR3YXktbGVybmEvcGFja2FnZXMvbWlkd2F5LW9ybS1zcWwvc3JjLyIsInNvdXJjZXMiOlsibGliL2luaXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUEsbURBQW1FO0FBSW5FLElBQWEsT0FBTyxHQUFwQixNQUFhLE9BQU87SUFLaEIsS0FBSyxDQUFDLEtBQUssQ0FBQyxNQUFlO1FBQ3ZCLElBQUcsQ0FBQyxNQUFNO1lBQUUsT0FBTyxJQUFJLENBQUE7UUFFdkIsTUFBTSxNQUFNLEdBQUcsTUFBTSxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyw0Q0FBNEMsRUFBRztZQUM5RSxRQUFRLEVBQUUsTUFBTTtTQUNuQixDQUFDLENBQUM7UUFFSCxPQUFPLENBQUMsR0FBRyxDQUFDLFVBQVUsRUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFBO1FBRTVDLE9BQU8sUUFBUSxNQUFNLEVBQUUsQ0FBQTtJQUMzQixDQUFDO0NBQ0osQ0FBQTtBQWJHO0lBREMsa0JBQU0sRUFBRTs7b0NBQ0Q7QUFIQyxPQUFPO0lBRG5CLG1CQUFPLEVBQUU7R0FDRyxPQUFPLENBZ0JuQjtBQWhCWSwwQkFBTyJ9