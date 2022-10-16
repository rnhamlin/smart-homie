const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

//create subjects model
class Subjects extends Model {}

//create fields/columns for subjects model (define schema)
Subjects.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    standard: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "user",
        key: "id",
      },
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: "Subjects",
  }
);

module.exports = Subjects;
