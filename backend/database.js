const mongodb = require('mongodb');

const MongoClient = mongodb.MongoClient;
const mongoDbUrL='mongodb+srv://Tarun:0rp9sms3cwaOfAvN@cluster0.sgbuymx.mongodb.net/?retryWrites=true&w=majority'

let _db;

const initDb = callback => {
    if(_db)
    {
        console.log('Database is aleady initialized');
        return callback(null,_db);
    }
    MongoClient.connect(mongoDbUrL)
    .then(client =>{
        _db = client;
        callback(null,_db);
    })
    .catch(err=>{
        callback(err);
    })
};
const getDb = () =>{

    if(!_db)
    {
        throw Error('DataBase not initialized');
    }
    return _db
}


module.exports={
    initDb,
    getDb
}