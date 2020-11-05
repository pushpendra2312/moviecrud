const Sequelize = require("sequelize");
const sequelize = require("../config/db");
const movie = sequelize.define('movies_table', {
    movie_name: {
        allowNULL: false,
        type: Sequelize.STRING
    },
    movie_duration: {
        allowNULL: false,
        type: Sequelize.INTEGER
    },
    movie_rating: {
        allowNULL: false,
        type: Sequelize.INTEGER
    },
    movie_year: {
        allowNULL: false,
        type: Sequelize.INTEGER
    },
    createdAt: {
        field: "created_at",
        type: Sequelize.DATE
    },
    updatedAt: {
        field: "updated_at",
        type: Sequelize.DATE
    }
}, {
    tableName: 'movies_table'
}
)

module.exports = movie;

