import * as dotenv from "dotenv";
import express from "express";
import { courses } from "./data/data.js";

dotenv.config();
const app = express();
app.use(express.json());
// '/' endpoint => http://localhost:3000
app.get("/", function (req, res) {
  res.send("Hello world");
});

// '/api/courses' endpoint => http://localhost:3000/api/courses
app.get("/api/courses/:id", function (req, res) {
  let id = parseInt(req.params.id);
  console.log("req.params.id", id);
  let course = courses.find((c) => c.id === id);
  res.send(course);
});

app.post("/api/courses", function (req, res) {
  let courseTitle = req.body.title;

  let newCourse = {
    id: courses.length + 1,
    title: courseTitle,
  };
  courses.push(newCourse);
  res.send(courses);
});

app.listen(process.env.PORT);
