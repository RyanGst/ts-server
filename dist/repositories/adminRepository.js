"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const adminSchema_1 = require("../schemas/adminSchema");
class AdminRepository {
    constructor() {
        this.model = mongoose.model('Admin', adminSchema_1.default);
    }
    getById(_id) {
        return this.model.findById(_id);
    }
    create(user) {
        return this.model.create(user);
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
