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
exports.SQLConfiguration = void 0;
const decorator_1 = require("@midwayjs/decorator");
const path_1 = require("path");
const typeorm = require("@midwayjs/orm");
const tool = require("@push.fun/midway-tool");
let SQLConfiguration = class SQLConfiguration {
    async onReady(content) {
        // console.log('-->组件内：configuration执行')
        // console.log('-->orm', this.config.orm)
        // Object.defineProperty(this.app, 'nis', {
        //     value: 'abc',
        //     writable: false
        // })
        // console.log('--->this.app', this.app)
        // console.log('-->App:', this.app)
        // console.log('--->appDir', this.appDir)
        // console.log('--->config.env', this.config.env)
        // console.info('\n======================================')
        // console.info('            push.fun Started          ')
        // console.info('======================================\n')       
    }
};
__decorate([
    decorator_1.App(),
    __metadata("design:type", Object)
], SQLConfiguration.prototype, "app", void 0);
__decorate([
    decorator_1.Config(decorator_1.ALL),
    __metadata("design:type", Object)
], SQLConfiguration.prototype, "config", void 0);
__decorate([
    decorator_1.Inject(),
    __metadata("design:type", Object)
], SQLConfiguration.prototype, "appDir", void 0);
SQLConfiguration = __decorate([
    decorator_1.Configuration({
        namespace: 'SQL',
        importConfigs: [
            path_1.join(__dirname, 'config')
        ],
        imports: [
            typeorm,
            tool
        ]
    })
], SQLConfiguration);
exports.SQLConfiguration = SQLConfiguration;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlndXJhdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvUXVuL1VuY2x1dHRlci9taWR3YXktbGVybmEvcGFja2FnZXMvbWlkd2F5LW9ybS1zcWwvc3JjLyIsInNvdXJjZXMiOlsiY29uZmlndXJhdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFDQSxtREFBOEU7QUFDOUUsK0JBQTRCO0FBQzVCLHlDQUF3QztBQUN4Qyw4Q0FBNkM7QUFZN0MsSUFBYSxnQkFBZ0IsR0FBN0IsTUFBYSxnQkFBZ0I7SUFXekIsS0FBSyxDQUFDLE9BQU8sQ0FBQyxPQUF5QjtRQUNuQyx3Q0FBd0M7UUFDeEMseUNBQXlDO1FBQ3pDLDJDQUEyQztRQUMzQyxvQkFBb0I7UUFDcEIsc0JBQXNCO1FBQ3RCLEtBQUs7UUFDTCx3Q0FBd0M7UUFDeEMsbUNBQW1DO1FBQ25DLHlDQUF5QztRQUN6QyxpREFBaUQ7UUFDakQsMkRBQTJEO1FBQzNELHlEQUF5RDtRQUN6RCxrRUFBa0U7SUFDdEUsQ0FBQztDQUNKLENBQUE7QUF2Qkc7SUFEQyxlQUFHLEVBQUU7OzZDQUNpQjtBQUd2QjtJQURDLGtCQUFNLENBQUMsZUFBRyxDQUFDOztnREFDRDtBQUdYO0lBREMsa0JBQU0sRUFBRTs7Z0RBQ0U7QUFURixnQkFBZ0I7SUFWNUIseUJBQWEsQ0FBQztRQUNYLFNBQVMsRUFBRSxLQUFLO1FBQ2hCLGFBQWEsRUFBRTtZQUNYLFdBQUksQ0FBQyxTQUFTLEVBQUUsUUFBUSxDQUFDO1NBQzVCO1FBQ0QsT0FBTyxFQUFFO1lBQ0wsT0FBTztZQUNQLElBQUk7U0FDUDtLQUNKLENBQUM7R0FDVyxnQkFBZ0IsQ0EwQjVCO0FBMUJZLDRDQUFnQiJ9