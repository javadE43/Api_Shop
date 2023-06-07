import jwt from "jsonwebtoken";

interface Role {
    role: string;
    permission: number;
}

//createAccessToken
export const createAccessToken = (username: string, role: Role) => {
  const accessToken = jwt.sign(
    {
      userInfo: { username, role },
    },
    process.env.SECRET_ACCESSTOKEN,
    { expiresIn: "30s" }
  );
  return accessToken;
};

//createRefreshToken
export const createRefreshToken = (username: string, role: Role) => {
  const refreshToken = jwt.sign(
    {
      userInfo: { username, role },
    },
    process.env.SECRET_REFRESHTOKEN,
    { expiresIn: "1d" }
  );
  return refreshToken;
};

