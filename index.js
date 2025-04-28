const express = require("express");
const path = require("path");
const app = express();

// Static files folder
app.use(express.static(path.join(__dirname, "public")));

// Route for /admin.html
app.get("/admin.html", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "admin.html"));
});

// Default route
app.get("/", (req, res) => res.send("Express on Vercel"));

// Server setup
app.listen(3000, () => console.log("Server ready on port 3000."));

module.exports = app;