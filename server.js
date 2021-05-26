const spawn = require('child_process').spawn;
const liveServer = require('live-server')
liveServer.start({
    port: 9000,
    logLevel: 0,
    root: './public'
})
spawn('npx', ['json-server', '--watch', '--port', '9001', 'db.json' ], { stdio: 'inherit'});