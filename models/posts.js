const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    title: {
        type: 'string',
        default: null
    },
    slug: {
        type: 'string',
        required: true,
        unique: true
    },
    category: {
        type: 'string',
        required: true,
    },
    desc: {
        type: 'string',
    },
    tags: {
        type: 'string',
    },

})

module.exports = mongoose.model('posts', postSchema)