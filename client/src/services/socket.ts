import { default as io, Socket } from "socket.io-client"
// import { Socket } from "socket.io-client"
// import io from "socket.io-client"

const URL = "http://localhost:8080"

export const socket: typeof Socket = io(URL, {
    autoConnect: false,
    reconnection: true,
    reconnectionAttempts: 5,
    reconnectionDelay: 1000
})