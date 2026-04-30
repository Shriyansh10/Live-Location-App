import { Kafka } from "kafkajs";

export const kafkaClient = new Kafka({
    clientId: 'shriyansh',
    brokers: ['localhost:9092']
})