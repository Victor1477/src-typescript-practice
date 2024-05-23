import express from "express";
import { join } from "path";
console.clear();
const app = express();
var ServerConfiguration;
(function (ServerConfiguration) {
    ServerConfiguration[ServerConfiguration["PORT"] = 4200] = "PORT";
    ServerConfiguration["ROOT_DIR"] = "/opt/projects/src-typescript-practice/dist/app";
})(ServerConfiguration || (ServerConfiguration = {}));
app.use("/", express.static(ServerConfiguration.ROOT_DIR));
app.use("/home", (req, res, next) => {
    res.sendFile(join(ServerConfiguration.ROOT_DIR, "index.html"));
    next();
});
app.use("", (req, res, next) => {
    res.redirect("/home");
    next();
});
app.listen(ServerConfiguration.PORT, () => {
    console.log("Server listening on port: " + ServerConfiguration.PORT);
});
