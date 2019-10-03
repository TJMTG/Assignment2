module.exports = function(db, app, ObjectID){
    app.post("/group/update/channel/user", function(req,res){
        console.log("/group/update/channel/user");
        if(!req.body){
            return res.sendStatus(400)
        }
        mongoID = req.body.mongoID
        channelname = req.body.channelname;
        username = req.body.username;
        const collection = db.collection("groups");
        collection.updateOne({_id: ObjectID(mongoID)}, {$push: {"userrs":username}}, (err, result)=>{
            if(err) throw err;
            let message = "Added user '" + username + "' to channel '" + channelname + "'.";
            console.log(message);
            console.log("channelname", channelname);
            console.log("username", username);
            res.send({'ok':true, "message":message});
        })
    });
}