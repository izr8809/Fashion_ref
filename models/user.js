const Sequelize = require('sequelize');

class User extends Sequelize.Model{
  static init(sequelize){
    return super.init({
      name: {
        type: Sequelize.STRING(20),
        allowNull : false,
      },
      password:{
        type: Sequelize.STRING(100),
        allowNull: false, // 필수
      },
      email: {
        type: Sequelize.STRING(100),
        allowNull : false,
        unique : true,
      }
    },{
      sequelize,
      modelName: 'User',
      tableName: 'users',
      charset: 'utf8',
      collate: 'utf8_general_ci', // 한글 저장
    }
    )
  }
  static associate(db){
    db.User.hasMany(db.Post);
    db.User.belongsToMany(db.Post, {through : 'Like', as : 'Liked'}); 
  }
};

module.exports = User;