import apiService from "./api.service";

class ProcessService {
    constructor(baseUrl = 'http://localhost:3000/api/processing-management') {
        this.api = apiService(baseUrl);
    }

    async getProcess(id) {
        return (await this.api.get(`/get-process/${id}`)).data.data.chain;
    }

    async checkDataIsChanged(id) {
        return (await this.api.get(`/check-isvalid/${id}`)).data.data;
    }

    async addActive(id, timetamps, title, contents, idUser) {
        return (await this.api.post('/new-process', {
            id, timetamps, title, contents, idUser
        }));
    }
}

export default new ProcessService();