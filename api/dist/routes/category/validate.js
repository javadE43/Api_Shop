import { body } from "express-validator";
export const validate = new (class Validate {
    create() {
        return [
            body('title')
                .notEmpty()
                .withMessage(""),
            body("metatitle")
                .isEmpty(),
            body("slug")
                .isString()
                .withMessage("")
                .isEmpty(),
            body("content")
                .isEmpty()
                .isLength({ max: 100 })
                .withMessage("")
        ];
    }
})();
//# sourceMappingURL=validate.js.map