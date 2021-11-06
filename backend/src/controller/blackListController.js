import { Router } from "express";
import BlackListService from "../service/blackListService.js";
import BlackListConverter from "../utils/blackListConverter.js";
import Error from "../models/res/errorModel.js";

const router = new Router();
const srv = new BlackListService();
const cnv = new BlackListConverter();

router.post("/create", async (request, response) => {
  try {
    const itemReq = request.body.item;
    let item = cnv.toTable(itemReq);

    item = await srv.saveItem(item);

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
    let items = await srv.listItems();

    if (items.length === 0)
      response.status(404, "There's no items in Black List.");
    else {
      let itemsRes = cnv.toResponses(items);

      response.status(200).send(itemsRes);
    }
  } catch (error) {
    response.status(400).send(new Error(400, error));
  }
});

router.put("/update/:id", async (request, response) => {
  try {
    const itemId = request.params.id || 0;
    const newItemReq = request.body.item;
    let item = await srv.consultItemById(itemId);

    if (!item)
      response
        .status(404)
        .send(new Error(404, "Black List Item not registered in system!"));
    else {
      const newItem = cnv.toTable(newItemReq);

      item = await srv.updateItem(item, newItem);

      let itemRes = cnv.toResponse(item);

      response.status(200).send(itemRes);
    }
  } catch (error) {
    response.status(400).send(new Error(400, error));
  }
});

router.delete("/delete/:id", async (request, response) => {
  try {
    const itemId = request.params.id || 0;

    let item = await srv.consultItemById(itemId);

    if (!item)
      response
        .status(404)
        .send(new Error(404, "Black List Item not registered in system!"));
    else {
      item = await srv.deleteItem(item);

      let itemRes = cnv.toResponse(item);

      response.status(200).send(itemRes);
    }
  } catch (error) {
    response.status(400).send(new Error(400, error));
  }
});

export default router;
