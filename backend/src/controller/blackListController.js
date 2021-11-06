import { Router } from "express";
import BlackListService from "../service/blackListService";
import BlackListConverter from "../utils/blackListConverter";
import Error from "../models/res/errorModel";

const router = new Router();
const srv = new BlackListService();
const cnv = new BlackListConverter();

router.post("/create", async (request, response) => {
  try {
  } catch (error) {
    response.status(400).send(new Error(400, error));
  }
});

router.get("/read", async (request, response) => {
  try {
  } catch (error) {
    response.status(400).send(new Error(400, error));
  }
});

router.put("/update/:id", async (request, response) => {
  try {
  } catch (error) {
    response.status(400).send(new Error(400, error));
  }
});

router.delete("/delete/:id", async (request, response) => {
  try {
  } catch (error) {
    response.status(400).send(new Error(400, error));
  }
});

export default router;
