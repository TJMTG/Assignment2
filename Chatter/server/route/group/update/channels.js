
module.exports = function(db, app, ObjectID){
    app.post("/group/update/channels", async function(req,res){
        console.log("/group/update/channels");
        if(!req.body){
            return res.sendStatus(400)
        }
        mongoID = req.body.mongoID
        name = req.body.name;
        const collection = db.collection("groups");
        collection.updateOne({_id: ObjectID(mongoID)},{$push:{channels: { "name": name, "userss": [] } }},(err)=>{
            if(err) throw err;
            let message = "Channel '" + name + "' added to group.";
            console.log(message);
            //console.log(user);
            res.send({'ok':true, "message":message});
        });
    });
}