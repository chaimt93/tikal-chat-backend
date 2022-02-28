const express = require ("express");
const {sendMessage,receiveMessage} = require("../controlers/chat");
const router = express.Router();

router.post("/send",sendMessage);
router.get("/receive/:recipient",receiveMessage);

module.exports= router;
