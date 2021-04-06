import jwt from "jsonwebtoken";

export const generateJWT = (userId) => {
  return jwt.sign(
    {
      userId,
    },
    process.env.SECRET_KEY,
    { expiresIn: "7d" }
  );
};

export const validateJWT = (token, userId) => {
  const decodedToken = jwt.verify(token, process.env.SECRET_KEY);
  return decodedToken.userId === userId;
};
