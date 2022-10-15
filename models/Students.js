const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

//create Students model
class Students extends Model {}

//create fields/columns for Students model (define schema)
Students.init(
    {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    last_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    first_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    grade: {
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
        modelName: 'Students'
    }
);

module.exports = Students;