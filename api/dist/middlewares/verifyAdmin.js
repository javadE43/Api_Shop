const verifyAdmin = (req, res, next) => {
    const role = req.role;
    if (!role || typeof req.role !== 'number') {
        res.status(401);
        return;
    }
    else if (role === 30) {
        next();
    }
    else {
        res.status(400);
    }
};
export default verifyAdmin;
//# sourceMappingURL=verifyAdmin.js.map