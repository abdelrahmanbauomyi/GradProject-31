'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Booking extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Booking.belongsTo( models.Doctor)
      Booking.belongsTo( models.User)
    }
  }
  Booking.init(
    {
      appointmentId: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      startTime: {
        type: DataTypes.DATE,
      },
      endTime: {
        type: DataTypes.DATE,
      },
      status: {
        type: DataTypes.STRING,
        defaultValue: 'pending',
      },
      rating:{
        type : DataTypes.INTEGER
      },
      comment :{
        type: DataTypes.STRING
      },
      roomId:{
        type : DataTypes.STRING
      }
    },
    {
      sequelize,
      modelName: 'Booking',
      tableName: 'booking',
      indexes: [],
    }
  );
  return Booking;
};
