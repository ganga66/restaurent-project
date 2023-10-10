//1. import json-server
const jsonserver = require('json-server')

//2. Create a server application using jsonserver
const server = jsonserver.create()

//3. Set up path for db.json file
const router = jsonserver.router('db.json')

//4. Return a middleware used by the jsonserver
const middleware = jsonserver.defaults()

//5. Setup a port number
const port = process.env.PORT || 3001

//6. Use in server
server.use(middleware)
server.use(router)

//7. To run the port
server.listen(port,()=>{
    console.log('listening on port '+port);
})


