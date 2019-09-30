"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const AdminSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    email: { type: String },
    password: {
        type: String,
        required: true
    },
    created_at: {
        type: Date,
        required: true,
        default: Date.now
    }
});
exports.default = AdminSchema;
