import { __rest } from "tslib";
import { jsx as _jsx } from "react/jsx-runtime";
import clsx from "clsx";
import "./CustomButton.css";
const CustomButton = (_a) => {
    var { variant = "black", size = "md", shape = "rounded", unstyled, className, text, url, onClick, blank } = _a, props = __rest(_a, ["variant", "size", "shape", "unstyled", "className", "text", "url", "onClick", "blank"]);
    const buttonClasses = clsx("ma-btn", className);
    const buttonElement = (_jsx("button", Object.assign({ "data-variant": variant, "data-size": size, "data-shape": shape, className: buttonClasses, onClick: onClick }, props, { children: text })));
    if (unstyled) {
        return url ? (_jsx("a", { href: url, className: className, target: blank ? "_blank" : "_self", children: text })) : (_jsx("button", Object.assign({ className: className }, props, { children: text })));
    }
    // If URL is provided, wrap in anchor tag for universal compatibility
    if (url) {
        return (_jsx("a", { href: url, style: { textDecoration: "none", display: "inline-block" }, target: blank ? "_blank" : "_self", children: buttonElement }));
    }
    // Otherwise render as a regular button
    return buttonElement;
};
export default CustomButton;
//# sourceMappingURL=CustomButton.js.map