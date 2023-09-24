"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function default_1(search = '', options = [], caseSensitive = false) {
    if (search)
        return options.filter(({ label }) => caseSensitive ? label.includes(search) : label.toLowerCase().includes(search.toLowerCase()));
    else
        return options;
}
exports.default = default_1;
