require('./sourcemap-register.js');
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const lodash_1 = require("lodash");
const replaceKeys = (obj, replaceValues) => {
    for (const [key, value] of Object.entries(obj)) {
        if ((0, lodash_1.isObject)(value)) {
            replaceKeys(value, replaceValues);
        }
        else {
            if (replaceValues[value]) {
                (0, lodash_1.set)(obj, key, replaceValues[value]);
            }
        }
    }
    return obj;
};
const updateJson = (obj, replaceValues) => {
    return replaceKeys(obj, replaceValues);
};
exports.default = updateJson;
//# sourceMappingURL=update-json-values.js.map