var socket = io();

socket.on("connect", function () {
    console.log('Connected to Server');

    socket.emit("createMessage", {
        from: "Ujjal",
        text: "I am Batman"
    });
});

socket.on("disconnect", function () {
    console.log("Disconnected from server");
});

socket.on("newMessage", function(message) {
    console.log("newMessage", message);
});