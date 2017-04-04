'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Rapid2 = require('./../Rapid');

var _Rapid3 = _interopRequireDefault(_Rapid2);

var _lodash = require('lodash.defaultsdeep');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var authConfig = {
    auth: {
        routes: {
            login: 'login',
            logout: 'logout',
            auth: 'auth'
        },

        methods: {
            login: 'post',
            logout: 'post',
            auth: 'get'
        },

        authPrefix: false
    }
};

var Auth = function (_Rapid) {
    _inherits(Auth, _Rapid);

    function Auth(config) {
        _classCallCheck(this, Auth);

        config = (0, _lodash2.default)(config, authConfig);
        config.modelName = config.modelName ? config.modelName : 'auth';

        return _possibleConstructorReturn(this, (Auth.__proto__ || Object.getPrototypeOf(Auth)).call(this, config));
    }

    _createClass(Auth, [{
        key: 'login',
        value: function login(credentials) {
            return this[this.authPrefix].withParams(credentials).buildRequest(this.config.auth.methods.login, this.config.auth.routes.login);
        }
    }, {
        key: 'logout',
        value: function logout() {
            return this[this.authPrefix].buildRequest(this.config.auth.methods.logout, this.config.auth.routes.logout);
        }
    }, {
        key: 'check',
        value: function check() {
            return this[this.authPrefix].buildRequest(this.config.auth.methods.auth, this.config.auth.routes.auth);
        }
    }, {
        key: 'authPrefix',
        get: function get() {
            return this.config.auth.authPrefix ? 'model' : 'any';
        }
    }]);

    return Auth;
}(_Rapid3.default);

exports.default = Auth;