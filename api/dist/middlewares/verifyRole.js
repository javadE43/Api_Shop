export const verifyRole = (allowRole) => {
    return async (req, res, next) => {
        console.log(req.role);
        console.log(allowRole);
        if (!req.role || typeof req.role !== "number") {
            res.status(401).send("invalid");
            return;
        }
        if (allowRole.includes(req.role)) {
            next();
        }
    };
};
//# sourceMappingURL=verifyRole.js.map