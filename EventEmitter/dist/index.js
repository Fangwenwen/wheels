function testA(a, b, c) {
    console.log('这是testA', a, b, c)
}

function testB(a, b) {
    console.log('这是testB', a, b)
}

function testC(c) {
    console.log('这是testC', c)
}

var emitter = new EventEmitter()

emitter.on('demo', testA)
    .on('demo', testA)
    .once('demo2', testA)
    .on('demo2', testB)
    .on('demo', testC)

emitter.emit('demo', [1, 2, 3])
    .emit('demo2', [1, 2, 3])

emitter.off('demo', testC)
emitter.emit('demo', [1, 2, 3])
    .emit('demo2', [1, 2, 3])

emitter.allOff()
emitter.emit('demo')

