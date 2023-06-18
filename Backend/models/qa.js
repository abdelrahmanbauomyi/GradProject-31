'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class qa extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      qa.belongsTo(models.User);
      qa.hasMany(models.Answers, { foreignKey: 'qaId' });
    }
  }
  qa.init(
    {
      qaId: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      question: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      title: {
        type: DataTypes.STRING,
      },
      date: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
      },
      likes: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
      },
    },
    {
      sequelize,
      modelName: 'qa',
      tableName: 'qa',
      indexes: [],
    }
  );
  return qa;
};
