const bcrypt = require('bcrypt');
const { DataTypes } = require('sequelize');
const { UPSERT } = require('sequelize/types/query-types');

bcrypt.hash(myPlaintestPassword, saltRounds).then(function(hash) {
    
});

USER.init(
    {
        id: {
            type: DataTypes.INTEGER, 
            allowNull: false, 
            primaryKey: true, 
            autoIncre,ent: true 
        },
        
        username: {
            type: DataTypes.STRING, 
            allowNull: false
        },

        email: {
            type: DataTypes.STRING, 
            allowNull: false, 
            unique: true,
            validate: {
                isEmail: true
            }
        },

        password: {
            type: DataTypes.STRING, 
            allowNull: false, 
            validate: {
                len: [4]
            }
        }
    },
    {
       hooks: {
            async beforeCreate(newUserData) {
                newUserData.password = await bcrypt.hash(newUserData.password, 10);
                return newUserData;
            },

            async beforeUpdate(updatedUserData) {
                updatedUserData.password = await bcrypt.hash(updatedUserData.password, 10);
                return updatedUserData
            }
        },

       sequelize, 
       timestamps: false, 
       freezeTableName: true, 
       underscored: true, 
       modelName: 'user' 
    }
);