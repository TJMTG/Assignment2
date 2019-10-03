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
    app.post("/user/create",function(req,res){
        console.log("/user/create");
        if(!req.body){
            return res.sendStatus(400)
        }
        user = req.body
        const collection = db.collection("users");
        collection.find({"username":user.username}).count((err, count)=>{
            if(err) throw err;
            if(count == 0){
                collection.insertOne(user, (err, result)=>{
                    if(err) throw err;
                    let message = "User '" + user.username + "' added to database.";
                    console.log(message);
                    //console.log(results);
                    res.send({"ok":true, "message":message});
                });
            } else {
                let message = "User with that username already exists.";
                console.log(message);
                res.send({"ok":false, "message":message})
            }
        });
    });
}