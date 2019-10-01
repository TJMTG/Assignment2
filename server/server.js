//
// Import modules
//
const     express = require('express');
const         app = express();

const        http = require('http').Server(app);
const  bodyParser = require('body-parser');
const        cors = require('cors');
const          io = require('socket.io')(http);
const     sockets = require('./socket.js');
const MongoClient = require('mongodb').MongoClient;  
var      ObjectID = require('mongodb').ObjectID;



app.use(bodyParser.urlencoded({ extended:true }));
app.use(bodyParser.json());

app.use(cors());

const url = 'mongodb://localhost:27017';

MongoClient.connect(url, {poolSize:10, useNewUrlParser:true, useUnifiedTopology:true},function(err, client) {
    //
    // Error
    //
    if(err){
        return console.log("!!!!!!!!:", err)
    }

    //
    // Database
    //
    const dbName = 'Assignment2';
    const db = client.db(dbName);
    db.listCollections().toArray(function(err, result) {
        if(err) throw err;
        console.log("the collections: ", result);
    });

    //
    // Socket
    //
    sockets.connect(app, io, db);

    //
    // User service routing (CRUD)
    //
    require("./route/user/create.js")(db,app);
    require("./route/user/retrieve/login.js")(db,app,ObjectID);
    require("./route/user/retrieve/one.js")(db,app,ObjectID);
    require("./route/user/retrieve/all.js")(db, app);
    require("./route/user/update.js")(db,app,ObjectID);
    require("./route/user/delete.js")(db,app,ObjectID);
    

    //
    // Group service routing (CRUD)
    //
    require("./route/group/create.js")(db,app);
    require("./route/group/retrieve/one.js")(db,app,ObjectID);
    require("./route/group/retrieve/all.js")(db,app,ObjectID);
    require("./route/group/update.js")(db,app,ObjectID);
    require("./route/group/delete.js")(db,app,ObjectID);
    
    //
    // Channel service routing (CRUD)
    //
    /*
    require("./route/channel/create.js")(db,app);
    require("./route/channel/retrieve.js")(db,app,ObjectID);
    require("./route/channel/update.js")(db,app,ObjectID);
    require("./route/channel/delete.js")(db,app,ObjectID);
    */
    //
    // Start server on port 3000
    //
    require('./listen.js')(http);
});

//
// Route testing
//
module.exports = app;