import { ILogger } from '@midwayjs/logger';
import { Id, Tool } from '@push.fun/midway-tool';
export declare class Typeorm {
    ctx: any;
    nanoid: Id;
    tool: Tool;
    logger: ILogger;
    sequelize: any;
    private operator;
    private keyToObj;
    private whereToString;
    private entityManager;
    private name;
    /**
     * <数据库查询方法>
     * @param Entity 【实体名称】
     * @example
     * ```ts
     * import { Users } from './users.model.ts'
     * this.SQL.Get(Users)
     * ------------------------
     * ```
     * @param options 【选填项】
     * @example
     * ```ts
     * this.SQL.Get(Entity) // 空: 查询全部
     * this.SQL.Get(Entity, 5) // 查询id=5
     * this.SQL.Get(Entity, [2, 3, 7]) // 数组查询id=2 id=3 id=7
     * this.SQL.Get(Entity, {}) // 对象指定条件查询
     * ------------------------
     * ```
     * @param options.type 【查询类型】 --> 默认[all]查询全部
     * @example
     * ```ts
     * this.SQL.Get(Entity, { type: 'all' })
     * type: 'all' // 查询全部
     * type: 'one' // 单条查询
     * type: 'page' // 分页查询
     * type: 'count' // 查询数量
     * ------------------------
     * ```
     * @param options.where 【查询条件】--> { id: xxx }
     * @example
     * ```ts
     * // 对象查询，键值之间关系为: AND
     * this.SQL.Get(Entity, { where: {} })
     * // 数组内嵌套对象查询，对象之间关系为: OR
     * this.SQL.Get(Entity, { where: [{}, {}] })
     * // demo1: 查询name字段为wu的数据
     * where: { name: 'wu' }
     * // demo2: 查询name=wu和name=lee的数据
     * where: {
     *     name: ['wu', 'lee']
     * }
     * // demo3: 查询name=wu和age=22的数据
     * where: {
     *     name: 'wu',
     *     age: 22
     * }
     * // demo4: 查询name=wu或者name=lee的数据
     * where: [
     *     {name: 'wu'},
     *     {name: 'lee'}
     * ]
     * // demo5: 查询name=wu或者name=lee且age=22的数据
     * where: [
     *     {name: 'wu'},
     *     {name:'lee', age: 22}
     * ]
     * // demo6: 运算符查询
     * where: {
     *     name: {
     *         'In': ['wu', 'wang']
     *     }
     * }
     * // demo7: 查询id=5或查询id=1至3
     * where: {
     *     id: [
     *         {'In': 5},
     *         {'Between': [1, 3]}
     *     ]
     * }
     * ------------------------
     * ```
     * @param options.where.Operator 【运算符】--> 'Between' 'In' 'Not'
     * @example
     * ```ts
     * this.SQL.Get(Entity, {
     *     where: {
     *         name: {
     *             'In': ['wu', 'lee']
     *         }
     *     }
     * })
     * ------------------------
     * ```
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
    Get(Entity: any, options?: {
        /**
         * @param type [查询类型]
         * @example
         * ```ts
         * type: 'all' // 查询全部[默认]
         * type: 'one' // 单条查询
         * type: 'page' // 分页查询
         * type: 'count' // 查询数量
         * ```
         */
        type?: string;
        /**
         * @param where [查询条件]
         * @example
         * ```ts
         * // demo1
         * where: {
         *     id: 1 // 查询id=1
         * }
         * // demo2
         * where: {
         *     id: [1, 2] // 查询id=1或id=2
         * }
         * // demo3
         * where: {
         *     id: [ // []数组内参数之间查询关系是：OR(或)  {}对象内属性之间查询关系是：AND(和)
         *         { 'In': [1] }, // 查询id=1
         *         { 'Between': [1, 3] } // 查询id=1,2,3
         *     ]
         * }
         * // demo4
         * where: [ // []数组内参数之间查询关系是：OR(或)
         *     { //  {}对象内属性之间查询关系是：AND(和)
         *         id: 1,
         *         name: 'push'
         *     },
         *     {
         *         id: [2, 3]
         *     }
         * ]
         * ```
         */
        where?: object | Array<object>;
        /**
         * @param page [当前页码]
         * @case 1 查询第1页内容[默认1]
         */
        page?: number;
        /**
         * @param count [每页显示条数]
         * @case 20 每页显示20条[默认20]
         */
        count?: number;
        order?: object;
        include?: Array<object | string>;
    }, transaction?: any): Promise<any>;
    /**
     * @param options 根据数组id查询 --> [12, 13, 14]
     */
    Get(Entity: any, options?: Array<number>, transaction?: any): Promise<any>;
    /**
     * @param options 根据id查询 --> 999
     */
    Get(Entity: any, options?: number | string, transaction?: any): Promise<any>;
    Add(Entity: any, options: {
        data: object | Array<object>;
    }): Promise<{
        code: number;
        message: string;
    }>;
    Update(Entity: any, options: {
        where: object | Array<object>;
        data: object | Array<object>;
    }): Promise<{
        code: number;
        message: any;
        data: number;
    } | {
        code: number;
        message: string;
        data?: undefined;
    }>;
    Delete(Entity: any, options: {
        where: object | Array<object>;
    }): Promise<{
        code: number;
        message: any;
        data: number;
    } | {
        code: number;
        message: string;
        data?: undefined;
    }>;
}
