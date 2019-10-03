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
    app.post("/group/update/name", async function(req,res){
        console.log("/group/update/name");
        if(!req.body){
            return res.sendStatus(400)
        }
        group = req.body
        const collection = db.collection("groups");
        let check = await collection.find({"name": group.name}).toArray();
        let pass = false;
        if(check.length == 0){
            pass = true;
        }
        if(!pass){
            if(check[0]._id == group.mongoID){
                pass = true;
            }
        }
        if(pass){
            collection.updateOne({_id:ObjectID(group.mongoID)},{$set:{name: group.name}},(err)=>{
                if(err) throw err;
                let message = "Group '" + group.name + "' updated.";
                console.log(message);
                //console.log(user);
                res.send({'ok':true, "message":message});
            })
        } else {
            let message = "Group with that name already exists.";
            console.log(message);
            res.send({"ok":false, "message":message})
        }
    });
}