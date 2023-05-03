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
      // define association here
      
    }
  }
  qa.init(
    {
        qaId:{
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER,
        },
        question:{
            type: DataTypes.STRING,
            allowNull: false
        },
        title:{
          type: DataTypes.STRING
          
        },
        answers:{
            type: DataTypes.ARRAY(DataTypes.STRING),
            defaultValue : []
            
        },
        date:{
            type : DataTypes.DATE,
            defaultValue: DataTypes.NOW
        },
        likes: {
            type : DataTypes.INTEGER,
            defaultValue : 0

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
