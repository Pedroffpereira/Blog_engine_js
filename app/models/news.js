'use strict';
module.exports = (sequelize, DataTypes) => {
  const News = sequelize.define('News', {
    img: DataTypes.STRING,
    text: DataTypes.STRING
  }, {});
  News.associate = function(models) {
    // associations can be defined here
  };
  return News;
};