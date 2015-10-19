// open mongo db connection
const co = require('co');
const thunkify = require('thunkify');

// tried using pow-mongoose-fixtures,
// but it fails with capped collections, it calls remove() on them => everything dies
// so rolling my own tiny-loader
module.exports = function* (data, Model) {
    let modelsData = (typeof data == 'string') ? require(data) : data;

    yield Model.remove({});
    yield loadModel(Model, modelsData);

};

// load data into the DB, replace if _id is the same
function *loadModel(Model, data) {
  for (let i = 0; i < data.length; i++) {
    yield Model.create(data[i]);
  }
}

