'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // // define association here
    User.belongsToMany(models.Doctor,{through:{model:models.Booking,unique:false},uniqueKey:'appoitmentId',foreignKey:'userId'});
    }
  }
  User.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      firstName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      lastName: {
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
      tokens: {
        type: DataTypes.ARRAY(DataTypes.STRING),
      },
      imgPath: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: '/imgs/defaultdoctor.png',
      },
    },
    {
      sequelize,
      modelName: 'User',
      tableName: 'users',
      indexes: [
        // Create a unique index on email
        {
          unique: true,
          fields: ['email'],
        },
      ],
    }
  );
  return User;
};
