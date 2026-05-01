import { Server } from "socket.io";
import update from "../../module/Location/kafka-producer.js";

let io:Server;
export type LocationData = { latitude: String; longitude: String, name: String };

export const initIO = (server: any) => {
    io = new Server();
    io.attach(server);

    io.on('connection', (socket) => {
        console.log(`Connection Successfull [SocketId: ${socket.id}`)

        socket.on("client:location:update", (data: LocationData) => {
          update({ socketId: socket.id, data });
        });
        socket.on('client:location:stop', socketId => {
            io.emit('server:location:stop', socketId);
        })
    })
    return io;
}

export const getIO = () => {
    if(!io){
        throw new Error('IO not initialised')
    }
    return io;
}