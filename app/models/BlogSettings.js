'use strict';
module.exports = (sequelize, DataTypes) => {
  const BlogSettings = sequelize.define('BlogSettings', {
    name: DataTypes.STRING,
    logo: DataTypes.STRING,
    location: DataTypes.STRING,
    telephone: DataTypes.INTEGER,
    email: DataTypes.STRING
  }, {});
  BlogSettings.associate = function(models) {
    // associations can be defined here
  };
  return BlogSettings;
};