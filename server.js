var express = require('express');
var app = express();
const {MongoClient} = require('mongodb');
const uri = 'mongodb+srv://admin:admin@cluster0.ofy6jil.mongodb.net/?retryWrites=true&w=majority';
const client = new MongoClient(uri);

app.use(express.static(__dirname+'/public'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const cardList = [
    {
        title: "Tea",
        image: "images/Tea.jpg",
        link: "About coffee",
        description: "Demo desciption about coffee"
    },
    {
        title:"Icecream",
        image: "images/Icecream.jpg",
        link: "About Icecream",
        description: "Demo desciption about Icecream"
    }
];

function dbConnection(collectionName) {
    client.connect(err => {
        dbCollection = client.db().collection(collectionName);
        if(!err) {
            console.log('DB connected');
            console.log(dbCollection);
        } else {
            console.log(err)
        }
    });
}

app.post('/api/cats',(req,res) => {
       let cat = req.body;
       insert(cat, (err, result) => {
        if(err){
            res.json({statusCode: 400, message: err});

        } else{
            res.json({statusCode: 200, data: result, message: 'Tea Successfully added'});
        }
       }) ;
    });

    app.get('/api/cats',(req,res) => {
        getAllCats((err, result) => {
            if(err){
                res.json({statusCode: 400, message: err});
            } else{
                res.json({statusCode: 200, data: result, message: 'Successful'});
            }
        });
    });

function insert(cat, callback){
    dbCollection.insert(cat, callback);
}

function getAllCats(callback) {
    dbCollection.find().toArray(callback);
}

    var port = process.env.port|| 3000;
    app.listen(port,()=>{
        console.log('App listening to: ' + port)
        dbConnection('Cats')
    });

