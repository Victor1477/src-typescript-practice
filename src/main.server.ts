import express from "express";
import { join } from "path";

console.clear();

const app = express();

enum ServerConfiguration {
  PORT = 4202,
  DIRECTORY = "C:/temp/Projects/src-typescript-practice/dist",
}

app.use("/media", express.static(ServerConfiguration.DIRECTORY));

app.use("", (req, res, next) => {
  res.sendFile(join(ServerConfiguration.DIRECTORY, "index.html"));
});

app.listen(ServerConfiguration.PORT, () => {
  console.log(`Listening on port ${ServerConfiguration.PORT}`);
});
