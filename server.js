const express = require("express");
const multer = require("multer");
const path = require("path");

const app = express();

const upload = multer({
  dest: "uploads/"
});

app.use(express.static("public"));

app.post("/upload", upload.single("file"), (req, res) => {
  res.send("File uploaded successfully");
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
