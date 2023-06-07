import logger from "../logger/index.js";
const handlerError = (err, req, res, next) => {
    console.log(req?.hostname, next?.name);
    logger.error(err.message, err);
    res.status(500).json({ message: "(server error) something failed" });
};
export default handlerError;
//# sourceMappingURL=handleError.js.map