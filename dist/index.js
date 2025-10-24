'use strict';

var jsxRuntime = require('react/jsx-runtime');

function r(e){var t,f,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e)){var o=e.length;for(t=0;t<o;t++)e[t]&&(f=r(e[t]))&&(n&&(n+=" "),n+=f);}else for(f in e)e[f]&&(n&&(n+=" "),n+=f);return n}function clsx(){for(var e,t,f=0,n="",o=arguments.length;f<o;f++)(e=arguments[f])&&(t=r(e))&&(n&&(n+=" "),n+=t);return n}

const CustomButton = ({ children, variant = "primary", size = "medium", fullWidth = false, disabled = false, onClick }) => {
    const buttonClasses = clsx("btn", `btn-${variant}`, {
        "btn-small": size === "small",
        "btn-large": size === "large",
        "btn-full-width": fullWidth,
    });
    return (jsxRuntime.jsx("button", { className: buttonClasses, onClick: onClick, disabled: disabled, children: children }));
};

exports.CustomButton = CustomButton;
//# sourceMappingURL=index.js.map
