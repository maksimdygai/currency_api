import express from "express";
import { RatesController } from "./rates.controller.js";

const router = express.Router()

router.route("/getRate").get(RatesController.apiGetRate);

export { router };