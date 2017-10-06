'use strict';

// Creates the user picks table with event_id, matchup, and fighter name
// ============================================================================================
module.exports = (sequelize, DataTypes) => {
    const Picks = sequelize.define('picks',{
        event_id:{
            type: DataTypes.INTEGER,
            allowNull: false
        }, 

        event_name:{
            type: DataTypes.STRING,
            allowNull: false
        },

        fighter: {
            type: DataTypes.STRING,
            allowNull: false
        }
    })
    return Picks;
}
