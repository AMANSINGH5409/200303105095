import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";

//Routes
import authRoute from "./routes/authRoute.js";
import trainRoute from "./routes/trainsRoute.js";

const app = express();
dotenv.config();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use("/user", authRoute);
app.use("/train", trainRoute);

app.listen(process.env.PORT, () => {
  console.log("Server Started......");
});
