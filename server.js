import express from "express";
import cors from "cors";
import authRouter from "./routes/authRouter.js";

const app = express();

//use cors to enable cross origin requests
//Credentials are cookies, authorization headers, or TLS client certificates.
//make credentials: true to support setting and removing cookies from backend
app.use(cors({ credentials: true, origin: true }));

app.use(express.json());

app.use(express.urlencoded({ extended: false }));

app.use("/auth", authRouter);

let PORT = 8000;

app.get("/", (req, res) => res.json({ message: "API is up and running" }));

app.listen(PORT, (req, res) =>
  console.log(`Server is listening on port: ${PORT}`)
);
