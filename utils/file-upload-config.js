
const checkFileSize = (data_file, fileSize) => {
    if ( data_file.size > fileSize) throw "Upload exeeds maximum  image file size "+fileSize+"mb";
    // if ( data_file.size > 1000000) throw "Upload exeeds maximum  image file size 1mb";
}