require("dotenv").config();

import * as express from "express";
import  * as mongoose from "mongoose"
import { json } from "body-parser";
import router from "./routes"
import constants from "./utils/constants";
import * as morgan from "morgan"
import * as cors from "cors"
const app = express()
app.use(json())

app.use(morgan("tiny"));
app.use(cors());
app.use("/", router)

app.use(( _req: express.Request, res:express.Response) => {

  res.status(500).send({
    success:false,
    message: constants.STATUS_CODES[500]
  })
})
mongoose.connect(process.env.MONGO_URI as string, {
}, () => {
  console.log("connected to database")
})

const server = app.listen(3000, () => {
  console.log("server is listening on port 3000")
})

process.on("SIGTERM", () => {
  server.close(() => {
    console.log("HTTP server closed")
  })
})