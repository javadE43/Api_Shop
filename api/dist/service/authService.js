import * as authUser from "../dal/authDal.js";
export const Register = async (payload) => {
    const register = authUser.Register(payload);
    return register;
};
export const login = () => { };
//# sourceMappingURL=authService.js.map