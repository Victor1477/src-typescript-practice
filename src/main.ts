import express from "express";

console.clear();

const app = express();

enum SERVER_CONFIGURATION {
  PORT = 4202,
}

app.use("/", (req, res, next) => {
  res.send({ message: "Sucess" });
});

app.listen(SERVER_CONFIGURATION.PORT, () => {
  console.log(`Server listening on port ${SERVER_CONFIGURATION.PORT}`);
});
