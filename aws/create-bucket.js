const AWS = require('aws-sdk');

// Enter copied or downloaded access ID and secret key here
const ID = process.env.AWS_ID;
const SECRET = process.env.AWS_SECRET;

// The name of the bucket that you have created
const BUCKET_NAME = 'test-bucket';

//  Initialize the S3 interface passing our access keys:
const s3 = new AWS.S3({
    accessKeyId: ID,
    secretAccessKey: SECRET
});

const params = {
    Bucket: BUCKET_NAME,
    CreateBucketConfiguration: {
        // Set your region here
        LocationConstraint: "eu-west-1"
    }
};

const createS3_bucket = () => {

    s3.createBucket(params, function(err, data) {
        if (err) console.log(err, err.stack);
        else console.log('Bucket Created Successfully', data.Location);
    });

}

module.exports = createS3_bucket;