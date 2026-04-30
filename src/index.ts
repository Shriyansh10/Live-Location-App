import http from 'node:http';
import 'dotenv/config'

import app from './app.js';
import { Server } from 'socket.io';


const port = process.env.PORT || 8000;
const io = new Server();

async function main(){

    try{
        const server = http.createServer(app);
        io.attach(server);
        
        server.listen(port, () => {
            console.log(`Server is running at http://localhost:${port} in ${process.env.NODE_ENV} mode`)
            
        })
    }catch(err){
        console.log(err);
    }

}   

main();
