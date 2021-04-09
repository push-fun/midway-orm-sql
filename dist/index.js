"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Typeorm = exports.Configuration = void 0;
var configuration_1 = require("./configuration");
Object.defineProperty(exports, "Configuration", { enumerable: true, get: function () { return configuration_1.SQLConfiguration; } });
__exportStar(require("./service/sequelize"), exports);
var typeorm_1 = require("./service/typeorm");
Object.defineProperty(exports, "Typeorm", { enumerable: true, get: function () { return typeorm_1.Typeorm; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL1F1bi9VbmNsdXR0ZXIvbWlkd2F5LWxlcm5hL3BhY2thZ2VzL21pZHdheS1vcm0tc3FsL3NyYy8iLCJzb3VyY2VzIjpbImluZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQSxpREFBbUU7QUFBMUQsOEdBQUEsZ0JBQWdCLE9BQWlCO0FBQzFDLHNEQUFtQztBQUNuQyw2Q0FBMkM7QUFBbEMsa0dBQUEsT0FBTyxPQUFBIn0=