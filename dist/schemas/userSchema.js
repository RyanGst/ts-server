"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const UserSchema = new mongoose.Schema({
    name: { type: String },
    age: { type: String }
});
exports.default = UserSchema;
