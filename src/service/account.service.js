import apiService from "./api.service.js";

class accountService {
    constructor(baseUrl = 'http://localhost:3000/api/processing-management') {
        this.api = apiService(baseUrl);
    }

    async login(username, password) {
        return (await this.api.post('/login', { username, password }));
    }

    async checkIsset(username) {
        return (await this.api.post('/account/check-isset', { username })).data;
    }

    async getRole(token) {
        return (await this.api.post('/account/check-role', { 'token': token })).data.data;
    }
}


export default new accountService();

