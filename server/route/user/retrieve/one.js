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
    app.post("/user/retrieve/one",function(req,res){
        console.log("/user/retrieve/one");
        if(!req.body){
            return res.sendStatus(400)
        }
        const collection = db.collection("users");
        let query = {username: req.body.username};
        collection.find(query).limit(1).toArray((err, results)=>{
            if(err) throw err;
            let message = "Match for '" + req.body.username + "' found, returning data.";
            console.log(message);
            res.send({"ok":true, "message":message, "results":results})
        });
    });
}