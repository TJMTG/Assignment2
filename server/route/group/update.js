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

module.exports = function(db, app){
    app.post("/group/update", async function(req,res){
        console.log("/group/update");
        if(!req.body){
            return res.sendStatus(400)
        }
        oldUsername = req.body.oldUsername;
        //userObjectID = req.body.userObjectID;
        user = req.body.user;
        const collection = db.collection("groups");
        let count = await collection.find({"username":user.username}).count();
        if(count == 0){
            //_id:ObjectId(userObjectID)
            collection.updateOne({username:oldUsername},{$set:{username: user.username, password:user.password, role: user.role}},(err)=>{
                if(err) throw err;
                let message = "User '" + user.username + "' updated.";
                console.log(message);
                //console.log(user);
                res.send({'ok':true, "message":message});
            })
        } else {
            let message = "User with that username already exists.";
            console.log(message);
            res.send({"ok":false, "message":message})
        }
    });
}