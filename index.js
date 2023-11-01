import express from "express"; //but if u use this add "type" : "module" in package.json
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRoute from "./routes/auth.js";
import usersRoute from "./routes/users.js";
import hotelsRoute from "./routes/hotels.js";
import roomsRoute from "./routes/rooms.js";
import cookieParser from "cookie-parser";
import cors from "cors";

const app = express();
dotenv.config();

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
    console.log("connected to mongoo DB!");
  } catch (error) {
    throw error;
  }
};

//ikokonect kalang again and again kapag mangyari sa db like nadelete or else
mongoose.connection.on("diconnected", () => {
  console.log("mongoDB disconnected");
});
mongoose.connection.on("connected", () => {
  console.log("mongoDB connected");
});

//middlewares
app.use(cors());
app.use(cookieParser());
app.use(express.json());

app.use("/api/auth", authRoute);
app.use("/api/users", usersRoute);
app.use("/api/hotels", hotelsRoute);
app.use("/api/rooms", roomsRoute);

app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "Something Went Wrong";
  return res.status(errorStatus).json({
    success: false,
    status: errorStatus,
    message: errorMessage,
    stack: err.stack,
  });
});

app.listen(8800, () => {
  connect();
  console.log("connected to backend!");
});

// ========== READ THIS ================ //

//const express = require("express"); //you can use this structure
// import express from "express"; //but if u use this add "type" : "module" in package.json
//Note : To start application add this to "start" : "node index.js" package.json ipapalit to sa "test" inder ng  "scripts"
//after this run npm start
//install npm add nodemon para pag may changes di mo na need yung npm start once lang
//replace  "start" : "node index.js" to  "start" : "nodemon index.js"
//install npm add dotenv to connect your .env file for db connection also
//install npm add mongoose
//instal npm add bcryptjs -- https://www.npmjs.com/package/bcryptjs
//install npm add jsonwebtoken
//to generate secret key =  openssl rand -base64 23
//install npm add cookie-parser == to setting token to cookie
//install npm add cors if u dont want use   "proxy": "http://localhost:8800/api" in FE under pakage.json
