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
    app.post("/user/retrieve/login",function(req,res){
        console.log("/user/retrieve/login");
        if(!req.body){
            return res.sendStatus(400)
        }
        let username = req.body.username.toString();
        let password = req.body.password.toString();
        let collection = db.collection("users");
        collection.find({"username":username, "password":password}).toArray((err, results)=>{
            if(err) throw err;
            if(results.length == 1){
                let message = "Match for user '" + username + "' found.";
                console.log(message);
                //console.log(results);
                res.send({"ok":true, "message":message, "results":results});
            } else {
                let message = "Login failed. No match found.";
                console.log(message);
                res.send({"ok":false, "message":message});
            }
        });
    });
}