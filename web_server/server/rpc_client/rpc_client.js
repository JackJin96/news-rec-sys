const jayson = require('jayson');

//create a client
const client = jayson.client.http({
    hostname: 'localhost',
    port: 4040
})

//Test rpc helper method
function add(a, b, callback){
    client.request('add', [a, b], function(err, response) {
        if (err) throw err;
        console.log(response);
        callback(response.result);
    });
}

module.exports = {
    add : add
};
