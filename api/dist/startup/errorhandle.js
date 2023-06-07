import logger from "../logger/index.js";
export const logError = function () {
    process.on("uncaughtException", (ex) => {
        logger.error(ex);
        process.exit(1);
    });
    process.on("unhandledRejection", (ex) => {
        logger.error(ex);
        process.exit(1);
    });
};
//# sourceMappingURL=errorhandle.js.map