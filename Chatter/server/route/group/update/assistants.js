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
    app.post("/group/update/assistants", async function(req,res){
        console.log("/group/update/assistants");
        if(!req.body){
            return res.sendStatus(400)
        }
        mongoID = req.body.mongoID
        name = req.body.name;
        const collection = db.collection("groups");
        collection.updateOne({_id: ObjectID(mongoID)},{$push:{assistedBy: name}},(err)=>{
            if(err) throw err;
            let message = "User '" + name + "' made assistant of group.";
            console.log(message);
            //console.log(user);
            res.send({'ok':true, "message":message});
        })
    });
}