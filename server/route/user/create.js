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
        if(!req.body){
            console.log();
            return res.sendStatus(400)
        }
        user = req.body
        const collection = db.collection("users");
        collection.find({"username":user.username}).count((err, count)=>{
            if(err) throw err;
            console.log("count: ", count);
            if(count == 0){
                collection.insertOne(user, (err, result)=>{
                    if(err) throw err;
                    console.log("Insert result: ", result);
                    res.send({"ok":true});
                });
            } else {
                let message = "User with that username already exists.";
                console.log(message);
                res.send({"ok":false, "message":message})
            }
        });
    });
}