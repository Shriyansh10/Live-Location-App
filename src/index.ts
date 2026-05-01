import http from "node:http";
import "dotenv/config";
import { startConsumer } from "./module/Location/kafka-consumer.js";

import app from "./app.js";
// import {getIO} from "./module/Location/locationUpdate.js";
import { initIO } from "./common/config/socket.js";

const port = process.env.PORT || 8000;

async function main() {
  try {
    const server = http.createServer(app);
    initIO(server);

    server.listen(port, () => {
      console.log(
        `Server is running at http://localhost:${port} in ${process.env.NODE_ENV} mode`,
      );
    });
    startConsumer();
  } catch (err) {
    console.log(err);
  }
}

main();
