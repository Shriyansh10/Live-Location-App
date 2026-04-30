import { getIO } from "../../common/config/socket.js";
import { main } from "../../index.js";

export const emitEvents = (data: any) => {
  let io;
  try {
    io = getIO();
  } catch (error) {
    main();
  }

  if (!io) io = getIO();

  console.log("Clients connected ", io.engine.clientsCount);

  io.emit("server:location:updates", {
    socketId: data.socketId,
    latitude: data.data.latitude,
    longitude: data.data.longitude,
  });
};
