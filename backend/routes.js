import cors from "cors";
import blacklist from "./src/controller/blackListController.js";

export default function setRoutes(express, server) {
  server.use(cors());
  server.use(express.json());
  server.use("/", blackList);
}
