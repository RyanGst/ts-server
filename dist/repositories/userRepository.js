"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const userSchema_1 = require("../schemas/userSchema");
class UserRepository {
    constructor() {
        this.model = mongoose.model('User', userSchema_1.default);
    }
    getAll() {
        return this.model.find({});
    }
    getById(_id) {
        return this.model.findById(_id);
    }
    create(user) {
        return this.model.create(user);
    }
    update(_id, user) {
        const updateUser = Object.assign({}, user);
        return this.model.findByIdAndUpdate(_id, updateUser, { new: true });
    }
    delete(_id) {
        return this.model.findByIdAndRemove(_id);
    }
}
exports.default = new UserRepository;
