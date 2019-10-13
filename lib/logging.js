"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let logger = null;
function setLogger(instance) {
    logger = instance;
}
exports.setLogger = setLogger;
function log(...message) {
    if (logger) {
        logger.log(...message);
    }
}
exports.log = log;
