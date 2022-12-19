import express from "express";
import cycleController from "../controllers/cycleController.js";

const Router = express.Router();

Router.route("/cycle")
  .get(cycleController.getAllLocations)
  .post(cycleController.createLocation);

export default Router;