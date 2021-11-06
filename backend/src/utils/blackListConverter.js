import ItemRes from "../models/res/itemRes.js";

export default class BlackListConverter {
  toTable(itemReq) {
    const item = {
      id_blacklist: 0,
      nm_person: itemReq.name || "",
      ds_reason: itemReq.reason || null,
      ds_place: itemReq.place || null,
      dt_occurred: itemReq.occurred || null,
      dt_included: new Date(),
      dt_lastUpdate: new Date(),
    };

    return item;
  }

  toResponse(itemTable) {
    const item = new ItemRes(
      itemTable.id_blacklist,
      itemTable.nm_person,
      itemTable.ds_reason,
      itemTable.ds_place,
      itemTable.dt_occurred,
      itemTable.dt_lastUpdate
    );

    return item;
  }

  toResponses(itemsTable) {
    const itemsResp = itemsTable.map((item) => this.toResponse(item));
    return itemsTable;
  }
}
