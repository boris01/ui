"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GridLayout = void 0;
const grid_layout_common_1 = require("./grid-layout.common");
const platform_1 = require("@nativescript/core/platform");
class GridLayout extends grid_layout_common_1.Common {
    initNativeView() {
        super.initNativeView();
        this._updateDirection();
    }
    [grid_layout_common_1.isRtlProperty.setNative](isRtl) {
        this.isRtl = isRtl;
        this._updateDirection();
    }
    addChild(view) {
        super.addChild(view);
        if (view.nativeViewProtected) {
            this._updateDirection();
        }
    }
    removeChild(view) {
        super.removeChild(view);
        if (view.nativeViewProtected) {
            this._updateDirection();
        }
    }
    _updateDirection() {
        let ZeroRotation = CATransform3DRotate(CATransform3DIdentity, 0.0, 0.0, 0.0, 0.0);
        let RotationInYAxis180Deg = CATransform3DRotate(CATransform3DIdentity, (180 * Math.PI) / 180.0, 0.0, 1.0, 0.0);
        setTimeout(() => {
            if (this.isRtl) {
                this.nativeViewProtected.layer.transform = RotationInYAxis180Deg;
                this.nativeViewProtected.layer.rasterizationScale = platform_1.Screen.mainScreen.scale;
                for (let viewIndex = 0; viewIndex < this["getChildrenCount"](); viewIndex++) {
                    let NSView = this["getChildAt"](viewIndex);
                    let isRtl = NSView["isRtl"] || false;
                    if (isRtl) {
                        NSView.nativeView.layer.transform = ZeroRotation;
                    }
                    else {
                        NSView.nativeView.layer.transform = RotationInYAxis180Deg;
                        this.nativeViewProtected.layer.rasterizationScale = platform_1.Screen.mainScreen.scale;
                    }
                }
            }
            else {
                this.nativeViewProtected.layer.transform = ZeroRotation;
                for (let viewIndex = 0; viewIndex < this["getChildrenCount"](); viewIndex++) {
                    let NSView = this["getChildAt"](viewIndex);
                    NSView.nativeView.layer.transform = ZeroRotation;
                }
            }
        }, 1);
    }
}
exports.GridLayout = GridLayout;
//# sourceMappingURL=grid-layout.ios.js.map