import jwt from "jsonwebtoken";

export const generateJWT = (userId) => {
  return jwt.sign(
    {
      userId,
    },
    // process.env.SECRET_KEY,
    "secretsuper",
    { expiresIn: "7d" }
  );
};

export const validateJWT = (token, userId) => {
  const decodedToken = jwt.verify(token, "secretsuper");
  return decodedToken.userId === userId;
};
