### jsonrpclib-pelix to support python3
```
pip3 install jsonrpclib-pelix
```

### Mongo DB
#### Mongo DB common instructions for ubuntu:
```
sudo service mongod start
mongo   //go start mongodb console
```

Inside MongoDB console:
```
show dbs
show collections
show tables
db.collection_name.count()
db.colleciton_name.find()   //find all documents in the collection
db.dropDatabase()
```

go to `/tmp` file
```
mongoexport --db db_name --collection collection_name --out file_name.json
mongoimport --db db_name --collection collection_name --file file_name.json
```

### pymongo
Not recommended to install this way. Recommend to use `requirements.txt`
```
pip3 install pymongo
```