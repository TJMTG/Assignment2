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
    app.post("/group/delete/channel", function(req,res){
        console.log("/group/delete/channel");
        if(!req.body){
            return res.sendStatus(400)
        }
        const collection = db.collection("groups");
        let query = {_id: ObjectID(req.body.mongoID)};
        let values = { $pull: { channels: {"name": req.body.name} }};
        console.log("::::", query, values)
        console.log("the req body: ", req.body)
        collection.findOne(query, (err, results)=>{
            console.log("The results::", results);
        })
        collection.updateOne(query, values, (err, results)=>{
            if(err) throw err;
            let message = "Channel '" + req.body.name + "' removed from group.";
            console.log(message);
            res.send({"ok":true, "message":message});
        });
    });
}