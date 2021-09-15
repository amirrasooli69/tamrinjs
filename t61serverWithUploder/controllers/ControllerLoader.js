const UserController = require('./UserController.js');
const AttachmentController = require('./AttachmentController.js');

exports.controllers = {
    user: new UserController(),
    attachment: new AttachmentController(),
};