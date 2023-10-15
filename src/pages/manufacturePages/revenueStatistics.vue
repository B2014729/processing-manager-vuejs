<template>
    <layout-default>
        <template #contents>
            <modal-warning-component msg="Mã lô hàng không tồn tại!"></modal-warning-component>
            <div class="modal" id="myModalFilter">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <!-- Modal Header -->
                        <div class="modal-header">
                            <h6 class="modal-title fw-bold text-secondary">BỘ LỌC DOANH THU</h6>
                            <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                        </div>
                        <div class="modal-body">
                            <form @submit.prevent="submit">
                                <div class="form-floating mb-2">
                                    <input type="number" class="form-control" id="month" v-model="data['month']">
                                    <label for="month">Tháng:</label>
                                </div>

                                <div class="form-floating mb-2">
                                    <input type="number" class="form-control" id="year" v-model="data['year']">
                                    <label for="year">Năm:</label>
                                </div>

                                <div class="form-floating mb-2">
                                    <select id="id_product" class="form-select" aria-label="Default select example"
                                        v-model="data['id_product']">
                                        <option v-for="(product, index) in listProduct" :key="index"
                                            style="font-size: 14px;" :value="`${product.id}`">
                                            {{ product.name }}
                                        </option>
                                        <option value="0">Tất cả sản phẩm</option>
                                    </select>
                                    <label for="id_product">Sảm phẩm:</label>
                                </div>
                                <button type="button" @click="submit" class="btn btn-secondary float-end"
                                    data-bs-dismiss="modal">Lọc</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div class="d-flex justify-content-between">
                <h5 class="header-text ms-3">THỐNG KÊ DOANG THU__:</h5>
                <button class="btn btn-secondary h-50 mt-2">Xuất file Excel</button>
            </div>

            <chart-component
                :value='[{ "x": "1", "y": 0 }, { "x": "2", "y": 0 }, { "x": "3", "y": 0 }, { "x": "4", "y": 0 }, { "x": "5", "y": 1550000000 }, { "x": "6", "y": 0 }, { "x": "7", "y": 0 }, { "x": "8", "y": 420000000 }, { "x": "9", "y": 444000000 }, { "x": "10", "y": 555000000 }, { "x": "11", "y": 0 }, { "x": "12", "y": 0 }]'
                description="Biểu đồ thể hiện doanh thu theo từng tháng qua các năm.">

            </chart-component>

            <h6 class="fw-bold text-secondary ms-4">DANH SÁCH CÁC LÔ HÀNG:</h6>

            <search-component msg="Tìm kiếm với mã lô hàng!" @submitFrom="searchInfo"
                @onFilter="showModalFilter"></search-component>

            <div class="row mx-3">
                <table class="table table-striped table-hover">
                    <thead>
                        <tr>
                            <th scope="col" class="center">MÃ LÔ</th>
                            <th scope="col" class="center">TÊN LÔ HÀNG</th>
                            <th scope="col" class="center">NGÀY SX</th>
                            <th scope="col" class="center">SỐ LƯỢNG (Kg)</th>
                            <th scope="col" class="center">ĐƠN GIÁ (VND)</th>
                            <th scope="col" class="center">TỔNG (VND)</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(  item, index  ) in   listShipment  " :key="index">
                            <td class="center fw-bold">{{ item.id }}</td>
                            <td class="center">{{ item.name }}</td>
                            <td class="center">{{ item.date_manufacture }}</td>
                            <td class="center">{{ item.quantity }}</td>
                            <td class="center">{{ formatNumber(item.price) }}</td>
                            <td class="center fw-bold">{{ formatNumber(item.price * item.quantity) }}</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <th>Tổng doanh thu:</th>
                            <td class="fw-bold center">{{ formatNumber(this.sumRevenue) }} VND</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </template>
    </layout-default>
</template>

