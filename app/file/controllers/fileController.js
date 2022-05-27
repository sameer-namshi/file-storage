import { fileService } from '../services/index.js'
import { send } from "../../libs/utils.js"

class FileController {
    async post(req, res, next) {
        try {
            const { fileName, fileContent, fileUrl } = req.body;
            const data = await fileService.save(fileName, fileContent, fileUrl);
            send(res, {
                success: true,
                data,
            });
        }
        catch (err) {
            console.error(err);
            send(res, {
                success: false,
                data: '',
            });
        }
    }
    async get(req, res, next) {
        try {
            const { fileName } = req.params

            if (fileName)
                data = fileService.get(fileName)

            data = fileService.getAll();
            send(res, {
                success: true,
                data,
            });
        }
        catch (err) {
            console.error(err);
            send(res, {
                success: false,
                data: '',
            });
        }
    }
}


export default new FileController()