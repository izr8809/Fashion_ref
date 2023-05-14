const DataTypes = require('sequelize');
const { Model } = DataTypes;

module.exports = class Notification extends Model {
  static init(sequelize) {
    return super.init({
      // id가 기본적으로 들어있다.
      From: {
        type: DataTypes.INTEGER,
        allowNull : false,
      },
      content: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      workspaceId: {
        type: DataTypes.INTEGER,
        allowNull : false,
      },
      notitype :{
        type: DataTypes.INTEGER,
        allowNull : false,
      },
    }, {
      modelName: 'Notification',
      tableName: 'notification',
      charset: 'utf8mb4',
      collate: 'utf8mb4_general_ci', // 이모티콘 저장
      sequelize,
    });
  }
  static associate(db) {
    db.Notification.belongsToMany(db.User, { through: 'userNotification' });  
  }
};