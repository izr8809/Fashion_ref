// const DataTypes = require('sequelize');
// const { Model } = DataTypes;

// module.exports = class Workspace extends Model {
//   static init(sequelize) {
//     return super.init({
//       // id가 기본적으로 들어있다.
//       name: {
//         type: DataTypes.STRING(30),
//         allowNull: false,
//       },
//       favorite: {
//         type: DataTypes.STRING(50),
//         allowNull: true,
//       },
//     }, {
//       modelName: 'Workspace',
//       tableName: 'workspaces',
//       charset: 'utf8mb4',
//       collate: 'utf8mb4_general_ci', // 이모티콘 저장
//       sequelize,
//     });
//   }
//   static associate(db) {
//     db.Workspace.belongsToMany(db.Post, { through: 'WorkspacePost' }); 
//     db.Workspace.belongsToMany(db.User, { through: 'WorkspaceUser' }); 
//   }
// };