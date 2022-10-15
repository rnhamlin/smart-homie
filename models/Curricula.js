const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

//create curricula model
class Curricula extends Model {}

//create fields/columns for curricula model (define schema)
Curricula.init(
    {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    subject_id: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    user_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'user',
            key: 'id'
        }
    }
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'Curricula'
    }
);

module.exports = Curricula;