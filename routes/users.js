import express from "express";
import {
  createUser,
  updateUser,
  deleteUser,
  getUser,
  getUserByID,
} from "../controllers/User.js";
import { verifyUser, verifyUserIfAdmin } from "../utils/verifyToken.js";

const router = express.Router();

// router.get("/checkauthentication", verifyToken, (req, res, next) => {
//   res.send("You are logged in!");
// });

// router.get(
//   "/checkauthenticationForAdmin",
//   verifyUserIfAdmin,
//   (req, res, next) => {
//     res.send("You are Admin!");
//   }
// );

//GET ALL
router.get("/", verifyUserIfAdmin, getUser);

//GET BY ID
router.get("/:id", verifyUser, getUserByID);

//CREATE
router.post("/add", verifyUser, createUser);

//UPDATE
router.put("/update/:id", verifyUser, updateUser);

//DELETE
router.delete("/delete/:id", verifyUser, deleteUser);

export default router;
