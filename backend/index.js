import express from "express";
import setRoutes from "./routes.js";
import DatabaseConnection from "./src/database/index.js";

function startServer() {
  const server = express();
  setRoutes(express, server);

  const PORT = process.env.PORT || 5000;
  server.listen(PORT, () =>
    console.info(`...$ API on http://localhost:${PORT}/`)
  );
}

function stopServer(error) {
  console.error("Database cannot be accessed...");
  console.error(`Error occurred => ${error}`);
  console.warn("...$ Closing API");
  process.exit(-1);
}

DatabaseConnection.connect()
  .then(startServer)
  .catch((error) => stopServer(error));
