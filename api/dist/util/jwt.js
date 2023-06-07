import jwt from "jsonwebtoken";
export const createAccessToken = (username, role) => {
    const accessToken = jwt.sign({
        userInfo: { username, role },
    }, process.env.SECRET_ACCESSTOKEN, { expiresIn: "30s" });
    return accessToken;
};
export const createRefreshToken = (username, role) => {
    const refreshToken = jwt.sign({
        userInfo: { username, role },
    }, process.env.SECRET_REFRESHTOKEN, { expiresIn: "1d" });
    return refreshToken;
};
//# sourceMappingURL=jwt.js.map