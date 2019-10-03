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
    app.post("/group/retrieve/one",function(req,res){
        console.log("/group/retrieve/one");
        if(!req.body){
            return res.sendStatus(400)
        }
        const collection = db.collection("groups");
        mongoID = req.body.mongoID;
        let query = {_id: new ObjectID(mongoID)};
        collection.find(query).limit(1).toArray((err, results)=>{
            if(err) throw err;
            let message = "Match for '" + JSON.stringify(query) + "' found, returning data.";
            console.log(message);
            res.send({"ok":true, "message":message, "results":results})
        });
    });
}