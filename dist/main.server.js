import express from "express";
import { join } from "path";
console.clear();
const app = express();
var ServerConfiguration;
(function (ServerConfiguration) {
    ServerConfiguration[ServerConfiguration["PORT"] = 4202] = "PORT";
    ServerConfiguration["DIRECTORY"] = "C:/temp/Projects/src-typescript-practice/dist";
})(ServerConfiguration || (ServerConfiguration = {}));
app.use("/media", express.static(ServerConfiguration.DIRECTORY));
app.use("", (req, res, next) => {
    res.sendFile(join(ServerConfiguration.DIRECTORY, "index.html"));
});
app.listen(ServerConfiguration.PORT, () => {
    console.log(`Listening on port ${ServerConfiguration.PORT}`);
});
