'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {

    static associate(models) {
      User.hasOne(models.Address,{
          as:'domicilio'
      })
    }
  };
  User.init({
    name: {
      type:DataTypes.STRING,
      allowNull:false,
      validate:{
        isNull:{
          args:true,
          msg:'No puede ser nulo'
        },
        notNull: {
          args:true,
          msg:'No puede ser nulo'
        },
        isAlpha:{
          args:true,
          msg:'Solo debe tener letras'
        },
        notEmpty:{
          args:true,
          msg:'No puede estar vacio'
        }
      }
    },
    age: {
      type:DataTypes.INTEGER,
      allowNull:false,
      validate:{
        notNull:{
          args:true,
          msg:'No puede ser nulo'
        }
      }
    }
  }, {
    sequelize,
    modelName: 'User',
    tableName: 'users'
  });
  return User;
};