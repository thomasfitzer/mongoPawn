var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var ArticleSchema = new Schema({
    title: {
        type: String,
        required: true
    },

    summary: {
        type: String,
        required: true
    },

    url: {
        type: String,
        required: true
    }


});

var Article = mongoose.model("Article", ArticleSchema);

module.exports = Article;




// * Headline - the title of the article

// * Summary - a short summary of the article

// * URL - the url to the original article

// * Feel free to add more content to your database (photos, bylines, and so on).