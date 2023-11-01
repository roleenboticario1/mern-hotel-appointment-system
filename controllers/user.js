import User from "../models/User.js";
//import { createError } from "../utils/error.js";

export const getUser = async (req, res, next) => {
  try {
    const user = await User.find();
    res.status(200).json(user);
  } catch (err) {
    //res.status(500).json(err);
    next(err);
  }
};

export const getUserByID = async (req, res, next) => {
  // const failed = true;
  // if (failed) return next(createError(401, "You are Not Authenticated"));

  try {
    const user = await User.findById(req.params.id);
    res.status(200).json(user);
  } catch (err) {
    //res.status(500).json(err);
    next(err);
  }
};

export const createUser = async (req, res, next) => {
  const newHTML = new User(req.body);
  try {
    const saveUser = await newHTML.save();
    res.status(200).json(saveUser);
  } catch (err) {
    next(err);
  }
};

export const updateUser = async (req, res, next) => {
  try {
    const updateUser = await User.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body, //ipinapasa mo kung ano yung inaupdate mo
      },
      { new: true } //gumamit tayo ni to kase si findByIdAndUpdate nirereturn yung previous na inedit mo sa postman gamit kani to para maupdata pati sa postman not only sa db
    );
    res.status(200).json(updateUser);
  } catch (err) {
    next(err);
  }
};

export const deleteUser = async (req, res, next) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.status(200).json("User has been Deleted!");
  } catch (err) {
    next(err);
  }
};
