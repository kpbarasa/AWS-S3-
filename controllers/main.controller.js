const { uploadFiles_func, getFiles_func, deleteFiles_func } = require('../utils/file-fucntions')

const uploadFile  = (req, res) => {

    try {
        console.log(req.files);

        if (!req.files) throw "Error no file uploaded";

        // Request body
        const data_file = req.files.data_file;;

        // Get data type 
        var data_type = "";
        if (data_file.length > 0) data_type = data_file[0].mimetype.split("/")[1];
        else data_type = data_file.mimetype.split("/")[1];

        // Upload fucntion
        uploadFiles_func( data_file );

    } catch (error) {

        res.status(400).json('Error: ' + error)

    }

}

const getFile = (req, res) => {

    try {

        const {fileName} = !req.body

        if (!fileName) throw "Error no file selected";

        // Upload fucntion
        getFiles_func( fileName );

    } catch (error) {

        res.status(400).json('Error: ' + error)

    }

}

const deleteFile = (req, res) => {

    try {

        const {fileName} = !req.body

        if (!fileName) throw "Error no file selected";

        // Upload fucntion
        deleteFiles_func( fileName );

    } catch (error) {

        res.status(400).json('Error: ' + error)

    }

}

module.exports = { uploadFile, getFile, deleteFile };