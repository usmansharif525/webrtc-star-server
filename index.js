import { start } from 'libp2p-webrtc-star-signalling-server'

const server = await start({
    port: 13579,
    host: '0.0.0.0',
    metrics: false
})
console.log('Signaling server started on: ' + server.info.uri)
let peers = server.peers()
console.log('Peers: ' + peers)
setInterval(() => {
    peers = server.peers()
    console.log('Peers: ' + peers.toString())

}, 10000)
// stop when user presses Ctrl+C
process.on('SIGINT', () => {
    console.log('Stopping server')
    server.stop()
    process.exit()
})