const DataTypes = require('sequelize');
const { Model } = DataTypes;

module.exports = class Workspace extends Model {
  static init(sequelize) {
    return super.init({
      // id가 기본적으로 들어있다.
      name: {
        type: DataTypes.STRING(30),
        allowNull: false,
      },
      isPremium:{
        type: DataTypes.BOOLEAN,
        allowNull : false,
      },
      code: {
        type: DataTypes.STRING(30),
        allowNull: true,
      },
    }, {
      modelName: 'Workspace',
      tableName: 'workspaces',
      charset: 'utf8mb4',
      collate: 'utf8mb4_general_ci', // 이모티콘 저장
      sequelize,
    });
  }
  static associate(db) {
    db.Workspace.hasMany(db.Reference); 
    db.Workspace.belongsToMany(db.User, { through: 'WorkspaceUser' });
    db.Workspace.belongsToMany(db.User, { through: 'Administrators', as : "WorkspaceAdministrators" });  
  }
};