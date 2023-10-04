import apiService from "./api.service.js";

class accountService {
    constructor(baseUrl = 'http://localhost:3000/api/processing-management') {
        this.api = apiService(baseUrl);
    }

    async login(username, password) {
        return (await this.api.post('/login', { username, password })).data;
    }

    async logout(id) {
        return (await this.api.post('/logout', { id })).data;
    }

    async session() {
        return (await this.api.get('/get-session')).data.data;
    }

    async checkIsset(username) {
        return (await this.api.post('/account/check-isset', { username })).data;
    }
}


export default new accountService();

