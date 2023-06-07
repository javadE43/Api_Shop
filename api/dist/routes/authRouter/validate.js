import { body } from "express-validator";
import User from "../../models/bo/User.js";
import bcrypt from "bcrypt";
export const validate = new (class Validate {
    register() {
        return [
            body("firstname")
                .isLength({ max: 50 })
                .withMessage("The firstname cannot be more than 50 characters"),
            body("lastname")
                .isLength({ max: 50 })
                .withMessage("The lastname cannot be more than 50 characters"),
            body("username")
                .notEmpty()
                .withMessage("The name cannot be empty")
                .isLength({ max: 50 })
                .withMessage("The name cannot be more than 50 characters")
                .custom((username) => {
                return User.findOne({ where: { username: username } }).then((res) => {
                    if (res) {
                        return Promise.reject("username already in use");
                    }
                    else {
                        return true;
                    }
                });
            }),
            body("email")
                .isEmail()
                .withMessage("The email cannot be empty")
                .custom((email) => {
                return User.findOne({ where: { email: email } }).then((res) => {
                    if (res) {
                        return Promise.reject("E-mail already in use");
                    }
                    else {
                        return true;
                    }
                });
            })
                .matches(/(?:[a-z0-9+!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/gi)
                .withMessage("Invalid email"),
            body("password")
                .notEmpty()
                .withMessage("The password cannot be empty")
                .isLength({ min: 8, max: 30 })
                .withMessage("The password cannot be less than 8 characters or more than 30 characters")
                .custom((password, { req }) => {
                if (req.body.confirmPassword !== password) {
                    return Promise.reject("The password does not match");
                }
                else {
                    return true;
                }
            }),
            body("mobile")
                .notEmpty()
                .withMessage("The mobil cannot be empty")
                .isLength({ min: 11, max: 11 })
                .withMessage("The mobil cannot be less than 11 characters or more than 11 characters"),
        ];
    }
    login() {
        return [
            body("username")
                .isString()
                .notEmpty()
                .withMessage("The name cannot be empty")
                .isLength({ max: 50 })
                .withMessage("The name cannot be more than 50 characters")
                .custom((username) => {
                return User.findOne({ where: { username: username } }).then((value) => {
                    if (value) {
                        return true;
                    }
                    else {
                        return Promise.reject(`there is no user with this (${username})`);
                    }
                });
            }),
            body("email")
                .isEmail()
                .withMessage("The email cannot be empty")
                .custom((email) => {
                return User.findOne({ where: { email: email } }).then((res) => {
                    if (res) {
                        return;
                    }
                    else {
                        return Promise.reject(`there is no user with the (${email})`);
                    }
                });
            })
                .matches(/(?:[a-z0-9+!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/gi)
                .withMessage("Invalid email"),
            body("password")
                .notEmpty()
                .withMessage("The password cannot be empty")
                .isLength({ min: 8, max: 30 })
                .withMessage("The password cannot be less than 8 characters or more than 30 characters")
                .custom(async (password, { req }) => {
                const res = await User.findOne({ where: { username: req.body.username } });
                if (!res) {
                    return Promise.reject("invalid password");
                }
                else {
                    const match = await bcrypt.compare(password, res.password);
                    return match ? true : Promise.reject("invalid password bcrypt");
                }
            }),
        ];
    }
})();
//# sourceMappingURL=validate.js.map