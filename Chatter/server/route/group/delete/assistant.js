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
    app.post("/group/delete/assistant", function(req,res){
        console.log("/group/delete/assistant");
        if(!req.body){
            return res.sendStatus(400)
        }
        const userCollection = db.collection("groups");
        let query = {_id: ObjectID(req.body.mongoID)};
        let values = { $pull: { assistedBy: req.body.name}};
        userCollection.updateOne(query, values, (err, results)=>{
            if(err) throw err;
            let message = "User '" + req.body.name + "' removed from assistants.";
            console.log(message);
            res.send({"ok":true, "message":message});
        });
    });
}