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
exports.Typeorm = void 0;
const decorator_1 = require("@midwayjs/decorator");
const typeorm_1 = require("typeorm");
const midway_tool_1 = require("@push.fun/midway-tool");
let Typeorm = class Typeorm {
    constructor() {
        // 尽量与find运算符用法对标
        this.operator = {
            In: (value, key, i, ii, str, boot, isName) => {
                let data = {
                    str: ``,
                    data: {}
                };
                let inkey = ``;
                let uuid = this.nanoid.SetUUID(6);
                for (let i = 0, length = value.length; i < length; i++) {
                    data.data[`in_${uuid}_${i}`] = value[i];
                    if (!i) {
                        inkey = `:in_${uuid}_${i}`;
                    }
                    else {
                        inkey += `, :in_${uuid}_${i}`;
                    }
                }
                let nameKey = `${this.name}.`;
                if (isName && isName === 'delete') {
                    nameKey = '';
                }
                if (i === 1 && ii === 1) {
                    data.str = `${nameKey}${key} IN(${inkey})`;
                }
                else {
                    data.str = `${str} AND ${nameKey}${key} IN(${inkey})`;
                }
                // 数组嵌套内对象
                if (boot) {
                    data.str = `${nameKey}${key} IN(${inkey})`;
                }
                return data;
            },
            '==': (value, key, i, ii, str, boot, isName) => {
                return this.operator.In(value, key, i, ii, str, boot, isName);
            },
            '===': (value, key, i, ii, str, boot, isName) => {
                return this.operator.In(value, key, i, ii, str, boot, isName);
            },
            Between: (value, key, i, ii, str, boot, isName) => {
                let data = {
                    str: ``,
                    data: {}
                };
                let uuid = this.nanoid.SetUUID(6);
                data.data[`bet_${uuid}_0`] = value[0];
                data.data[`bet_${uuid}_1`] = value[1];
                let nameKey = `${this.name}.`;
                if (isName && isName === 'delete') {
                    nameKey = '';
                }
                if (i === 1 && ii === 1) {
                    data.str = `${nameKey}${key} BETWEEN :bet_${uuid}_0 AND :bet_${uuid}_1`;
                }
                else {
                    data.str = `${str} AND ${nameKey}${key} BETWEEN :bet_${uuid}_0 AND :bet_${uuid}_1`;
                }
                // 数组嵌套内对象
                if (boot) {
                    data.str = `${nameKey}${key} BETWEEN :bet_${uuid}_0 AND :bet_${uuid}_1`;
                }
                return data;
            },
            Not: (value, key, i, ii, str, boot, isName) => {
                let data = {
                    str: ``,
                    data: {}
                };
                let uuid = this.nanoid.SetUUID(6);
                data.data[`not_${uuid}`] = value;
                let nameKey = `${this.name}.`;
                if (isName && isName === 'delete') {
                    nameKey = '';
                }
                if (i === 1 && ii === 1) {
                    data.str = `${nameKey}${key} != :not_${uuid}`;
                }
                else {
                    data.str = `${str} AND ${nameKey}${key} != :not_${uuid}`;
                }
                // 数组嵌套内对象
                if (boot) {
                    data.str = `${nameKey}${key} != :not_${uuid}`;
                }
                return data;
            },
            '!=': (value, key, i, ii, str, boot, isName) => {
                return this.operator.Not(value, key, i, ii, str, boot, isName);
            },
            '!==': (value, key, i, ii, str, boot, isName) => {
                return this.operator.Not(value, key, i, ii, str, boot, isName);
            },
            Like: (value, key, i, ii, str, boot, isName) => {
                let data = {
                    str: ``,
                    data: {}
                };
                let uuid = this.nanoid.SetUUID(6);
                data.data[`like_${uuid}`] = value;
                let nameKey = `${this.name}.`;
                if (isName && isName === 'delete') {
                    nameKey = '';
                }
                if (i === 1 && ii === 1) {
                    data.str = `${nameKey}${key} LIKE :like_${uuid}`;
                }
                else {
                    data.str = `${str} AND ${nameKey}${key} LIKE :like_${uuid}`;
                }
                // 数组嵌套内对象
                if (boot) {
                    data.str = `${nameKey}${key} LIKE :like_${uuid}`;
                }
                return data;
            }
        };
        this.entityManager = typeorm_1.getManager();
        this.name = null;
    }
    // options参数转化
    keyToObj(obj, name, isName) {
        let i = 0;
        let whereObj = {};
        let whereStr = ``;
        let linObj = obj;
        const xunObj = obj;
        let nameKey = `${this.name}.`;
        if (isName && isName === 'delete') {
            nameKey = '';
        }
        for (let key in xunObj) {
            i += 1; // 持续累加
            if (linObj.hasOwnProperty(key) === true) {
                // 判断当前value 属于什么类型
                let value = linObj[key];
                let data = {};
                // 1 字符串或数字
                if (typeof value === 'string' || typeof value === 'number') {
                    let keys = this.nanoid.SetUUID(6);
                    if (i === 1) {
                        whereStr = `${nameKey}${key} = :${keys}`;
                    }
                    else {
                        whereStr = `(${whereStr}) AND ${nameKey}${key} = :${keys}`;
                    }
                    data[keys] = xunObj[key];
                    delete linObj[key];
                    if (whereObj[key]) {
                        delete whereObj[key];
                    }
                }
                // 2 数组
                if (typeof value === 'object' && Array.isArray(value)) {
                    if (!Array.isArray(value[0])) {
                        // 如果数组内为对象
                        for (let s = 0, length = value.length; s < length; s++) {
                            let objdata = value[s];
                            if (typeof objdata === 'object' && !Array.isArray(objdata)) {
                                let ii = 0;
                                let valueLen = Object.keys(objdata).length;
                                for (let objectKey in objdata) {
                                    ii += 1;
                                    if (objdata.hasOwnProperty(objectKey) === true) {
                                        let objectValue = objdata[objectKey];
                                        let val = this.operator[objectKey](objectValue, key, i, ii, whereStr, true);
                                        // s 数组内对象循环次数
                                        // ii 数组内对象内的属性循环次数
                                        // valueLen 是数组内对象内的属性个数
                                        // i 是where内对象属性循环次数
                                        // s 才是用来判断执行到第几个对象属性！
                                        // 说明当前对象执行的是第一个
                                        if (s === 0 && i === 1 && ii === 1) {
                                            if (valueLen === 1) {
                                                // 说明只有一个
                                                whereStr = `(${val.str})`;
                                            }
                                            if (valueLen > 1) {
                                                // 说明不止有一个
                                                whereStr = `(${val.str}`;
                                            }
                                        }
                                        // 说明第一个对象内后续属性循环
                                        if (s === 0 && i === 1 && ii !== 1) {
                                            // 第一个数组内，第一个属性内，不是第一个对象
                                            if (valueLen !== 1 && valueLen !== ii) {
                                                // 说明执行第二个属性 不是最后一个
                                                whereStr = `${whereStr} AND (${val.str})`;
                                            }
                                            if (valueLen === ii) {
                                                // 说明执行到最后一个属性
                                                whereStr = `${whereStr} AND (${val.str}))`;
                                            }
                                        }
                                        // 第二个对象开始循环
                                        if (s !== 0 && s + 1 !== value.length && i === 1 && ii === 1) {
                                            // 需要判断当前第一个循环，是不是最后一个循环
                                            if (valueLen === 1) {
                                                // 说明只有一个
                                                whereStr = `${whereStr} OR (${val.str})`;
                                            }
                                            if (valueLen > 1) {
                                                // 说明不止有一个
                                                whereStr = `${whereStr} OR (${val.str}`;
                                            }
                                        }
                                        if (s !== 0 && s + 1 !== value.length && i === 1 && ii !== 1) {
                                            if (valueLen !== 1 && valueLen !== ii) {
                                                whereStr = `${whereStr} AND (${val.str})`;
                                            }
                                            if (valueLen === ii) {
                                                whereStr = `${whereStr} AND (${val.str}))`;
                                            }
                                        }
                                        // 最后一个对象循环
                                        if (s !== 0 && s + 1 === value.length && i === 1 && ii === 1) {
                                            // 需要判断当前第一个循环，是不是最后一个循环
                                            if (valueLen === 1) {
                                                // 说明只有一个
                                                whereStr = `${whereStr} OR (${val.str})`;
                                            }
                                            if (valueLen > 1) {
                                                // 说明不止有一个
                                                whereStr = `${whereStr} OR (${val.str}`;
                                            }
                                        }
                                        if (s !== 0 && s + 1 === value.length && i === 1 && ii !== 1) {
                                            if (valueLen !== 1 && valueLen !== ii) {
                                                whereStr = `${whereStr} AND (${val.str})`;
                                            }
                                            if (valueLen === ii) {
                                                whereStr = `${whereStr} AND (${val.str}))`;
                                            }
                                        }
                                        Object.assign(data, val.data);
                                    }
                                }
                            }
                            if (typeof objdata === 'string' || typeof objdata === 'number') {
                                let keys = this.nanoid.SetUUID(6);
                                if (!s) {
                                    // 第一个
                                    whereStr = `(${nameKey}${key} = :${keys})`;
                                }
                                else {
                                    // 说明不是第一个
                                    whereStr = `${whereStr} OR (${nameKey}${key} = :${keys})`;
                                }
                                data[keys] = xunObj[key][s];
                            }
                            if (s + 1 === value.length) {
                                delete linObj[key];
                                if (whereObj[key]) {
                                    delete whereObj[key];
                                }
                            }
                        }
                    }
                    if (typeof value[0] === 'object' && Array.isArray(value[0])) {
                        // 数组为简化and写法
                        let inkey = ``;
                        for (let s = 0; s < value.length; s++) {
                            if (!s) {
                                inkey = `:${key + s}`;
                            }
                            else {
                                inkey += `, :${key + s}`;
                            }
                            data[key + s] = value[s];
                        }
                        if (i === 1) {
                            whereStr = `${nameKey}${key} IN(${inkey})`;
                        }
                        else {
                            whereStr = `(${whereStr}) AND ${nameKey}${key} IN(${inkey})`;
                        }
                        delete linObj[key];
                        if (whereObj[key]) {
                            delete whereObj[key];
                        }
                    }
                }
                // 3 对象
                if (typeof value === 'object' && !Array.isArray(value)) {
                    // 对象则解析对象体内的key
                    let ii = 0;
                    let valueLen = Object.keys(value).length;
                    for (let objectKey in value) {
                        ii += 1;
                        if (value.hasOwnProperty(objectKey) === true) {
                            // FIXME: 支持多种操作符操作,不同操作符间为 AND
                            try {
                                let objectValue = value[objectKey];
                                let val = this.operator[objectKey](objectValue, key, i, ii, whereStr);
                                whereStr = val.str;
                                Object.assign(data, val.data);
                                delete linObj[key][objectKey];
                                if (ii === valueLen) {
                                    delete linObj[key];
                                    if (whereObj[key]) {
                                        delete whereObj[key];
                                    }
                                }
                            }
                            catch (err) {
                                this.logger.error(`您的${objectKey}操作符传递错误！`);
                            }
                        }
                    }
                }
                Object.assign(whereObj, linObj, data);
            }
        }
        this.logger.warn('SQL-->WHERE: ' + JSON.stringify({ where: whereStr, param: whereObj }));
        return { where: whereStr, param: whereObj };
    }
    whereToString(whereStatus, opt, name, key) {
        let obj = null;
        if (whereStatus === 'where') {
            obj = opt.where;
            return this.keyToObj(obj, name, key);
        }
        if (whereStatus === 'array') {
            obj = opt.where;
            let arr = [];
            for (let i = 0, length = obj.length; i < length; i++) {
                let get = this.keyToObj(obj[i], name, key);
                arr.push(get);
            }
            return arr;
        }
        if (whereStatus === 'noWhere') {
            obj = opt;
            // 阻止传入type && where
            if (obj.type)
                delete obj.type;
            if (obj.where)
                delete obj.where;
            return this.keyToObj(obj, name, key);
        }
    }
    async Get(Entity, options, transaction) {
        // 判断options类型是否为对象
        // let isOptionsObject: boolean = options && typeof options === 'object' && !Array.isArray(options);
        let isOptionsObject = midway_tool_1.is.Object(options);
        // 判断options类型是否为数组
        // let isOptionsArray: boolean = options && typeof options === 'object' && Array.isArray(options);
        let isOptionsArray = midway_tool_1.is.Array(options);
        // 判断options类型是否为数值
        // let isOptionsNumber: boolean = options && typeof options === 'number';
        let isOptionsNumber = midway_tool_1.is.Number(options) || midway_tool_1.is.String(options);
        // TODO: 2.解析where exec queryBuilder方法
        const parseWhere = async (opt) => {
            // 如果没有传options 直接返回
            if (!opt)
                return;
            let name = midway_tool_1.string.parseClassName(Entity);
            this.name = name;
            let sql = this.entityManager
                .createQueryBuilder(Entity, name);
            // 如果传入的options是对象不是数组
            if (opt && typeof opt === 'object' && !Array.isArray(opt)) {
                let ws = { where: '', param: {} };
                // 判断对象体内是否有 where
                if (opt.where && typeof opt.where === 'object' && !Array.isArray(opt.where)) {
                    // 如果有where直接遍历where下属性
                    ws = this.whereToString('where', opt, name);
                }
                // 判断opt.where是否为数组
                // 并且数组内是否存在对象
                if (opt.where && typeof opt.where === 'object' && Array.isArray(opt.where)) {
                    // 如果是数组，判断数组内是否有对象
                    let s = [];
                    let a = { where: '', param: {} };
                    if (typeof opt.where[0] === 'object' && !Array.isArray(opt.where[0])) {
                        s = this.whereToString('array', opt, name);
                    }
                    else {
                        // 此处说明是空数组 []
                        s = [{ where: '', param: {} }];
                    }
                    for (let i = 0, length = s.length; i < length; i++) {
                        if (!i) {
                            a.where = `(${s[i].where})`;
                        }
                        else {
                            a.where = `${a.where} OR (${s[i].where})`;
                        }
                        Object.assign(a.param, s[i].param);
                    }
                    ws = a;
                }
                // 如果没有where 直接遍历options下属性
                if (!opt.where && !['page', 'all', 'one', 'count'].includes(opt.type)) {
                    // 此配置会将type 和 where字段变为数据库限制字段！
                    ws = this.whereToString('noWhere', opt, name);
                }
                // page分页
                if (opt.type === 'page') {
                    // 兼容非数字页码写入 防止注入错误
                    if (!midway_tool_1.is.Number(opt.page))
                        opt.page = 1;
                    const page = opt.page - 0;
                    const countPage = opt.count;
                    const limit = countPage;
                    const offset = countPage * (page - 1);
                    let data = await sql
                        .where(ws.where, ws.param)
                        .take(limit)
                        .skip(offset)
                        .getManyAndCount();
                    for (let i = 0, len = data[0].length; i < len; i++) {
                        if (data[0][i].created_at)
                            data[0][i].created_at = midway_tool_1.time.get(0, data[0][i].created_at);
                        if (data[0][i].updated_at)
                            data[0][i].updated_at = midway_tool_1.time.get(0, data[0][i].updated_at);
                    }
                    return {
                        totalCount: data[1],
                        totalPage: Math.ceil(data[1] / countPage),
                        countPage,
                        page,
                        data: data[0]
                    };
                }
                // count总条数
                if (opt.type === 'count') {
                    let data = await sql
                        .where(ws.where, ws.param)
                        .getCount();
                    return {
                        count: data
                    };
                }
                // one单条查询
                if (opt.type === 'one') {
                    let data = await sql
                        .where(ws.where, ws.param)
                        .getOne();
                    if (data && data.created_at)
                        data.created_at = midway_tool_1.time.get(0, data.created_at);
                    if (data && data.updated_at)
                        data.updated_at = midway_tool_1.time.get(0, data.updated_at);
                    return data ? data : null;
                }
                let data = await sql
                    .where(ws.where, ws.param)
                    .getMany();
                for (let i = 0, len = data.length; i < len; i++) {
                    if (data[i].created_at)
                        data[i].created_at = midway_tool_1.time.get(0, data[i].created_at);
                    if (data[i].updated_at)
                        data[i].updated_at = midway_tool_1.time.get(0, data[i].updated_at);
                }
                return data;
            }
            // TODO: 如果传入的options是数组
            if (opt && typeof opt === 'object' && Array.isArray(opt)) {
                // 并且数组内的参数为 number
                // 根据数组内参数进行查询 id
                // ***大概率执行不到这里***
            }
        };
        // type 部分
        const Type = {
            all: async () => {
                return await parseWhere(options);
            },
            one: async () => {
                let opt = options;
                if (isOptionsNumber) {
                    opt = {};
                    opt.id = options;
                }
                return await parseWhere(opt);
            },
            arr: async () => {
                let opt = options;
                return await this.entityManager.findByIds(Entity, opt);
            },
            page: async () => {
                let opt = options;
                // 默认页码
                if (!opt.page)
                    opt.page = 1;
                // 每页默认条数
                if (!opt.count)
                    opt.count = 20;
                return await parseWhere(opt);
            },
            count: async () => {
                // 查询总条数
                return await parseWhere(options);
            }
        };
        let optionsType = 'all';
        // 如果options中设置type则根据类型查询
        if (isOptionsObject) {
            let opt = options;
            if (opt.type)
                optionsType = opt.type;
            // FIXME:  此处逻辑大概有问题！   判断是否有where 执行单条筛选查询
            // if(!(opt.where && typeof opt.where === 'object')) optionsType = 'one'
        }
        // 如果options为数组，执行数组id查询
        if (isOptionsArray)
            optionsType = 'arr';
        // one 如果options为数值，直接执行单条查询
        if (isOptionsNumber)
            optionsType = 'one';
        // v0.0.2修复条件参数判断不严谨bug
        if (midway_tool_1.is.Undefined(options))
            options = {};
        // exec get
        const data = await Type[optionsType]();
        return data;
        // 1. all
        // 获取该实体下全部all数据列表
        // this.SQL.Get(Photo)
        // 2. one
        // 获取单个数据，支持根据id查询
        // this.SQL.Get(Photo, 99)
        // 如果options为直传id，则取单条
        // this.SQL.Get(Photo, [1,2,99])
        // 如果传入为数组，则取数组内所有id列表
        // this.SQL.Get(Photo, { where: { id: 99 } })
        // 通过where对象获取id条件
        // this.SQL.Get(Photo, { where: { id: [1,2,99] } })
        // 通过where对象内数组参数，获取数组内id列表
        // this.SQL.Get(Photo, { where: { name: ['lee', 'wu'] } })
        // 顺带将where下其他属性对应的数组也依次查询遍历
        // 3. page
        // this.SQL.Get(Photo, {
        //     type: 'page',
        //     page: 1,
        //     count: 20
        // })
        // 4. count
        // this.SQL.Get(Photo, {
        //     type: 'count'
        // })
        // where 筛选和运算符
        // this.SQL.Get(Photo, { where: { 
        // 百分号like模糊查询类型
        // name: { like: '%xxx%' }
        // 仿照sequelize运算符验证方法
        // name: {  }
        // } })
        // order 排序
        // this.SQL.Get(Photo, {
        //     order: {
        //         id: 'DESC'
        //     }
        // })
        // include 关联表查询
        // this.SQL.Get(Photo, {
        //     include: [
        //         {
        //             model: User,
        //             where: {},
        //             order: {}
        //         }
        //     ]
        // })
    }
    async Add(Entity, options) {
        let name = midway_tool_1.string.parseClassName(Entity);
        this.name = name;
        let sql = this.entityManager
            .createQueryBuilder(Entity, name);
        let arr = options.data;
        let dataLength = 1;
        if (midway_tool_1.is.Array(options.data)) {
            for (let i = 0, len = arr.length; i < len; i++) {
                if (midway_tool_1.is.Undefined(arr[i].created_at))
                    arr[i].created_at = midway_tool_1.time.get();
                if (midway_tool_1.is.Undefined(arr[i].updated_at))
                    arr[i].updated_at = midway_tool_1.time.get();
            }
            dataLength = arr.length;
        }
        if (midway_tool_1.is.Object(options.data)) {
            if (midway_tool_1.is.Undefined(arr.created_at))
                arr.created_at = midway_tool_1.time.get();
            if (midway_tool_1.is.Undefined(arr.updated_at))
                arr.updated_at = midway_tool_1.time.get();
        }
        const save = await sql.insert()
            .into(Entity)
            .values(arr)
            .execute();
        if (save.raw.affectedRows === dataLength) {
            return { code: 2000, message: null };
        }
        else {
            return { code: 3001, message: `添加数据有${dataLength - save.raw.affectedRows}条失败!` };
        }
    }
    async Update(Entity, options) {
        let name = midway_tool_1.string.parseClassName(Entity);
        this.name = name;
        let sql = this.entityManager
            .createQueryBuilder(Entity, name);
        // 如果传入的options是对象不是数组
        if (options && typeof options === 'object' && !Array.isArray(options)) {
            let opt = options;
            let ws = { where: '', param: {} };
            // 判断对象体内是否有 where
            if (opt.where && typeof opt.where === 'object' && !Array.isArray(opt.where)) {
                // 如果有where直接遍历where下属性
                ws = this.whereToString('where', opt, name);
            }
            // 判断opt.where是否为数组
            // 并且数组内是否存在对象
            if (opt.where && typeof opt.where === 'object' && Array.isArray(opt.where)) {
                // 如果是数组，判断数组内是否有对象
                let s = [];
                let a = { where: '', param: {} };
                if (typeof opt.where[0] === 'object' && !Array.isArray(opt.where[0])) {
                    s = this.whereToString('array', opt, name);
                }
                else {
                    // 此处说明是空数组 []
                    s = [{ where: '', param: {} }];
                }
                for (let i = 0, length = s.length; i < length; i++) {
                    if (!i) {
                        a.where = `(${s[i].where})`;
                    }
                    else {
                        a.where = `${a.where} OR (${s[i].where})`;
                    }
                    Object.assign(a.param, s[i].param);
                }
                ws = a;
            }
            const update = await sql.update(Entity)
                .set(options.data)
                .where(ws.where, ws.param)
                .execute();
            if (update.affected) {
                return { code: 2000, message: null, data: update.affected };
            }
            else {
                return { code: 3001, message: `更新了${update.affected}条数据!` };
            }
        }
    }
    async Delete(Entity, options) {
        let name = midway_tool_1.string.parseClassName(Entity);
        this.name = name;
        let sql = this.entityManager
            .createQueryBuilder(Entity, name);
        // 如果传入的options是对象不是数组
        if (options && typeof options === 'object' && !Array.isArray(options)) {
            let opt = options;
            let ws = { where: '', param: {} };
            // 判断对象体内是否有 where
            if (opt.where && typeof opt.where === 'object' && !Array.isArray(opt.where)) {
                // 如果有where直接遍历where下属性
                ws = this.whereToString('where', opt, name, 'delete');
            }
            // 判断opt.where是否为数组
            // 并且数组内是否存在对象
            if (opt.where && typeof opt.where === 'object' && Array.isArray(opt.where)) {
                // 如果是数组，判断数组内是否有对象
                let s = [];
                let a = { where: '', param: {} };
                if (typeof opt.where[0] === 'object' && !Array.isArray(opt.where[0])) {
                    s = this.whereToString('array', opt, name, 'delete');
                }
                else {
                    // 此处说明是空数组 []
                    s = [{ where: '', param: {} }];
                }
                for (let i = 0, length = s.length; i < length; i++) {
                    if (!i) {
                        a.where = `(${s[i].where})`;
                    }
                    else {
                        a.where = `${a.where} OR (${s[i].where})`;
                    }
                    Object.assign(a.param, s[i].param);
                }
                ws = a;
            }
            const deleteD = await sql
                .delete()
                .from(Entity)
                .where(ws.where, ws.param)
                .execute();
            if (deleteD.affected) {
                return { code: 2000, message: null, data: deleteD.affected };
            }
            else {
                return { code: 3001, message: `删除了${deleteD.affected}条数据!` };
            }
        }
    }
};
__decorate([
    decorator_1.Inject(),
    __metadata("design:type", Object)
], Typeorm.prototype, "ctx", void 0);
__decorate([
    decorator_1.Inject('TOOL:id'),
    __metadata("design:type", midway_tool_1.Id)
], Typeorm.prototype, "nanoid", void 0);
__decorate([
    decorator_1.Inject('TOOL:tool'),
    __metadata("design:type", midway_tool_1.Tool)
], Typeorm.prototype, "tool", void 0);
__decorate([
    decorator_1.Logger(),
    __metadata("design:type", Object)
], Typeorm.prototype, "logger", void 0);
__decorate([
    decorator_1.Config(),
    __metadata("design:type", Object)
], Typeorm.prototype, "sequelize", void 0);
Typeorm = __decorate([
    decorator_1.Provide()
], Typeorm);
exports.Typeorm = Typeorm;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHlwZW9ybS5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvUXVuL1VuY2x1dHRlci9taWR3YXktbGVybmEvcGFja2FnZXMvbWlkd2F5LW9ybS1zcWwvc3JjLyIsInNvdXJjZXMiOlsic2VydmljZS90eXBlb3JtLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBLG1EQUEyRTtBQUMzRSxxQ0FBaUU7QUFHakUsdURBQWtFO0FBSWxFLElBQWEsT0FBTyxHQUFwQixNQUFhLE9BQU87SUFBcEI7UUFpQkksaUJBQWlCO1FBQ1QsYUFBUSxHQUFHO1lBQ2YsRUFBRSxFQUFFLENBQUMsS0FBb0IsRUFBRSxHQUFXLEVBQUUsQ0FBUyxFQUFFLEVBQVUsRUFBRSxHQUFXLEVBQUUsSUFBYSxFQUFFLE1BQWUsRUFBRSxFQUFFO2dCQUMxRyxJQUFJLElBQUksR0FBRztvQkFDUCxHQUFHLEVBQUUsRUFBRTtvQkFDUCxJQUFJLEVBQUUsRUFBRTtpQkFDWCxDQUFBO2dCQUNELElBQUksS0FBSyxHQUFXLEVBQUUsQ0FBQTtnQkFDdEIsSUFBSSxJQUFJLEdBQVcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUE7Z0JBQ3pDLEtBQUksSUFBSSxDQUFDLEdBQVUsQ0FBQyxFQUFFLE1BQU0sR0FBVyxLQUFLLENBQUMsTUFBTSxFQUFFLENBQUMsR0FBRyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7b0JBQ2xFLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxFQUFFLENBQUMsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUE7b0JBQ3ZDLElBQUcsQ0FBQyxDQUFDLEVBQUU7d0JBQ0gsS0FBSyxHQUFHLE9BQU8sSUFBSSxJQUFJLENBQUMsRUFBRSxDQUFBO3FCQUM3Qjt5QkFBTTt3QkFDSCxLQUFLLElBQUksU0FBUyxJQUFJLElBQUksQ0FBQyxFQUFFLENBQUE7cUJBQ2hDO2lCQUNKO2dCQUNELElBQUksT0FB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