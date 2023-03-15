'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Doctor extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Doctor.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      Dname: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      dob: {
        type: DataTypes.DATE,
      },
      gender: {
        type: DataTypes.STRING,
      },
      mobilenumber: {
        type: DataTypes.STRING,
      },
      confirmed: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      Rating: {
        type: DataTypes.INTEGER,
      },
      speciality: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      sub_specialties: {
        type: DataTypes.STRING,
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      area: {
        type: DataTypes.STRING,
      },
      location: {
        type: DataTypes.STRING,
      },
      Fees: {
        type: DataTypes.INTEGER,
      },
    },
    {
      sequelize,
      modelName: 'Doctor',
      tableName: 'doctors',
      indexes: [
        // Create a unique index on email
        {
          unique: true,
          fields: ['email'],
        },
      ],
    }
  );
  return Doctor;
};