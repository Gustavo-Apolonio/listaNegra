import BlackListDatabase from "../database/blackListDatabase.js";
const db = new BlackListDatabase();

export default class BlackListService {
  #verifyItem(item) {
    if (item.nm_person === "") throw "Person's name cannot be empty!";
    if (item.nm_person.length > 100)
      throw "Person's name cannot contains more than 100 characters.";
    if (item.ds_reason !== null) {
      if (item.ds_reason.length > 200)
        throw "The reason cannot contains more than 200 characters.";
    }
    if (item.ds_place !== null) {
      if (item.ds_place.length > 100)
        throw "Place's name cannot contains more than 100 characters.";
    }
    if (item.dt_occurred !== null) {
      if (item.dt_occurred > new Date())
        throw "The occurred date cannot be in the future; people can change every time!";
    }
  }

  async saveItem(item) {
    this.#verifyItem(item);
    item = await db.saveItem(item);
    return item;
  }

  async listItems() {
    return await db.listItems();
  }

  #verifyItemId(itemId) {
    if (itemId <= 0) throw "Black List Item not registered in system!";
  }

  async consultItemById(itemId) {
    this.#verifyItemId(itemId);

    const item = await db.consultItemById(itemId);

    return item;
  }

  async updateItem(item, newItem) {
    this.#verifyItem(newItem);

    item = await db.updateItem(item, newItem);

    return item;
  }

  async deleteItem(item) {
    item = await db.deleteItem(item);

    return item;
  }
}
