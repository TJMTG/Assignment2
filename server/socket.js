module.exports = {
  connect: function(app, io, db){
    var messages =[];
    io.on("connect",(socket) => {
      //
      // Update user list
      //
      socket.on("updateUserList",()=>{
        const collection = db.collection("users");
        collection.find({}).toArray((err,data)=>{
          if(err) throw err;
          io.emit("newUserList", data);
        });
      });

      //
      // Update group list
      //
      socket.on("updateGrouplist",()=>{
        const collection = db.collection("groups");
        collection.find({}).toArray((err,data)=>{
          if(err) throw err;
          io.emit("newGrouplist", data);
        });
      });

      //
      // Messages
      //
      socket.on("message",(data)=>{
        if (data){
          messages.push(data);
        }
        if (messages.length > 6){
          messages.shift();
        }
        io.emit("message", messages);
      });

      //
      // Disconnect
      //
      socket.on("disconnect",()=>{
        io.emit("disconnect");
      });
    });
  }
}