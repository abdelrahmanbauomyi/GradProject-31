'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Messages extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  // ! primary key messageID
  Messages.init(
    {
      ID: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      //! sender and reciever are doctor and patient ID
      sender: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      receiver: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      content: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: 'Messages',
      tableName: 'Messages',
      indexes: [{
        unique: false,
        fields:["sender", "receiver"]
      }],
    }
  );
  return Messages;
};
