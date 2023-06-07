import { createLogger, transports, format } from "winston";
const { timestamp, combine, printf, errors, splat } = format;
function buildDevLogger() {
    const logFormat = printf(({ level, message, timestamp, stack, metadata }) => {
        return `${timestamp} ${level}: ${stack || message}.${JSON.stringify(metadata)}`;
    });
    return createLogger({
        transports: [
            new transports.Console({
                format: combine(format.colorize(), splat(), timestamp({ format: "YYYY-MM-DD HH:mm:ss" }), errors({ stack: true }), format.metadata(), logFormat),
            }),
            new transports.File({
                dirname: "logs",
                filename: "logs-error-dev.log",
                format: format.combine(format.json()),
            }),
        ],
        format: combine(timestamp(), errors({ stack: true }), format.metadata()),
    });
}
export default buildDevLogger;
//# sourceMappingURL=dev-logger.js.map