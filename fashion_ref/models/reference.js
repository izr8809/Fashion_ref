const DataTypes = require('sequelize');
const { Model } = DataTypes;

module.exports = class Reference extends Model {
  static init(sequelize) {
    return super.init({
      // id가 기본적으로 들어있다.
      name: {
        type: DataTypes.STRING(30),
        allowNull: false,
      },
    }, {
      modelName: 'Reference',
      tableName: 'references',
      charset: 'utf8mb4',
      collate: 'utf8mb4_general_ci', // 이모티콘 저장
      sequelize,
    });
  }
  static associate(db) {
    db.Reference.hasMany(db.Post); 
    db.Reference.belongsTo(db.Workspace);  
    db.Reference.belongsToMany(db.Hashtag, { through: 'refTags' });
    db.Reference.belongsToMany(db.SavedHashs, { through: 'SavedHashsGroup' });
  }
};