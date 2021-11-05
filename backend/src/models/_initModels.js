import _sequelize from "sequelize";
const DataTypes = _sequelize.DataTypes;
import _tbBlackList from "./blackList.js";

function initModels(sequelize) {
  var tbBlackList = _tbBlackList.init(sequelize, DataTypes);

  return {
    tbBlackList,
  };
}

async function authenticateConnection(sequelize) {
  console.log("Trying to access database...");
  await sequelize.authenticate();
  console.info("Database successfully accessed!");
  console.warn("Starting models...");
  initModels(sequelize);
  return true;
}

export { initModels, authenticateConnection };
