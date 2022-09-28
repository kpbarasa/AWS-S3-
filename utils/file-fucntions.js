const { checkFileSize } = require('./file-upload-config');
const uploadFile_s3Bucket = require('../aws/upload-file')

const uploadFiles_func = async (data_file) => {

    // Get file mime type
    var mime_ype = data_file.mimetype.split("/")[1];

    if (mime_ype === "vnd.openxmlformats-officedocument.wordprocessingml.document") {

        mime_ype = "docx";

    }

    // file title
    const fileInfo = data_file.name + "." + mime_ype;

    // Check file size
    checkFileSize(file_type, file_size)

    uploadFile_s3Bucket(fileInfo, data_file);


}

const getFiles_func = async (fileName) => {

    // AWS get file 
    getFile_s3Bucket(fileName);


}

const deleteFiles_func = async (fileName) => {

    // AWS delete file 
    getFile_s3Bucket(fileName);

}



module.exports = { uploadFiles_func, getFiles_func, deleteFiles_func };