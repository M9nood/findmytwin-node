const Router = require('koa-router')
const User = new Router()

User.get('/actor',async function(context){
    let data = {
       '0' : {
            'name':'RYU',
            'img':'https://vignette.wikia.nocookie.net/streetfighter/images/0/0e/Ryu-hurricane-ts.gif/revision/latest?cb=20120917180532'
        },
        '1':{
            'name':'KEN',
            'img':'https://vignette.wikia.nocookie.net/streetfightervsmortalkombat/images/7/76/Ken.gif/revision/latest?cb=20110826013056'
        },
        '2':{
            'name':'HUGO',
            'img':'https://vignette.wikia.nocookie.net/streetfighter/images/d/d2/HugoClap.gif/revision/latest?cb=20090713192217'
        },
        '3':{
            'name':'Chun Li',
            'img':'https://thumbs.gfycat.com/NeedyMiniatureFalcon-max-1mb.gif'
        }

    }
    context.body = data
})
User.post('/checkage',async function(context){
    let data = context.request.body
    var d = new Date();
    var n = d.getFullYear()+543;
    if(data.year+20>n) context.body = "child"
    else  context.body = "Adult"
})

User.get('/:name',async function(context){
    context.body = context.params.name
})
User.get('/:name/:age',async function(context){
    let data = {
        name:context.params.name,
        age:context.params.age
    }
    context.body = data
})



module.exports = User