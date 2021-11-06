import cors from "cors";
import blackList from "./src/controller/blackListController.js";

export default function setRoutes(express, server) {
  server.use(cors());
  server.use(express.json());
  server.use("/", blackList);
}
