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
exports.Sequelize = void 0;
const decorator_1 = require("@midwayjs/decorator");
const init_1 = require("../lib/init");
let Sequelize = class Sequelize {
    async Add() {
    }
    async Delete() {
    }
    async Update() {
    }
    /**
     * <数据库查询方法>
     * @param tableName [表名称] --> "db_name"
     * @param options [Object] --> type[查询类型] where[查询条件]
     * @param options.type [查询类型] --> one[单条] all[全部] page[分页] count[查询数量] default[默认全部]
     * @param options.where [查询条件] --> { id: xxx }
     * @param options.order [排序条件] --> [ ['id', 'DESC'] ]
     * @param options.include [关联查询] --> [ { model: 'xx', as: 'xx' } ]
     * @param options.attr [聚合查询] attributes: { include: [], exclude: [] }
     * @param options.inc [包含字段] --> ['name']
     * @param options.exc [排除字段] --> ['age']
     * @param options.paranoid [虚拟删除查询] false[查询已删除字段] true[不查询已删除字段] default[true]
     * @param options.page [分页页码] default[第1页] --> page: 1
     * @param options.count [分页显示条数] default[20条] --> count: 20
     * @param options.cache [缓存:redis] true[启用缓存] false[禁止缓存] default[false]
     * @param options.cache.time [缓存过期时间/秒] --> time: 2
     * @param transaction [事务操作] 传入事务对象transaction
     */
    async Get(tableName, options, transaction) {
        // const init = await this.init.start('Get')
        const SE = this.ctx.app.Sequelize;
        // console.log('--->SE', SE)
        // console.log('--->se', this.ctx.model)
        console.log('--->sequelize', this.sequelize);
    }
    /**
     * 获取书籍ID
     * @param id 参数
     */
    async getBookById(id) {
        // Get get
        // Update update
        // Add add Create create
        // Delete delete
        // console.log('---->config', this.user)
        const init = await this.init.start('hello');
        console.log('---->init', init);
        return `id: ${id}`;
    }
};
__decorate([
    decorator_1.Inject(),
    __metadata("design:type", Object)
], Sequelize.prototype, "ctx", void 0);
__decorate([
    decorator_1.Inject(),
    __metadata("design:type", init_1.Initorm)
], Sequelize.prototype, "init", void 0);
__decorate([
    decorator_1.Config(),
    __metadata("design:type", Object)
], Sequelize.prototype, "sequelize", void 0);
Sequelize = __decorate([
    decorator_1.Provide()
], Sequelize);
exports.Sequelize = Sequelize;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VxdWVsaXplLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9RdW4vVW5jbHV0dGVyL21pZHdheS1sZXJuYS9wYWNrYWdlcy9taWR3YXktb3JtLXNxbC9zcmMvIiwic291cmNlcyI6WyJzZXJ2aWNlL3NlcXVlbGl6ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSxtREFBbUU7QUFFbkUsc0NBQXFDO0FBR3JDLElBQWEsU0FBUyxHQUF0QixNQUFhLFNBQVM7SUFXbEIsS0FBSyxDQUFDLEdBQUc7SUFFVCxDQUFDO0lBRUQsS0FBSyxDQUFDLE1BQU07SUFFWixDQUFDO0lBRUQsS0FBSyxDQUFDLE1BQU07SUFFWixDQUFDO0lBRUQ7Ozs7Ozs7Ozs7Ozs7Ozs7O09BaUJHO0lBQ0gsS0FBSyxDQUFDLEdBQUcsQ0FBQyxTQUFpQixFQUFFLE9BQW1CLEVBQUUsV0FBaUI7UUFFL0QsNENBQTRDO1FBRTVDLE1BQU0sRUFBRSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQztRQUNsQyw0QkFBNEI7UUFDNUIsd0NBQXdDO1FBQ3hDLE9BQU8sQ0FBQyxHQUFHLENBQUMsZUFBZSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQTtJQUNoRCxDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsS0FBSyxDQUFDLFdBQVcsQ0FBQyxFQUFXO1FBRXpCLFVBQVU7UUFDVixnQkFBZ0I7UUFDaEIsd0JBQXdCO1FBQ3hCLGdCQUFnQjtRQUVoQix3Q0FBd0M7UUFFeEMsTUFBTSxJQUFJLEdBQUcsTUFBTSxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQTtRQUUzQyxPQUFPLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsQ0FBQTtRQUU5QixPQUFPLE9BQU8sRUFBRSxFQUFFLENBQUE7SUFDdEIsQ0FBQztDQUNKLENBQUE7QUFuRUc7SUFEQyxrQkFBTSxFQUFFOztzQ0FDRDtBQUdSO0lBREMsa0JBQU0sRUFBRTs4QkFDSCxjQUFPO3VDQUFBO0FBR2I7SUFEQyxrQkFBTSxFQUFFOzs0Q0FDSztBQVRMLFNBQVM7SUFEckIsbUJBQU8sRUFBRTtHQUNHLFNBQVMsQ0FzRXJCO0FBdEVZLDhCQUFTIn0=