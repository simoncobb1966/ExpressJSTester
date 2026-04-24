import express from "express";
import { post } from "./post.mjs";
import { get } from "./get.mjs";
import { getId } from "./getId.mjs";
import bodyParser from "body-parser";
import { returnHtml } from "./returnHtml.mjs";

const app = express();
app.use(bodyParser.json());

app.get("/", get); // localhost:3001/?color1=red&color2=blue
app.post("/", post); // localhost:3001/ with a body of { "name": "simon", "age": "59" }
app.get("/test/:id", getId); // localhost:3001/test/484
app.get("/html", returnHtml);

app.listen(3001, () => console.log("server ready"));
