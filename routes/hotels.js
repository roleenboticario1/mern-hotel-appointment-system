import express from "express";
import {
  createHotel,
  updateHotel,
  deleteHotel,
  getHotel,
  getHotelByID,
  countByCity,
  countByType,
  getHotelRooms,
} from "../controllers/hotel.js";
import { verifyUserIfAdmin } from "../utils/verifyToken.js";

const router = express.Router();

//GET ALL
router.get("/", getHotel);

//CREATE
router.post("/add", verifyUserIfAdmin, createHotel);

//UPDATE
router.put("/update/:id", verifyUserIfAdmin, updateHotel);

//DELETE
router.delete("/delete/:id", verifyUserIfAdmin, deleteHotel);

//GET BY ID
router.get("/find/:id", getHotelByID); //nilagyan ko ng find conflict sa kasunod sa route kase iniisip nya id yun

router.get("/countByCity", countByCity); //katiba nya to sa FE  const { data, loading, error } = useFetch(`/hotels?city=${destination}`);hanapin nalang
router.get("/countByType", countByType);
router.get("/room/:id", getHotelRooms);

export default router;
