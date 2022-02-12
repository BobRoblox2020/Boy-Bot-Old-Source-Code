const app = require('express')();

app.get('/', (req, res) => res.send('Bot Is ready.'));

module.exports = () => {
  app.listen(8080);
}