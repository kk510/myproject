const koa = require('koa')
const koaStaticCache = require('koa-static-cache')
const app = new koa()
const moment = require('moment')

let d = moment().format('YYYY年MM月DD日LTS')
console.log(d);

app.use(koaStaticCache('./public', {
        prefix: '/public',
        gzip: true,
        dynamic: true
    }))
    //因为koa对http有过二次封装
const server = require('http').createServer(app.callback());
const users = []
const options = { /* ... */ };
//io的第一个参数接收的是原始http对象
const io = require('socket.io')(server, options);
//升级成io库

io.on('connection', socket => {
    let d = moment().format('YYYY年MM月DD日LTS')

    users.push({
            id: socket.id
        })
        // socket.emit('time', d)
    socket.emit('update', users)
    console.log('有人通过io链接了');
    //通知当前的socket
    socket.emit('time', d)
    socket.emit('hello', `欢迎你${socket.id.substring(1,2)}    ${d}`)
        //通过广播通知给其他的socket
    socket.broadcast.emit('hello', `有新的伙伴${socket.id.substring(1,2)}加入了，我们欢迎他`)

    socket.on('message', data => {
        socket.broadcast.emit('message', `${d} ${socket.id.substring(1,2)}说:${data}`)


    })
});


server.listen(8081);