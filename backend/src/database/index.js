import { authenticateConnection, initModels } from "../models/_initModels.js";
import connection from "./connection.js";

export default class DatabaseConnection {
  static async connect() {
    return await authenticateConnection(connection);
  }

  static initModels() {
    return initModels(connection);
  }
}
