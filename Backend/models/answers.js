'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Answers extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
        Answers.belongsTo(models.qa , {foreignKey: 'qaId'})
        Answers.belongsTo(models.Doctor)
    }
  }
  Answers.init(
    {
        answerId:{
            primaryKey: true,
            type : DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false

        },
        answerContent:{
          type: DataTypes.STRING

        },

    
    },
    {
      sequelize,
      modelName: 'Answers',
      tableName: 'answers',
      indexes: [],
    }
  );
  return Answers;
};
