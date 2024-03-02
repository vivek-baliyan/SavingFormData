import express from "express";
import bodyParser from "body-parser";
import moment from "moment";
import { getAllItems } from "./database.js";

const app = express();

app.set("view engine", "ejs");

app.get("/list", async (req, res) => {
  const itemList = await getAllItems();
  res.render("list", { itemList: itemList, moment: moment });
});

app.get("/", function (req, res) {
  res.render("form");
});

app.listen(3000, function () {
  console.log("Server started on port 3000");
});
