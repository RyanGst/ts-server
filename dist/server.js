"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app");
const path_1 = require("path");
const dotenv_1 = require("dotenv");
dotenv_1.config({ path: path_1.resolve(__dirname, "../.env") });
let port = process.env.PORT;
app_1.default.app.listen(port, function () {
    console.log(`server running in" + ${port}`);
});
process.once('SIGUSR2', () => app_1.default.closedataBaseConnection('nodemon restart', () => process.kill(process.pid, 'SIGUSR2')));
process.once('SIGINT', () => app_1.default.closedataBaseConnection('connection crashed', () => process.exit(0)));
