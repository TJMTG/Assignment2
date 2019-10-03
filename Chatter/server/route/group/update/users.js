//This route takes in:
    //
    //
    //

//And does:
    //
    //
    //

//It outputs:
    //
    //
    //

module.exports = function(db, app, ObjectID){
    app.post("/group/update/users", async function(req,res){
        console.log("/group/update/users");
        if(!req.body){
            return res.sendStatus(400)
        }
        mongoID = req.body.mongoID
        name = req.body.name;
        const collection = db.collection("groups");
        collection.update({_id: ObjectID(mongoID)}, {$push: {channels:  {"name": name} }},(err)=>{
            if(err) throw err;
            let message = "User '" + name + "' added to group.";
            console.log(message);
            console.log(user);
            res.send({'ok':true, "message":message});
        });
    });
}