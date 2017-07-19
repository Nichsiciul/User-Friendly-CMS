const express = require('express');
const fs = require('fs');
var mongo = require('mongodb');
const MongoClient = mongo.MongoClient;
const bodyParser  = require('body-parser');
const app = express();

let db;

app.set('port', (process.env.PORT || 3001));
app.use(bodyParser.json());
// Express only serves static assets in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}

MongoClient.connect('mongodb://user1:database1@ds157112.mlab.com:57112/licenta-2017', (err, database) => {
    if (err) return console.log(err);
    db = database;
    app.listen(app.get('port'), () => {
        console.log(`Find the server at: http://localhost:${app.get('port')}/`); // eslint-disable-line no-console
    });
});

app.post('/api/login', (req, res) => {
    db.collection('users').find({ username: req.body.username }).limit(1).toArray((err, results) => {
        if (err) return console.log(err);

        var isAuthenticated = results.length > 0 && req.body.password == results[0].password;

        res.send({
            authentication: isAuthenticated
        });
    });
});

app.get('/api/header', (req, res) => {
    db.collection('configurations').find({ type: "header" }).limit(1).toArray((err, result) => {
       if (err) return console.log(err);

       res.send(result[0]);

    });
});

app.put('/api/header', (req, res) => {
    var requestData = req.body;
    requestData.type = "header";
    db.collection('configurations').update({ type: "header" }, requestData, {multi:false}, (err, result) => {
        if (err) {
            res.send({success: false});
            console.log(err);
            return false;
        }


        res.send({success: true});
    });
});

app.get('/api/general', (req, res) => {
    db.collection('configurations').find({ type: "general" }).limit(1).toArray((err, result) => {
        if (err) return console.log(err);

        res.send(result[0]);
    });
});

app.put('/api/general', (req, res) => {
    var requestData = req.body;
    requestData.type = "general";
    db.collection('configurations').update({ type: "general" }, requestData, {multi:false}, (err, result) => {
        if (err) {
            res.send({success: false});
            console.log(err);
            return false;
        }

        res.send({success: true});
    });
});

app.get('/api/components', (req, res) => {
    db.collection('configurations').find({ component: true }).toArray((err, result) => {
        if (err) return console.log(err);

        res.send(result);
    });
});

app.put('/api/components', (req, res) => {
    var requestData = req.body;
    requestData.component = true;
    db.collection('configurations').update({ _id: mongo.ObjectId(requestData.unique) }, requestData, {multi:false}, (err, result) => {
        if (err) {
            res.send({success: false});
            console.log(err);
            return false;
        }

        res.send({success: true});
    });
});

app.delete('/api/components', (req, res) => {

    db.collection('configurations').remove({_id: mongo.ObjectId(req.query.id)}).then((err, result) => {
        console.log(err, result);
    });

    //res.send(req);
});



