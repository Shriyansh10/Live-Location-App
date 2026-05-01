import { kafkaClient } from "../../common/config/kafka/kafka-client.js";
import { LocationData } from "../../common/config/socket.js";

const producer = kafkaClient.producer();
await producer.connect();

const update = async (data:{socketId:string, data: LocationData}) => {
    await producer.send({
      topic: "location-updates",
      messages: [{
        key: data.socketId,
        value: JSON.stringify(data)
      }]
    });
}

export default update;
