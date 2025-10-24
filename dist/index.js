'use strict';

var jsxRuntime = require('react/jsx-runtime');

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise, SuppressedError, Symbol, Iterator */


function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};

function r(e){var t,f,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e)){var o=e.length;for(t=0;t<o;t++)e[t]&&(f=r(e[t]))&&(n&&(n+=" "),n+=f);}else for(f in e)e[f]&&(n&&(n+=" "),n+=f);return n}function clsx(){for(var e,t,f=0,n="",o=arguments.length;f<o;f++)(e=arguments[f])&&(t=r(e))&&(n&&(n+=" "),n+=t);return n}

const CustomButton = (_a) => {
    var { variant = "black", size = "md", shape = "rounded", unstyled, className, text, url, onClick, blank } = _a, props = __rest(_a, ["variant", "size", "shape", "unstyled", "className", "text", "url", "onClick", "blank"]);
    const buttonClasses = clsx("ma-btn", className);
    const buttonElement = (jsxRuntime.jsx("button", Object.assign({ "data-variant": variant, "data-size": size, "data-shape": shape, className: buttonClasses, onClick: onClick }, props, { children: text })));
    if (unstyled) {
        return url ? (jsxRuntime.jsx("a", { href: url, className: className, target: blank ? "_blank" : "_self", children: text })) : (jsxRuntime.jsx("button", Object.assign({ className: className }, props, { children: text })));
    }
    // If URL is provided, wrap in anchor tag for universal compatibility
    if (url) {
        return (jsxRuntime.jsx("a", { href: url, style: { textDecoration: "none", display: "inline-block" }, target: blank ? "_blank" : "_self", children: buttonElement }));
    }
    // Otherwise render as a regular button
    return buttonElement;
};

function Hero({ title, subtitle, description, primaryButtonText, primaryButtonUrl, primaryButtonVariant = "black", secondaryButtonText, secondaryButtonUrl, secondaryButtonVariant = "transparent-black", backgroundColor = "#ffffff", backgroundImage, overlayOpacity = 0.4, textColor, align = "center", minHeight = "500px", className, children, }) {
    const hasBackgroundImage = !!backgroundImage;
    const backgroundStyle = hasBackgroundImage
        ? {
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            position: "relative",
        }
        : {
            backgroundColor,
        };
    const heroClasses = clsx("ma-hero", `ma-hero--${align}`, className);
    const textColorStyle = textColor ? { color: textColor } : {};
    return (jsxRuntime.jsxs("div", { className: heroClasses, style: Object.assign(Object.assign({ minHeight }, backgroundStyle), textColorStyle), children: [hasBackgroundImage && (jsxRuntime.jsx("div", { className: "ma-hero-overlay", style: { opacity: overlayOpacity } })), jsxRuntime.jsxs("div", { className: "ma-hero-content", children: [subtitle && jsxRuntime.jsx("p", { className: "ma-hero-subtitle", children: subtitle }), jsxRuntime.jsx("h1", { className: "ma-hero-title", children: title }), description && jsxRuntime.jsx("p", { className: "ma-hero-description", children: description }), (primaryButtonText || secondaryButtonText) && (jsxRuntime.jsxs("div", { className: "ma-hero-buttons", children: [primaryButtonText && (jsxRuntime.jsx(CustomButton, { text: primaryButtonText, variant: primaryButtonVariant, url: primaryButtonUrl, size: "lg" })), secondaryButtonText && (jsxRuntime.jsx(CustomButton, { text: secondaryButtonText, variant: secondaryButtonVariant, url: secondaryButtonUrl, size: "lg" }))] })), children] })] }));
}

exports.CustomButton = CustomButton;
exports.Hero = Hero;
//# sourceMappingURL=index.js.map
