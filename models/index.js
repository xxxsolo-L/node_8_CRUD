'use strict';

import User from './user.js';
import Post from './post.js';

// Связь One-to-One
// User.hasOne(Post,{foreignKey:'userId',as:"post"});//Это определяет связь "один пользователь имеет один пост".
// Post.belongsTo(User,{foreignKey: 'userId', as:'user'});//каждый пост принадлежит одному пользователю

// Связь One-to-Many
//User.hasMany(Post, {foreignKey: 'userId', as: 'posts'});//Эта строка определяет связь "один пользователь имеет много постов".
//Post.belongsTo(User, {foreignKey: 'userId', as: 'users' });// каждый пост принадлежит одному пользователю

// Связь Many-to-Many
User.belongsToMany(Post, {through: 'UserPosts', as: 'posts', foreignKey: 'userId'});// Эта строка создает связь Many-to-Many между `User` и `Post`, используя промежуточную таблицу `UserPosts`. Поле `userId` в этой таблице связывается с `id` пользователя.
Post.belongsToMany(User, {through: 'UserPosts', as: 'users', foreignKey: 'postId'});// Это зеркальная ассоциация, связывающая посты с пользователями через ту же промежуточную таблицу, где `postId` связывается с `id` поста.


    export { User, Post };

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const process = require('process');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];
const db = {};

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

fs
  .readdirSync(__dirname)
  .filter(file => {
    return (
      file.indexOf('.') !== 0 &&
      file !== basename &&
      file.slice(-3) === '.js' &&
      file.indexOf('.test.js') === -1
    );
  })
  .forEach(file => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;

