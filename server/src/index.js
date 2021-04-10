import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import morgan from "morgan";
import { generateJWT, validateJWT } from "./jwt";

const app = express();

app.use(cookieParser("secretsuper"));
app.use(cors({ origin: "http://localhost:3000", credentials: true }));
app.use(express.json());
app.use(morgan("dev"));

app.get("/me", (req, res) => {
  console.log(req.cookies);
  const token = req.cookies.jwt;

  if (!validateJWT(token, 1)) {
    return res.status(401).json({ message: "You are not logged in." });
  }

  res.json({ message: "All good." });
});

app.post("/login", (req, res) => {
  res
    .cookie("jwt", generateJWT(1), {
      httpOnly: true,
      sameSite: "lax",
      secure: false,
    })
    .json({ message: "Successfully logged in." });
});

app.listen(5000, () => {
  console.log(`http://localhost:5000`);
});
