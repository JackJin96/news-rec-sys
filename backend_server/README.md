## Install all the requirements
```
pip3 install -r requirements.txt
```

### jsonrpclib-pelix to support python3
Not recommended to install this way. Recommend to use `requirements.txt`
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

### pika
pure python implementation of AMQP 0-9-1 protocol, recommend use `requirements.txt`
```
pip install pika
```

### Pylint
Install Pylint under python3
```
pip3 install pylint
```

Run Pylint using python3
```
python3 -m pylint file_name.py
```