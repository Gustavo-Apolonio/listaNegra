import DatabaseConnection from "./index.js";
import connection from "./connection.js";

const { tbBlackList } = DatabaseConnection.initModels(connection);

export default class BlackListDatabase {
  async saveItem(item) {
    item = await tbBlackList.create(item);
    return item;
  }

  async listItems() {
    return await tbBlackList.findAll();
  }

  async consultItemById(itemId) {
    const options = {
      where: {
        id_blacklist: itemId,
      },
    };

    const item = (await tbBlackList.findAll(options))[0];

    return item;
  }

  async updateItem(item, newItem) {
    const options = {
      where: {
        id_blacklist: item.id_blacklist,
      },
    };

    await tbBlackList.update(newItem, options);

    item.nm_person = newItem.nm_person;
    item.ds_reason = newItem.ds_reason;
    item.ds_place = newItem.ds_place;
    item.dt_occurred = newItem.dt_occurred;
    item.dt_included = newItem.dt_included;
    item.dt_lastUpdate = newItem.dt_lastUpdate;

    return item;
  }

  async deleteItem(item) {
    const options = {
      where: {
        id_blacklist: item.id_blacklist,
      },
    };

    await tbBlackList.destroy(options);

    return item;
  }
}
