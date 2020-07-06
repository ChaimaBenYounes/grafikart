import { Response, Request } from "express"
import express from "express"


export default class Server {
    readonly port:number

    constructor (port:number){
        this.port = port
    }

    start(){
        const app = express()
        app.get('/', function(request: Request, response:Response){
                response.send('Hello every body')
        })
        app.listen(this.port, function(){
            console.log('serveur démarré')
        })
    }
}