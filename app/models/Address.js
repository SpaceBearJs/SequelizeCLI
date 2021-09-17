'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Address extends Model {

    static associate(models) {
      
    }
  };
  Address.init({
    street: {
      type:DataTypes.STRING,
      validate:{
        isAlpha:{
          args:true,
          msg:'Debe solo contener texto'
        },
        notEmpty:{
          args:true,
          msg:'No debe estar vacio'
        }
      }
    }
  }, {
    sequelize,
    modelName: 'Address',
    tableName:'addresses'
  });
  return Address;
};