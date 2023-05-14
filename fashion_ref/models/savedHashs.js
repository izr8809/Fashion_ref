const DataTypes = require('sequelize');
const { Model } = DataTypes;

module.exports = class SavedHashs extends Model {
  static init(sequelize) {
    return super.init({
      // id가 기본적으로 들어있다.
      hashs: {
        type: DataTypes.STRING(30),
        allowNull: false,
      },
    }, {
      modelName: 'SavedHashs',
      tableName: 'savedHashs',
      charset: 'utf8mb4',
      collate: 'utf8mb4_general_ci', // 이모티콘 저장
      sequelize,
    });
  }
  static associate(db) {
    db.SavedHashs.belongsToMany(db.Reference, { through: 'SavedHashsGroup' });
  }
};