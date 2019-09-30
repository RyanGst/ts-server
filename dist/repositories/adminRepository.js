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
const mongoose = require("mongoose");
const adminSchema_1 = require("../schemas/adminSchema");
const bcrypt = require("bcrypt");
class AdminRepository {
    constructor() {
        this.model = mongoose.model('Admin', adminSchema_1.default);
    }
    getById(_id) {
        return this.model.findById(_id);
    }
    create(user) {
        return __awaiter(this, void 0, void 0, function* () {
            const userExists = yield this.model.findOne({ 'username': user.username });
            if (userExists) {
                return 'Username already in use';
            }
            else {
                const hash = yield bcrypt
                    .hash(user.password, 8);
                user.password = hash;
                return this.model.create(user);
            }
        });
    }
    update(_id, user) {
        const updateAdmin = Object.assign({}, user);
        return this.model.findByIdAndUpdate(_id, updateAdmin, { new: true });
    }
    delete(_id) {
        return this.model.findByIdAndRemove(_id);
    }
}
exports.default = new AdminRepository;
