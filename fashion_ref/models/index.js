const hashtag = require('./hashtag');
const image = require('./image');
const post = require('./post');
const user = require('./user');
const workspace = require('./workspace');
const reference = require('./reference');
const savedHashs = require('./savedHashs');
const notification = require('./notification')
const Sequelize = require('sequelize');
const config = require('../config/config.js')['production'];
const db = {};

const sequelize = new Sequelize(config.database, config.username, config.password, config);

db.Hashtag = hashtag;
db.Image = image;
db.Post = post;
db.User = user;
db.Workspace = workspace;
db.Reference = reference;
db.SavedHashs = savedHashs;
db.Notification = notification;

// fs
//   .readdirSync(__dirname)
//   .filter(file => {
//     return (
//       file.indexOf('.') !== 0 &&
//       file !== basename &&
//       file.slice(-3) === '.js' &&
//       file.indexOf('.test.js') === -1
//     );
//   })
//   .forEach(file => {
//     const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
//     db[model.name] = model;
//   });

// Object.keys(db).forEach(modelName => {
//   if (db[modelName].associate) {
//     db[modelName].associate(db);
//   }
// });

Object.keys(db).forEach(modelName => {
  db[modelName].init(sequelize);
})

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});
db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
