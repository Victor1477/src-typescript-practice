import express from "express";
import config from "./config.js";
import path from "path";

const app = express();

app.use("/", (req, res, next) => {

    res.sendFile(path.join(config.dist_dir, "index.html"))
})

app.listen(config.port, () => {
    console.log(`Server listening on port ${config.port}`)
})