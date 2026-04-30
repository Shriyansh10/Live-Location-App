import { kafkaClient } from "../../common/config/kafka/kafka-client.js";
import "dotenv/config";
import { emitEvents } from "./location-emit.js";


let consumer = kafkaClient.consumer({
  groupId: `socket-server-${process.env.PORT}`,
});
export const startConsumer = () => {
  if(!consumer)
  consumer = kafkaClient.consumer({
    groupId: `socket-server-${process.env.PORT}`,
  });
};

console.log("Consumer connecting...");
await consumer.connect();

console.log("Consumer connection successful");

await consumer.subscribe({
  topics: ["location-updates"],
  fromBeginning: true,
});

await consumer.run({
  eachMessage: async ({ topic, partition, message, heartbeat }) => {
    const data = JSON.parse(message.value?.toString()!);

    console.log(
      `Topic - ${topic}, Partition - ${partition}, KafkaConsumer Data Recieved - ${data.socketId}, ${data.data.latitude}, ${data.data.longitude}`,
    );
    emitEvents(data);
    await heartbeat();
  },
});
