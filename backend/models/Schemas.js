const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    // _id: ObjectId
    mail: {type:String, required: true},
    password: {type:Int16, required: true},
    displayName: {type:String},
    profile: {type:String},
})

const commentSchema = new Schema({
    // _id: ObjectId
    content: {type:String, required: true},
    date: {type:Date, default:Date.now},
    displayName: {type:String, required: true},
})

const postSchema = new Schema({
    // _id: ObjectId
    title: {type:String, required: true},
    content: {type:Int16, required: true},
    displayName: {type:String, required: true},
    publicationDate: {type:Date, default:Date.now},
})

const Users = mongoose.model('users', userSchema, 'users');
const Comments = mongoose.model('comments', commentSchema, 'comments');
const Posts = mongoose.model('posts', postSchema, 'posts');
const mySchemas = {'Users':Users, 'Comments':Comments, 'Posts':Posts};

module.exports = mySchemas;