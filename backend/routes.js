import cors from "cors";
// controller

export default function setRoutes(express, server) {
  server.use(cors());
  server.use(express.json());
  // server.use("/", blackList)
}
