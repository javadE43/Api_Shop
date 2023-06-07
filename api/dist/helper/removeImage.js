import fs from "fs";
import { dirname, join } from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
export const RemoveImage = (path, error = 0) => {
    if (typeof path === "string" && !!error !== false) {
        const exsistsFile = fs.existsSync(path);
        if (exsistsFile) {
            fs.promises.unlink(path)
                .then(() => {
                console.log("DELETE FILE ERORR VALIDATE");
            })
                .catch(() => {
                console.log("ERROR");
            });
        }
    }
    else if (!!error === false && typeof path === "string") {
        const index = path.indexOf("uploades");
        const pathImage = path.substring(index);
        const exsistsFile = fs.existsSync(join(__dirname, "..", "/public", pathImage));
        if (exsistsFile) {
            fs.promises.unlink(join(__dirname, "..", "/public", pathImage))
                .then(() => {
                console.log("DELETE FILE REMOVE USER");
            })
                .catch(() => {
                console.log("ERROR");
            });
        }
    }
    else if (!!error === false && path instanceof Array) {
        path.map(P => {
            const index = P.indexOf("uploades");
            const pathImage = P.substring(index);
            const exsistsFile = fs.existsSync(join(__dirname, "..", "/public", pathImage));
            if (exsistsFile) {
                fs.promises.unlink(join(__dirname, "..", "/public", pathImage))
                    .then(() => {
                    console.log("DELETE FILE REMOVE USER");
                })
                    .catch(() => {
                    console.log("ERROR");
                });
            }
        });
    }
};
//# sourceMappingURL=removeImage.js.map