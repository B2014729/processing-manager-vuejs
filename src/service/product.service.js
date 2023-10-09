import apiService from "./api.service.js";

class ProductService {
    constructor(baseUrl = 'http://localhost:3000/api/processing-management') {
        this.api = apiService(baseUrl);
    }

    async getProduct(id) {
        return (await this.api.get(`/product/${id}`)).data.data;
    }

    async getListProduct() {
        return (await this.api.get('/list-product')).data.data;
    }

    async updateProduct(formData) {
        return (await this.api.post('/uploadFile',
            formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })).data.data;
    }

    async deleteProduct(id) {
        return (await this.api.delete(`/product/${id}`)).data.data;
    }

    async newProduct(formData) {
        return (await this.api.post('/new-product', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })).data.data;
    }
}

export default new ProductService();