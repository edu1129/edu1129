const express = require("express");
const path = require("path");
const app = express();

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, "public")));

// Default route to serve admin.html
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "admin.html"));
});

// Export the app (required by Vercel)
module.exports = app;