import { incrementedFileName } from "../../libs/utils.js"
import { fileRepository } from "../repositories/index.js"

class FileService {

    async save(fileName, fileContent, fileUrl) {

        const data = {
            message: 'Inserted!'
        }

        // dto
        let fileObj = {
            fileName,
            fileContent,
            fileUrl
        };

        // check for existing files against filename
        const existingFiles = await fileRepository.find(fileName)

        // if files exist against filename
        if (existingFiles.length !== 0) {

            // filename of the last occurance
            const { fileName: lastFileName } = [...existingFiles].pop();

            // build new filename (e.g hello_2 if last filename occurance was hello_1)
            fileObj.fileName = incrementedFileName(lastFileName, fileName)

            data.message = 'Warning , Duplicate Insertion !';

        }

        // append existing file array
        existingFiles.push(fileObj);

        // save 
        await fileRepository.insert(fileName, existingFiles);

        return data;
    }

    async get(fileName) {
        return fileRepository.find(fileName);
    }

    async getAll() {
        return fileRepository.findAll();
    }
}



export default new FileService();