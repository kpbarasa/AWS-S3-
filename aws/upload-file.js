const fs = require('fs');
const AWS = require('aws-sdk');


const uploadFile_s3Bucket = (fileName, data_file) => {

    // Read content from the file
    const fileContent = fs.readFileSync(data_file);

    // Setting up S3 upload parameters
    const params = {
        Bucket: env.process.BUCKET_NAME,
        Key: fileName, // File name you want to save as in S3
        Body: fileContent
    };

    //  NOTE
    // Before we upload the file, we need to read its contents as a buffer. After reading it, 
    // we can define the needed parameters for the file upload, such as "Bucket", "Key", "and" "Body".
    // Upload Single file 

    // Other optional parameters:
    // StorageClass: Define the class you want to store the object.S3 is intended to provide fast file 
    //               serving.But in case files are not accessed frequently you can use a different storage 
    //               class. For an example, if you have files which are hardly touched you can store in "S3 
    //               Glacier Storage" where the price is very low compared to "S3 Standard Storage".But it 
    //               will take more time to access those files in case you need it and is covered with a 
    //               different service level agreement.

    // ContentType:  Sets the image MIME type.The default type will be "binary/octet-stream".Adding a MIME 
    //               type like "image/jpeg" will help browsers and other HTTP clients to identify the type 
    //               of the file.

    // ContentLength: Sets the size of the body in bytes, which comes in handy if body size cannot be 
    //                determined automatically.

    // ContentLanguage: Set this parameter to define which language the contents is in.This will also 
    //                help HTTP clients to identify or translate the content.

    // Uploading files to the bucket
    s3.upload(params, function (err, data) {
        if (err) {
            throw err;
        }
        console.log(`File uploaded successfully. ${data.Location}`);
    });
};

const getFile_s3Bucket = async (fileName) => {

    // Setting up S3 upload parameters
    const params = {
        Bucket: env.process.BUCKET_NAME,
        Key: fileName, // File name you want to save as in S3
    };

    //  NOTE Setting up S3 upload parameters
    // Before we upload the file, we need to read its contents as a buffer. After reading it, 
    // we can define the needed parameters for the file upload, such as "Bucket", "Key", "and" "Body".
    // Upload Single file 

    // Other optional parameters:
    // StorageClass: Define the class you want to store the object.S3 is intended to provide fast file 
    //               serving.But in case files are not accessed frequently you can use a different storage 
    //               class. For an example, if you have files which are hardly touched you can store in "S3 
    //               Glacier Storage" where the price is very low compared to "S3 Standard Storage".But it 
    //               will take more time to access those files in case you need it and is covered with a 
    //               different service level agreement.

    // ContentType:  Sets the image MIME type.The default type will be "binary/octet-stream".Adding a MIME 
    //               type like "image/jpeg" will help browsers and other HTTP clients to identify the type 
    //               of the file.

    // ContentLength: Sets the size of the body in bytes, which comes in handy if body size cannot be 
    //                determined automatically.

    // ContentLanguage: Set this parameter to define which language the contents is in.This will also 
    //                help HTTP clients to identify or translate the content.

    // GEt files from the bucket
    await s3.getObject(params, function (err, data) {
        if (err) console.log(err, err.stack); // an error occurred
        else console.log(data);           // successful response
    });
    //  create file stream 
    const s3_stream = new AWS.S3({ apiVersion: '2006-03-01' });
    const file = require('fs').createWriteStream('/path/to/file.jpg');
    s3_stream.getObject(params).createReadStream().pipe(file);

};

const deleteFile_s3Bucket = async (fileName) => {

    // Setting up S3 upload parameters
    const params = {
        Bucket: env.process.BUCKET_NAME,
        Key: fileName, // File name you want to save as in S3
    };

    //  NOTE Setting up S3 upload parameters
    // Before we upload the file, we need to read its contents as a buffer. After reading it, 
    // we can define the needed parameters for the file upload, such as "Bucket", "Key", "and" "Body".
    // Upload Single file 

    // Other optional parameters:
    // StorageClass: Define the class you want to store the object.S3 is intended to provide fast file 
    //               serving.But in case files are not accessed frequently you can use a different storage 
    //               class. For an example, if you have files which are hardly touched you can store in "S3 
    //               Glacier Storage" where the price is very low compared to "S3 Standard Storage".But it 
    //               will take more time to access those files in case you need it and is covered with a 
    //               different service level agreement.

    // ContentType:  Sets the image MIME type.The default type will be "binary/octet-stream".Adding a MIME 
    //               type like "image/jpeg" will help browsers and other HTTP clients to identify the type 
    //               of the file.

    // ContentLength: Sets the size of the body in bytes, which comes in handy if body size cannot be 
    //                determined automatically.

    // ContentLanguage: Set this parameter to define which language the contents is in.This will also 
    //                help HTTP clients to identify or translate the content.

    // GEt files from the bucket
    await s3.deleteObject(deleteParams,(error,data)=>{

        next(error,data);
    });

};

module.exports = uploadFile_s3Bucket, getFile_s3Bucket, deleteFile_s3Bucket;