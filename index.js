const Koa = require('koa')
const Router = require('koa-router')
const bodyParser = require('koa-bodyparser')
const User = require('./app/api/game')
const App = new Koa()
const router = new Router()
const cors = require('koa2-cors')

App.use(bodyParser())
App.use(cors())




router.use('/user',User.routes())
App.use(router.routes())
App.use(router.allowedMethods())

// App.use(async ctx => {
//     ctx.body = 'Hello World 5'
// })

App.listen(3000)