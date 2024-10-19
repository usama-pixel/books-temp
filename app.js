import express from "express";
import router from "./routes/bookStoreRoutes.js";
import { config } from "dotenv";
config();

import mongoose from "mongoose";
import cors from "cors";

const app = express();
const port = process.env.PORT || 5555;

app.use(express.json());
app.use(cors());
app.use(router);

app.get("/", (req, res) => {
  res.status(200).json({ message: "Home" });
});

mongoose
  .connect(process.env.MONGOOSE_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log(`Connected to Database`);
    app.listen(port, () => {
      console.log(`Server is listening on port: ${port}`);
    });
  })
  .catch((e) => {
    console.log(e);
  });
