import express from "express";
import cors from "cors";
import path from "path";
import { initEnvironments, initPostgresConnection } from "./app.init";
import LogHelper from "./helpers/log.helper";
import router from "./routes/index";
const app = express();
initEnvironments();

app.use(cors());
app.use(express.static(path.join(process.cwd(), "public")));
app.use(express.urlencoded({ extended: true, limit: "50mb" }));
app.use(express.json({ limit: "50mb" }));
app.use("/api", router);

setImmediate(async () => {
  try {
    await initPostgresConnection();
    LogHelper.logInfo("Database connected");
  } catch (dbConnectError) {
    let errorMsg = "";
    if (typeof dbConnectError === "string") {
      errorMsg = dbConnectError;
    } else if (dbConnectError && typeof dbConnectError === "object") {
      errorMsg = dbConnectError.toString();
    }
    LogHelper.logError("First start failed to connect to DB", errorMsg);
  }

  app.listen(process.env.APP_PORT, () => {
    LogHelper.logInfo(
      "App listening on",
      `http://localhost:${process.env.APP_PORT}`
    );
  });
});
