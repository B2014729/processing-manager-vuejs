import apiService from "./api.service";

class ProcessService {
    constructor(baseUrl = 'http://localhost:3000/api/processing-management') {
        this.api = apiService(baseUrl);
    }

    async getProcess(name) {
        console.log(name)
        return (await this.api.get(`/get-process/${name}`)).data.data;
    }
}

export default new ProcessService();