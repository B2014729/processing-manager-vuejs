import apiService from "./api.service.js";

class StaffService {
    constructor(baseUrl = 'http://localhost:3000/api/processing-management') {
        this.api = apiService(baseUrl);
    }

    async getAll() {
        return (await this.api.get('/staff-list')).data.data;
    }

    async getUser(id) {
        return (await this.api.get(`/staff/${id}`)).data.data;
    }

    async createStaff(id, fullname, birth_date, gender, id_number, address, phone, email, id_DV, position, id_salary, username, password, role) {
        return (await this.api.post('/new-staff', { id, fullname, birth_date, gender, id_number, address, phone, email, id_DV, position, id_salary, username, password, role })).data;
    }

    async updateUser(id, fullname, birth_date, gender, phone, id_number, address, email, id_DV, position, id_salary) {
        return (await this.api.put(`/staff/${id}`, { fullname, birth_date, gender, phone, id_number, address, email, id_DV, position, id_salary })).data;
    }

    async deleteUser(id) {
        return (await this.api.delete(`/staff/${id}`)).data;
    }

    async getStaffManagerShipment() {
        return (await this.api.get('/get-staff-position')).data.data;
    }

    async getSalaryStaff() {
        return (await this.api.get('/get-salary-table')).data.data;
    }
}

export default new StaffService();