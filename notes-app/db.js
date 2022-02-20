const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;

const dbclient = MongoClient.connect(
    'mongodb://127.0.0.1:27017',
    {useNewUrlParser:true},
)
module.exports = {
    client:dbclient
};