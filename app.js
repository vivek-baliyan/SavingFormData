import express from "express";
import bodyParser from "body-parser";
import moment from "moment";
import { getAllItems } from "./database.js";

const app = express();

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", function (req, res) {
  res.render("home", { pageName: "home" });
});

app.get("/list", async (req, res) => {
  const itemList = await getAllItems();
  res.render("list", { itemList: itemList, moment: moment, pageName: "list" });
});

app.get("/form", function (req, res) {
  res.render("form", { pageName: "form" });
});

app.post("/form", function (req, res) {
  console.log(req.body);

  res.render("form", { pageName: "form" });
});

app.listen(3000, function () {
  console.log("Server started on port 3000");
});
