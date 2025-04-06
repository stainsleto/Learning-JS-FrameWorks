import express from "express";

const app = express();
import { BACKEND_URL } from "@repo/common/config";

console.log(BACKEND_URL);
app.get("/", (req, res) => {
  res.json({
    message: "hello this is a base route",
  });
});

app.listen(3002, () => {
  console.log("this is running in the port 3002");
});
