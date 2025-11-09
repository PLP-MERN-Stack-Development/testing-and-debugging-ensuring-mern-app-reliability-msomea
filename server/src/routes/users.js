const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.json([
    { username: "serverUser1" },
    { username: "serverUser2" },
  ]);
});

module.exports = router;
