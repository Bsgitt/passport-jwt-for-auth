const express = require("express").Router();
//GET
router.get("/", (req, res, next) => {
  res.send("respond with a resource");
});
//GET PROFILE
router.get("/profile", (req, res, next) => {
  res.send(req.user);
});

module.exports = router;
