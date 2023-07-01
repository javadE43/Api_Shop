export const cookieAuth = (res, refreshToken) => {
    res.cookie("shop", refreshToken, {
        httpOnly: true,
        sameSite: "lax",
        maxAge: 1000 * 60 * 60 * 24,
    });
};
export const cookieCart = (res, tokenCart) => {
    res.cookie("cart", tokenCart, {
        httpOnly: true,
        sameSite: "lax",
        maxAge: 1000 * 60 * 60 * 24,
    });
};
export const deleteCookie = (res, name) => {
    res.clearCookie(name, {
        httpOnly: true,
        sameSite: "lax",
        maxAge: 1000 * 60 * 60 * 24,
    });
};
//# sourceMappingURL=configCookie.js.map