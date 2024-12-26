import express from "express";
 import restRoutes from "../src/routes/restRoutes.js";
import connectDB from "./db/db.js";
// import cors from "cors";
// import bodyParser from "body-parser";
const port = 3000;

const app = express();
app.use(express.json());
// app.use(bodyParser.urlencoded({ extended: true }));

// const allowedOrigins = [
//   "http://localhost:5173",
//   "http://localhost:5174",
//   "http://localhost:5175",
//   "http://localhost:5176",
// ];
// app.use(
//   cors({
//     origin: allowedOrigins,
//     credentials: true,
//   })
// );
app.use("/api", restRoutes);

connectDB()
  .then(() => {
    app.listen(port, () => {
      console.log(`Server is listening at PORT: ${port}`);
    });
  })
  .catch((err) => {
    console.error("Database connection error:", err);
  });
