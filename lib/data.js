// dependenses
const fs = require('fs');
const path = require('path');

const lib = {};

// base directory
lib.basedir = path.join(__dirname, '/../.data/')

// write data to file 
lib.create = (dir, file, data, callback) => {
    // open File for writing
    fs.open(lib.basedir+dir+'/'+file+'.json','wx', (err, fileDescriptor) => {
        if(!err && fileDescriptor){
            const stringData = JSON.stringify(data)
            
            // write data to file and then close it 
            fs.writeFile(fileDescriptor, stringData, (err2) => {
                if(!err2){
                    fs.close(fileDescriptor, (error) => {
                        if(!error){
                            callback(false)
                        }
                        else{
                            callback('error to close file')
                        }
                    })
                }
                else{
                    callback('Error writing to new file')
                }
            })
        }else{
            callback(err)
        }
    })

};
module.exports = lib