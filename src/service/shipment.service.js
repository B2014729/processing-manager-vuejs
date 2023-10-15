import apiService from "./api.service";

class ShipmentService {
    constructor(baseUrl = 'http://localhost:3000/api/processing-management') {
        this.api = apiService(baseUrl);
    }

    async getListShipment() {
        return (await this.api.get('/list-shipments')).data.data;
    }

    async getShipment(id) {
        return (await this.api.get(`/get-shipment/${id}`)).data.data;
    }

    async getShipmentFilter(month, year, id_product) {
        return (await this.api.post('/get-shipment-filter', { month, year, id_product })).data.data;
    }

    async checkIsset(id) {
        return ((await this.api.post('shipment/check-isset', { id }))).data.message;
    }

    async newShipment(id, name, id_product, id_staff_Mn, date_manufacture, status, quantity, price) {
        return (await this.api.post('/new-shipment', {
            id, name, id_product, id_staff_Mn, date_manufacture, status, quantity, price
        })).data.message;
    }

    async updateShipment(id, name, id_product, id_staff_Mn, date_manufacture, status, quantity, price) {
        return (await this.api.put(`get-shipment/${id}`, {
            name, id_product, id_staff_Mn, date_manufacture, status, quantity, price
        })).data;
    }
}

export default new ShipmentService();