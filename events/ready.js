module.exports = {
  name: 'ready',
  once: true,
  execute(client) {
    const mongo = require('./mongo')
    mongo()
    client.user.setActivity(':help', { type: 'PLAYING' })
    console.log(`${client.user.tag} Is Ready`)
  }
}