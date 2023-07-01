export const ConfigUploadeMutiFiles = (req, res, next) => {
    console.log(res.charset);
    const files = req.files;
    if (files["imageproduct"]?.length > 0) {
        const file = files["imageproduct"].map((file) => {
            let data = file.path.replace(/\\/g, "/");
            const index = data.indexOf("uploades");
            const images = data.substring(index);
            return (`${process.env.HOSTNAME}:${process.env.PORT}/${images}`);
        });
        req.body.images = JSON.stringify(file);
    }
    else {
        req.body.images = null;
    }
    next();
};
//# sourceMappingURL=configUplodeMultiFiles.js.map