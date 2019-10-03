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
    app.post("/group/create",function(req,res){
        console.log("/group/create");
        if(!req.body){
            return res.sendStatus(400)
        }
        group = req.body
        const collection = db.collection("groups");
        collection.find({"name":group.name}).count((err, count)=>{
            if(err) throw err;
            if(count == 0){
                collection.insertOne(group, (err, result)=>{
                    if(err) throw err;
                    let message = "Group '" + group.name + "' added to database.";
                    console.log(message);
                    //console.log(results);
                    res.send({"ok":true, "message":message});
                });
            } else {
                let message = "Group with that name already exists.";
                console.log(message);
                res.send({"ok":false, "message":message})
            }
        });
    });
}