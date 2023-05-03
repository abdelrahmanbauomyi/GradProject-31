'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class faq extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  faq.init(
    {
      question: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      answer: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: 'faq',
      tableName: 'faq',
      indexes: [],
    }
  );
  return faq;
};
