"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.directionProperty = exports.isRtlProperty = exports.Common = void 0;
const absolute_layout_1 = require("@nativescript/core/ui/layouts/absolute-layout");
const ui_1 = require("@nativescript/core/ui");
class Common extends absolute_layout_1.AbsoluteLayout {
}
exports.Common = Common;
exports.isRtlProperty = new ui_1.Property({
    name: "isRtl",
    defaultValue: true,
    valueConverter(v) {
        let lowercase = (v + "").toLowerCase();
        if (lowercase === "true") {
            return true;
        }
        else if (lowercase === "false") {
            return false;
        }
        throw new Error("Invalid boolean: " + v);
    }
});
exports.isRtlProperty.register(Common);
exports.directionProperty = new ui_1.CssProperty({
    name: "direction",
    cssName: "direction",
    defaultValue: "rtl",
    valueConverter: (value) => {
        const val = value.toLocaleLowerCase();
        if (val === "rtl" || val === "ltr") {
            return val;
        }
        throw new Error("Invalid string: " + val);
    }
});
exports.directionProperty.register(ui_1.Style);
//# sourceMappingURL=absolute-layout.common.js.map