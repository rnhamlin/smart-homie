const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

//create Assignmemts model
class Assignments extends Model {}

//create fields/columns for Assignments model (define schema)
Assignments.init(
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
    curricula_id: {
        type: DataTypes.STRING,
        allowNull: true
    },
    grade: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    subject_id: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    thisWeek: {
        type: DataTypes.BOOLEAN,
        allowNull: true
    },
    completed: {
        type: DataTypes.BOOLEAN,
        allowNull: false
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
        modelName: 'post'
    }
);

module.exports = Assignments;