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
    app.post("/user/update", async function(req,res){
        console.log("/user/update");
        if(!req.body){
            return res.sendStatus(400)
        }

        //userObjectID = req.body.userObjectID;
        user = req.body
        const collection = db.collection("users");
        let check = await collection.find({"username":user.username}).toArray();
        let pass = false;
        if(check.length == 0){
            pass = true;
        }
        if(!pass){
            if(check[0]._id == user.mongoID){
                pass = true;
            }
        }
        if(pass){
            console.log("here");
            collection.updateOne({_id:ObjectID(user.mongoID)},{$set:{username: user.username, password: user.password, role: user.role, image: user.image}},(err, results)=>{
                if(err) throw err;
                let message = "User '" + user.username + "' updated.";
                console.log(message);
                console.log(user);
                res.send({'ok':true, "message":message});
            })
        } else {
            let message = "User with that username already exists.";
            console.log(message);
            res.send({"ok":false, "message":message})
        }
    });
}