import { kafkaClient } from "../../common/config/kafka/kafka-client.js";
import { LocationData } from "../../common/config/socket.js";
import { getIO } from "../../common/config/socket.js";

const producer = kafkaClient.producer();
await producer.connect();

const update = async (data:{socketId:string, data: LocationData}) => {
    console.log('kafka-producer', data)
    const io = getIO();
    io.emit("server:location:updates", 'Hi from producer');
    await producer.send({
      topic: "location-updates",
      messages: [{
        key: data.socketId,
        value: JSON.stringify(data)
      }]
    });
}

export default update;
