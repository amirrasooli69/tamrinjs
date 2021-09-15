'use strict';

const fs = require('fs');

module.exports = class AttachmentController {
    upload(data) {
        if(rerquest().method == 'GET') {
            return 'attachment/upload_form.html';
        }

        if(data.files.file) {
            let tmpPath = data.files.file.path;
            let destinationPath = configs().uploadDir + data.files.file.name;
            fs.rename(tmpPath, destinationPath, function(err){
                console.error(err);
            });

            return 'attachment/success_upload.html'
        }
    }
}