import { body, param, query } from "express-validator";
import { Op } from "sequelize";
import  Role  from "../../models/bo/Role.js";
import User from "../../models/bo/User.js";

interface TestIds {
  success: boolean;
  id: number;
}

export const validate = new (class Validate {
  create() {
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
        .custom((username: string) => {
          return User.findOne({ where: { username: username } }).then((res) => {
            if (res) {
              return Promise.reject("username already in use");
            } else {
              return true;
            }
          });
        }),
      body("email")
        .isEmail()
        .withMessage("The email cannot be empty")
        .custom((email: string) => {
          return User.findOne({ where: { email: email } }).then((res) => {
            if (res) {
              return Promise.reject("E-mail already in use");
            } else {
              return true;
            }
          });
        })
        .matches(
          /(?:[a-z0-9+!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/gi
        )
        .withMessage("Invalid email"),
      body("roleId")
        .isString()
        .withMessage("")
        .notEmpty()
        .withMessage("The roleId cannot be empty")
        .custom((roleId: string) => {
          return Role.findOne({ where: { id: Number(roleId) } }).then((res) => {
            if (res) {
              return true;
            } else {
              return Promise.reject("there is not role");
            }
          });
        })
        .toInt(),
      body("password")
        .notEmpty()
        .withMessage("The password cannot be empty")
        .isLength({ min: 8, max: 30 })
        .withMessage("The password cannot be less than 8 characters or more than 30 characters")
        .custom((password, { req }) => {
          if (req.body.confirmPassword !== password) {
            return Promise.reject("The password does not match");
          } else {
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

  getByIdUser() {
    return [
      param("userId")
        .notEmpty()
        .withMessage("empty")
        .isNumeric()
        .withMessage("invalid ID")
        .custom((userId: number, { req }) => {
          if (!!req.params?.userId === false) {
            return Promise.reject("invalid ID");
          }
          return User.findByPk(userId).then((res) => {
            if (res) {
              return true;
            } else {
              return Promise.reject("invalid Id");
            }
          });
        })
        .toInt(),
    ];
  }
  deleteByIdUser() {
    return [
      param("userId")
        .notEmpty()
        .withMessage("The userId cannot be empty")
        .isNumeric()
        .withMessage("invalid ID")
        .custom((userId: number) => {
          if (!!userId === true) {
            return User.findByPk(userId).then((res) => {
              if (res) {
                return true;
              } else {
                return Promise.reject("invalid Id");
              }
            });
          } else {
            return Promise.reject("INVALID ID");
          }
        }),
    ];
  }

  removeMultipleUsers() {
    return [
      body("userIds")
        .notEmpty()
        .withMessage("not empty userids")
        .isArray()
        .withMessage("only Array")
        .custom(async (userIds: number[]) => {
          const param = userIds ? userIds : null;
          if (!(param instanceof Array)) {
            return Promise.reject("Data must be entered as an array");
          } else if (param.length < 1) {
            return Promise.reject("An empty array is not accepted");
          } else if (
            param.map((ids) => (typeof ids === "number" ? true : false)).filter((b) => b === false)
              .length > 0
          ) {
            return Promise.reject("The values ​​in the array must be numeric");
          } else {
            const users = await User.findAndCountAll({ where: { id: { [Op.in]: param } } });
            if (!!users.count === false) {
              return Promise.reject("invalid Remove MultiUsers");
            } else if (!!users.count && users.count !== param.length) {
              const testIds: TestIds[] = param?.map((id: number, i: number) => {
                if (id !== users.rows[i]?.id) {
                  return {
                    success: false,
                    id,
                  };
                } else {
                  return {
                    success: true,
                    id,
                  };
                }
              });
              const filterId = testIds.filter((id) => id.success === false).map((id) => id.id);
              return filterId.length > 1
                ? Promise.reject(`ERROR There are no users with these IDs:${filterId}`)
                : Promise.reject(`ERROR There is no user with this ID:${filterId}`);
            } else {
              return true;
            }
          }
        }),
    ];
  }

  update() {
    return [
      param("userId")
        .isNumeric()
        .withMessage("invalid ID")
        .custom((userId: number) => {
          if (userId) {
            return User.findByPk(userId).then((res) => {
              if (res) {
                return true;
              } else {
                return Promise.reject("invalid Id");
              }
            });
          } else {
            return Promise.reject("INVALID ID");
          }
        })
        .toInt(),
      body("firstname")
        .isLength({ max: 50 })
        .withMessage("The firstname cannot be more than 50 characters"),
      body("lastname")
        .isLength({ max: 50 })
        .withMessage("The lastname cannot be more than 50 characters"),
      body("username").custom((username: string) => {
        if (!username) {
          return true;
        }
        if (username.trim().length > 50) {
          return Promise.reject("The name cannot be more than 50 characters");
        }
        return User.findOne({ where: { username: username } }).then((res) => {
          if (res) {
            return Promise.reject("username already in use");
          } else {
            return true;
          }
        });
      }),
      body("email").custom((email: string) => {
        if (!email) {
          return true;
        }
        return User.findOne({ where: { email: email } }).then((res) => {
          if (res) {
            return Promise.reject("E-mail already in use");
          } else {
            return true;
          }
        });
      }),
      body("roleId").custom((roleId: string, { req }) => {
        if (!req.body?.roleId) {
          return true;
        } else if (typeof Number(roleId) !== "number") {
          return Promise.reject("invalid role");
        }
        return Role.findOne({ where: { id: Number(roleId) } }).then((res) => {
          if (res) {
            return Number(roleId);
          } else {
            return Promise.reject("there is not role");
          }
        });
      }),
      body("password").custom((password: string, { req }) => {
        if (!password) {
          return true;
        } else if (password.trim().length < 8 || password.trim().length > 32) {
          return Promise.reject(
            "The password cannot be less than 8 characters or more than 30 characters"
          );
        } else if (req.body.confirmPassword !== password) {
          return Promise.reject("The password does not match");
        } else {
          return true;
        }
      }),
      body("mobile")
        .isEmpty()
        .custom((value: string) => {
          if (!value) {
            return true;
          } else if (value.trim().length < 11 || value.trim().length > 11) {
            return Promise.reject(
              "The mobil cannot be less than 11 characters or more than 11 characters"
            );
          } else {
            return true;
          }
        }),
    ];
  }
  pagintionUsers() {
    return [
      query("page").custom((page: number) => {
        if (!page) {
          return true;
        } else if (
          Number.isNaN(Number(page)) === true ||
          Number.isInteger(Number(page)) === false
        ) {
          return Promise.reject("type page only numeric");
        } else if (page && Number(page) < 0) {
          return Promise.reject("type page only integer");
        } else {
          return true;
        }
      }),
      query("size").custom((size: string) => {
        if (!size) {
          return true;
        } else if (
          Number.isNaN(Number(size)) === true ||
          Number.isInteger(Number(size)) === false
        ) {
          return Promise.reject("type size only numeric");
        } else if (size && Number(size) < 0) {
          return Promise.reject("type size only integer");
        } else {
          return true;
        }
      }),
      query("username").custom((username: string) => {
        if (!username) {
          return true;
        } else if (typeof username !== "number" && typeof username !== "string") {
          return Promise.reject("type username only string or number");
        } else {
          return true;
        }
      }),
      query("role").custom((role: string) => {
        if (!role) {
          return true;
        } else if (typeof role !== "string" || Number.isNaN(Number(role)) === false) {
          return Promise.reject("type role only string");
        } else {
          return true;
        }
      }),
    ];
  }

  LogOutUser() {
    return [
      param("userId")
        .isNumeric()
        .withMessage("invalid ID")
        .custom((userId: number) => {
          if (userId) {
            return User.findByPk(userId).then((res) => {
              if (res) {
                return true;
              } else {
                return Promise.reject("invalid Id");
              }
            });
          } else {
            return Promise.reject("INVALID ID");
          }
        })
        .toInt(),
    ];
  }
})();
