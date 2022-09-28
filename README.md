# AWS-S3 Uploading Get Delete Files from S3 bucket

<p>
    S3, or Simple Storage Service, is a cloud storage service provided by Amazon Web Services (AWS). Using S3, you can host any number of files while paying for only what you use.

    S3 also provides multi-regional hosting to customers by their region and thus are able to really quickly serve the requested files with minimum delay.
</p>
Data: images, documents, videos <br>
Features: <br>

+ uplaod file
+ get file
+ Delete file

# 1. Node Dependencies
+ "dotenv"
+ "express"
+ "express-fileupload"
+ "mongoose"
+ "morgan"

<b>Dev dependencies:<b> 

+ nodemon


# 3 APP COMPONENETS 
## 1. Git ignore files 
+ /package-lock.json
+ /package.json
+ /config/config.env

## 2. Handlers/
#### (errorHandlers.js)
    
Handler 1: (catchErrors) Catch Errors Handler <br>
Desc:  catch url string errors

## 3. Utils/
+ File-functions.js
    + uploadFiles_func()
    + getFiles_func()
    + deleteFiles_func()

+ File-upload-config.js
    + checkFileSize()

## 4. Routes/
#### 7.1 main.routes.js:
    
     ```
     type: /post
     Route: /upload
     Controller: uploadFile
     ```
    
     ```
     type: /post
     Route: /get
     Controller: getFile
     ```
    
    
     ```
     type: /post
     Route: /delete
     Controller: deleteFile
     ```


    