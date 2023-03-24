const Sequelize = require('sequelize');


class Post extends Sequelize.Model{
  static init(sequelize){
    return super.init({
      // id가 기본적으로 들어있다.
      name: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      link: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      brand: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      category: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      season: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      reason: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      // RetweetId
    }, {
      modelName: 'Post',
      tableName: 'posts',
      charset: 'utf8mb4',
      collate: 'utf8mb4_general_ci', // 이모티콘 저장
      sequelize,
    });
  }
  static associate(db){
    db.Post.belongsTo(db.User); // post.addUser, post.getUser, post.setUser
    db.Post.belongsToMany(db.Hashtag, { through: 'PostHashtag' }); // post.addHashtags
    db.Post.hasMany(db.Image); // post.addImages, post.getImages
    db.Post.belongsToMany(db.User, {through : 'Like', as:'Likers'}); 
  }
};

module.exports = Post;