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

const SectionsRender = ({ sections, className }) => {
    const renderSection = (section) => {
        switch (section.type) {
            case "hero":
                return jsxRuntime.jsx(HeroComponent, { section: section });
            case "features":
                return jsxRuntime.jsx(FeaturesComponent, { section: section });
            default:
                return null;
        }
    };
    return (jsxRuntime.jsx("div", { className: `sections-container ${className || ""}`, children: sections.map((section) => (jsxRuntime.jsx("div", { className: `section section-${section.type} ${section.className || ""}`, children: renderSection(section) }, section.id))) }));
};
const HeroComponent = ({ section }) => {
    return (jsxRuntime.jsx("div", { className: "hero-section", style: { backgroundColor: section.backgroundColor }, children: jsxRuntime.jsxs("div", { className: "hero-content", children: [section.image && (jsxRuntime.jsx("div", { className: "hero-image", children: jsxRuntime.jsx("img", { src: section.image, alt: section.title }) })), jsxRuntime.jsxs("div", { className: "hero-text", children: [jsxRuntime.jsx("h1", { className: "hero-title", children: section.title }), section.subtitle && jsxRuntime.jsx("h2", { className: "hero-subtitle", children: section.subtitle }), section.description && jsxRuntime.jsx("p", { className: "hero-description", children: section.description }), jsxRuntime.jsxs("div", { className: "hero-buttons", children: [section.primaryButton && (jsxRuntime.jsx(CustomButton, { text: section.primaryButton.text, url: section.primaryButton.url, variant: section.primaryButton.variant, size: section.primaryButton.size, onClick: section.primaryButton.onClick })), section.secondaryButton && (jsxRuntime.jsx(CustomButton, { text: section.secondaryButton.text, url: section.secondaryButton.url, variant: section.secondaryButton.variant, size: section.secondaryButton.size, onClick: section.secondaryButton.onClick }))] })] })] }) }));
};
const FeaturesComponent = ({ section }) => {
    return (jsxRuntime.jsx("div", { className: "features-section", style: { backgroundColor: section.backgroundColor }, children: jsxRuntime.jsxs("div", { className: "features-content", children: [section.title && jsxRuntime.jsx("h2", { className: "features-title", children: section.title }), section.subtitle && jsxRuntime.jsx("h3", { className: "features-subtitle", children: section.subtitle }), jsxRuntime.jsx("div", { className: "features-grid", children: section.features.map((feature, index) => (jsxRuntime.jsxs("div", { className: "feature-item", children: [feature.icon && (jsxRuntime.jsx("div", { className: "feature-icon", children: jsxRuntime.jsx("span", { children: feature.icon }) })), jsxRuntime.jsx("h3", { className: "feature-title", children: feature.title }), jsxRuntime.jsx("p", { className: "feature-description", children: feature.description })] }, index))) })] }) }));
};

exports.CustomButton = CustomButton;
exports.SectionsRender = SectionsRender;
//# sourceMappingURL=index.js.map
