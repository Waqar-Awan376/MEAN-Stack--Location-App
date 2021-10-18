const mongodb = require('mongodb');
const Comment = require('../models/comment');



exports.postComment = (req, res, next) => {
    const newComment = new Comment(req.body.id, req.body.comment);
    newComment.save().then(result => {
        res.status(200).json({
            status: true,
            result: "New comment has been added"
        });
    }).catch(err => console.log(err));
}

exports.getComments = (req, res, next) => {
    Comment.fetch(req.params.id).then((comments) => {
        res.status(200).json({
            status: true,
            result: "Comments for particular id fetched",
            comments: comments
        })
    }).catch(err => console.log(err));
}