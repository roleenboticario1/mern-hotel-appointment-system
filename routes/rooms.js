import express from "express";
import {
  createRoom,
  updateRoom,
  deleteRoom,
  getRoom,
  getRoomByID,
  updateRoomAvailability,
} from "../controllers/Room.js";
import { verifyUserIfAdmin } from "../utils/verifyToken.js";

const router = express.Router();

//GET ALL
router.get("/", getRoom);

//GET BY ID
router.get("/:id", getRoomByID);

//CREATE
router.post("/add/:hotelId", verifyUserIfAdmin, createRoom);

//UPDATE
router.put("/update/:id", verifyUserIfAdmin, updateRoom);
//router.put("/:id", verifyAdmin, updateRoom);
router.put("/availability/:id", updateRoomAvailability);

//============= Room ID  ============== Hotel ID ========//
//delete/63f039e4ba00054bd9556f14/63ef81a6bac472c1fd840393
//DELETE
router.delete("/delete/:id/:hotelId", verifyUserIfAdmin, deleteRoom);

export default router;
