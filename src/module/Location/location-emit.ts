import { getIO, LocationData } from "../../common/config/socket.js";
type Data = {
  socketId: string;
  data: LocationData;
};

export const emitEvents = (data: Data) => {
  const io = getIO();

  console.log("Clients connected ", io.engine.clientsCount);

  io.emit("server:location:update", {
    socketId: data.socketId,
    latitude: data.data.latitude,
    longitude: data.data.longitude,
    name: data.data.name,
  });
};
