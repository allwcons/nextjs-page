(function() {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 6987:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ Home; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: ./components/navbar/navbar.module.css
var navbar_module = __webpack_require__(837);
var navbar_module_default = /*#__PURE__*/__webpack_require__.n(navbar_module);
;// CONCATENATED MODULE: ./components/navbar/navbar.js





const Navbar = () => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("nav", {
    className: (navbar_module_default()).Navbar,
    children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
      className: (navbar_module_default()).navbar__brand,
      children: /*#__PURE__*/jsx_runtime_.jsx("img", {
        src: "https://cdn.glitch.com/95f7c16f-2ead-449a-b1a5-ccc13ce52630%2Ffreefire.jpg?v=1628512794818"
      })
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
      className: (navbar_module_default()).navbar__menus,
      children: [/*#__PURE__*/jsx_runtime_.jsx("li", {
        className: (navbar_module_default()).navbar_navitem,
        children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
          href: "#",
          children: /*#__PURE__*/jsx_runtime_.jsx("a", {
            children: "Home"
          })
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("li", {
        className: (navbar_module_default()).navbar_navitem,
        children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
          href: "#",
          children: /*#__PURE__*/jsx_runtime_.jsx("a", {
            children: "Map"
          })
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("li", {
        className: (navbar_module_default()).navbar_navitem,
        children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
          href: "#",
          children: /*#__PURE__*/jsx_runtime_.jsx("a", {
            children: "News"
          })
        })
      })]
    })]
  });
};

/* harmony default export */ var navbar = (Navbar);
// EXTERNAL MODULE: ./components/reward/style.module.css
var style_module = __webpack_require__(5333);
var style_module_default = /*#__PURE__*/__webpack_require__.n(style_module);
;// CONCATENATED MODULE: ./components/reward/reward.js






function Reward() {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: (style_module_default()).reward__brand,
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        className: (style_module_default()).reward__logo,
        children: /*#__PURE__*/jsx_runtime_.jsx("img", {
          src: "https://cdn.glitch.com/95f7c16f-2ead-449a-b1a5-ccc13ce52630%2Ffreefire.jpg?v=1628512794818"
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: (style_module_default()).reward__tilte,
        children: "FREE FIRE"
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx("p", {
      className: (style_module_default()).paragraph,
      children: "Claim rewards"
    }), /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
      href: "/claim",
      children: /*#__PURE__*/jsx_runtime_.jsx("a", {
        className: (style_module_default()).reward_button,
        children: "Claim"
      })
    })]
  });
}

/* harmony default export */ var reward = (Reward);
;// CONCATENATED MODULE: ./pages/index.js





function Home() {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(navbar, {}), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "imgbar"
    }), /*#__PURE__*/jsx_runtime_.jsx(reward, {})]
  });
}

/***/ }),

/***/ 837:
/***/ (function(module) {

// Exports
module.exports = {
	"Navbar": "navbar_Navbar__39lUJ",
	"navbar__menus": "navbar_navbar__menus__rIEam",
	"navbar_navitem": "navbar_navbar_navitem__As2t_",
	"navbar__brand": "navbar_navbar__brand__1ZXAc"
};


/***/ }),

/***/ 5333:
/***/ (function(module) {

// Exports
module.exports = {
	"reward_button": "style_reward_button__3C2Ed",
	"paragraph": "style_paragraph__25Mim",
	"reward__logo": "style_reward__logo__dNjSb",
	"reward__brand": "style_reward__brand__1fpdy",
	"reward__tilte": "style_reward__tilte__2Mm6J"
};


/***/ }),

/***/ 8417:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router-context.js");;

/***/ }),

/***/ 2238:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");;

/***/ }),

/***/ 9297:
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ 5282:
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-runtime");;

/***/ }),

/***/ 4453:
/***/ (function() {

/* (ignored) */

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, [664], function() { return __webpack_exec__(6987); });
module.exports = __webpack_exports__;

})();