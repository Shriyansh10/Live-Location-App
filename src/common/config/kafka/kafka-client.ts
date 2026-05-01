import { Kafka } from "kafkajs";

export const kafkaClient = new Kafka({
  clientId: "shriyansh",
  brokers: [process.env.KAFKA_BROKER!],
  ssl: {
    ca: [process.env.KAFKA_CA!]
  },
  sasl: {
    mechanism: "plain",
    username: process.env.KAFKA_USERNAME!,
    password: process.env.KAFKA_PASSWORD!,
  },
});
