module.exports = function(db, app, ObjectID){
    app.post("/group/delete/channel/user", function(req,res){
        console.log("/group/delete/channel/user");
        if(!req.body){
            return res.sendStatus(400)
        }
        mongoID = req.body.mongoID
        channelname = req.body.name;
        const collection = db.collection("groups");
        collection.findOne({_id: ObjectID(mongoID), channels: {$elemMatch: {name:channelname}}},(err, result)=>{
            if(err) throw err;
            let message = "Match for channel '" + channelname + "' found.";
            console.log(message);
            console.log("The name: ", channelname)
            console.log("The result", result);
            //console.log(user);
            res.send({'ok':true, "message":message});
        });
    });
}