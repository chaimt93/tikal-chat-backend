const chatRoute = require('./chat');

module.exports = (app) => {
  app.use('/chats', chatRoute);
}
