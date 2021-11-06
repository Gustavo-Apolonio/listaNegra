import { Router } from "express";
import BlackListService from "../service/blackListService";
import BlackListConverter from "../utils/blackListConverter";
import Error from "../models/res/errorModel";

const router = new Router();
const srv = new BlackListService();
const cnv = new BlackListConverter();

router.post("/create", async (request, response) => {
  try {
    const itemReq = request.body.item;
    let item = cnv.toTable(itemReq);

    item = srv.saveItem(item);

    if (item.id_blacklist <= 0)
      response
        .status(404)
        .send(
          new Error(
            404,
            "An error occurred trying to save a new Black List Item."
          )
        );
    else {
      let itemRes = cnv.toResponse(item);

      response.status(200).send(itemRes);
    }
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