<script>
import * as bootstrap from 'bootstrap/dist/js/bootstrap';
import searchComponent from '@/components/manufactureManagement/searchComponent.vue';
import modalWarningComponent from '@/components/manufactureManagement/modalWarningComponent.vue';
import chartComponent from '@/components/manufactureManagement/chartComponent.vue';
import defaultLayoutManufactureVue from '../../layouts/defaultLayoutManufacture.vue';
import ProductSevice from '@/service/product.service.js'
import ShipmentService from '@/service/shipment.service.js';
import moment from 'moment';

export default {
    components: {
        layoutDefault: defaultLayoutManufactureVue,
        searchComponent: searchComponent,
        modalWarningComponent: modalWarningComponent,
        chartComponent: chartComponent,
    },

    data() {
        return {
            listShipment: [],
            listProduct: [],
            sumRevenue: 0,
            data: [],
            //value: [],
        }
    },

    setup() {
        function formatNumber(number) {
            return (new Intl.NumberFormat().format(number));
        }

        return {
            formatNumber
        }
    },

    async created() {
        this.listShipment = await ShipmentService.getListShipment();

        this.listShipment.forEach(element => {
            element.date_manufacture = moment(element.date_manufacture).format('DD/MM/YYYY');
        });
        this.listShipment.forEach(element => {
            this.sumRevenue = this.sumRevenue + (element.price * element.quantity);
        });

        await ProductSevice.getListProduct().then((result) => {
            this.listProduct = result;
        });

        // for (let i = 0; i < 12; i++) {
        //     await shipmentService.getShipmentFilter((i + 1), 0, 0).then((result) => {
        //         let valueY = 0;
        //         result.forEach(element => {
        //             valueY = element.price * element.quantity;
        //         })
        //         this.value.push({ x: `${i + 1}`, y: valueY });
        //     });
        // }
    },

    methods: {
        async searchInfo(data) {
            this.sumRevenue = 0;
            if (data !== '') {
                try {
                    await ShipmentService.getShipment(data).then((result) => {
                        this.listShipment = [result];
                    });
                    this.listShipment.forEach(element => {
                        this.sumRevenue = this.sumRevenue + (element.price * element.quantity);
                    });
                } catch (error) {
                    new bootstrap.Modal(document.getElementById("ModalWarning"), {}).show();
                }
            } else {
                this.listShipment = await ShipmentService.getListShipment();
                this.listShipment.forEach(element => {
                    this.sumRevenue = this.sumRevenue + (element.price * element.quantity);
                });
                this.listShipment.forEach(element => {
                    element.date_manufacture = moment(element.date_manufacture).format('DD/MM/YYYY');
                });
            }
        },

        showModalFilter() {
            new bootstrap.Modal(document.getElementById("myModalFilter"), {}).show();
        },

        async submit() {
            await ShipmentService.getShipmentFilter(this.data['month'], this.data['year'], this.data['id_product'])
                .then((result) => {
                    this.sumRevenue = 0;
                    if (result.length > 0) {
                        this.listShipment = result;
                        this.listShipment.forEach(element => {
                            this.sumRevenue = this.sumRevenue + (element.price * element.quantity);
                        });
                    } else {
                        this.listShipment = [];
                    }
                });

            this.listShipment.forEach(element => {
                element.date_manufacture = moment(element.date_manufacture).format('DD/MM/YYYY');
            });


        }
    }
}

</script>
<style lang="css" scoped>
.center {
    text-align: center;
}

.header-text {
    text-decoration: none;
    font-weight: bold;
    padding: 15px 0;
    color: #848484;
}

.btn-update,
.btn-remove,
.btn-detail {
    border: 1px solid #848484;
    border-radius: 3px;
    box-shadow: 2px 2px 1px 1px #848484;
}

.btn-update i {
    padding: 0px 4px;
    color: rgb(2 2 255 / 73%);
}

.btn-detail i {
    padding: 0px 5px;
    color: rgb(199 199 0);
}

.btn-remove i {
    padding: 0px 5px;
    color: rgba(214, 0, 0, 0.984);
}

.btn-detail:hover {
    background-color: rgba(251, 255, 0, 0.422);
}

.btn-update:hover {
    background-color: rgba(25, 0, 255, 0.422);
}

.btn-remove:hover {
    background-color: rgba(255, 0, 0, 0.422);
}
</style>