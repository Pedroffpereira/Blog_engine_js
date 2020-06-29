'use strict';
module.exports = (sequelize, DataTypes) => {
  const News = sequelize.define('News', {
    title: DataTypes.STRING,
    img: DataTypes.STRING,
    text: DataTypes.STRING,
    createdBy: DataTypes.STRING,
    createdAt: DataTypes.DATE
  }, {});
  News.associate = function(models) {
    // associations can be defined here
  };
  return News;
};