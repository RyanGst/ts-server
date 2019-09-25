"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const jwt = require("jsonwebtoken");
const configs_1 = require("../config/configs");
class Auth {
    constructor() { }
    validate(req, res, next) {
        var token = req.body.token || req.query.token || req.headers['x-access-token'];
        if (token) {
            jwt.verify(token, configs_1.default.secret, function (err, decoded) {
                if (err) {
                    return res.json({ success: false, message: 'Error when authenticating the token!' });
                }
                else {
                    console.log('OK');
                    next();
                }
            });
        }
        else {
            console.log('403 - forbidden');
            return res.status(403).send({
                success: false,
                message: '403 - Forbidden'
            });
        }
    }
    create(req, res, user) {
        return __awaiter(this, void 0, void 0, function* () {
            const token = yield jwt.sign({ username: user.username, userId: user._id }, 'secret', { expiresIn: '10h' });
            return res.json({ success: true, message: 'Auth success', token: token });
        });
    }
}
exports.default = new Auth;
