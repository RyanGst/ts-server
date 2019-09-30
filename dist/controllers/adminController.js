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
const adminRepository_1 = require("../repositories/adminRepository");
const httpStatus = require("http-status");
const sendReponse = function (res, statusCode, data) {
    res.status(statusCode).json({ 'result': data });
};
class AdminController {
    constructor() { }
    getById(req, res) {
        const _id = { id: req.params.id };
        if (!_id) {
            sendReponse(res, httpStatus.OK, 'not found!');
        }
        else {
            adminRepository_1.default
                .getById(req.params.id)
                .then(programs => sendReponse(res, httpStatus.OK, programs))
                .catch(err => console.error.bind(console, `Error ${err}`));
        }
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            adminRepository_1.default
                .create(req.body)
                .then(menus => sendReponse(res, httpStatus.CREATED, menus))
                .catch(err => console.error.bind(console, `Error ${err}`));
        });
    }
    update(req, res) {
        const _id = { id: req.params.id };
        if (req.body.length == 0) {
            return sendReponse(res, httpStatus.NOT_FOUND, 'User not found!');
        }
        adminRepository_1.default
            .update(_id, req.body)
            .then(user => sendReponse(res, httpStatus.OK, user))
            .catch(err => console.error.bind(console, `Error ${err}`));
    }
    delete(req, res) {
        if (!req.params.id) {
            return sendReponse(res, httpStatus.NOT_FOUND, 'User not found!');
        }
        adminRepository_1.default
            .delete(req.params.id)
            .then(user => sendReponse(res, httpStatus.OK, `User  ${user.name} deleted with success!`))
            .catch(err => console.error.bind(console, `Error ${err}`));
    }
}
exports.default = new AdminController();
