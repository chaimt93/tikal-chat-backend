const {getData, insertData} = require('../dbLayer');
const {userMessagesPath} = require('./constants');

const sendMessage = async (req, res) => {
    try {
        const {sender, recipient, message} = req.body;
        const path = userMessagesPath(recipient);
        const data = {message, sender}
        const {success, error} = await insertData({path, data})
        if (success) res.status(200).send({success});
        else res.status(500).json(error);
    } catch (e) {
        res.status(500).json(e);
    }
};

const receiveMessage = async (req, res) => {
    try {
        const {recipient} = req.params;
        const path = userMessagesPath(recipient);
        const {messages, error} = await getData({path})
        if (messages) res.status(200).send({messages});
        else res.status(500).json(error);
    } catch (e) {
        res.status(500).json(e);
    }
};


module.exports = {
    receiveMessage,
    sendMessage,
}