import fs from "fs";
import { dirname, join } from "path";
import { fileURLToPath } from "url";
//
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
export const RemoveImage = (path: string | string[] | undefined, error = 0) => {
  if (typeof path === "string" && !!error !== false) {
    const exsistsFile = fs.existsSync(path);
    if (exsistsFile) {
      fs.promises
        .unlink(path)
        .then(() => {
          console.log("DELETE FILE ERORR VALIDATE");
        })
        .catch(() => {
          console.log("ERROR");
          throw new Error("Request Filed")
        });
    }
  } else if (!!error === false && typeof path === "string") {
    const index: number = path.indexOf("uploades");
    const pathImage: string = path.substring(index);
    const exsistsFile = fs.existsSync(join(__dirname, "..", "/public", pathImage));
    if (exsistsFile) {
      fs.promises
        .unlink(join(__dirname, "..", "/public", pathImage))
        .then(() => {
          console.log("DELETE FILE REMOVE USER");
        })
        .catch(() => {
          console.log("ERROR");
          throw new Error("Request Filed")
        });
    }
  } else if (!!error === false && path instanceof Array) {
    path.map((P) => {
      const index: number = P.indexOf("uploades");
      const pathImage: string = P.substring(index);
      const exsistsFile = fs.existsSync(join(__dirname, "..", "/public", pathImage));
      if (exsistsFile) {
        fs.promises
          .unlink(join(__dirname, "..", "/public", pathImage))
          .then(() => {
            console.log("DELETE FILE REMOVE USER");
          })
          .catch(() => {
            console.log("ERROR");
            throw new Error("Request Filed")
          });
      }
    });
  }
};
