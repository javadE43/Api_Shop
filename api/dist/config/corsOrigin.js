import { allowOrigine } from "./allowOrigine.js";
export const corsOrigin = {
    origin: (origin, callback) => {
        if (allowOrigine.indexOf(origin) !== -1 || !origin) {
            callback(null, true);
        }
        else {
            callback(new Error("not allowed by cors"));
        }
    },
    optionsSuccessStatus: 200
};
//# sourceMappingURL=corsOrigin.js.map