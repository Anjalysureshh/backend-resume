const jsonserver = require('json-server')
const server =jsonserver.create()
const router = jsonserver.router()
const middleware= jsonserver.defaults()
const port=3001 || process.PORT
server.use(middleware)
server.use(router)
server.listen(port,()=>{
    console.log('JSON server listerning on port 3001');
    
})



