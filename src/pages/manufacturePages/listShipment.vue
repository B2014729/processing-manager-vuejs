<template>
    <layout-default>
        <template #contents>
            <modal-warning-component msg="Mã lô hàng không tồn tại!"></modal-warning-component>
            <h5 class="header-text ms-3">DANH SÁCH LÔ HÀNG__:</h5>

            <search-component msg="Tìm kiếm với mã lô hàng!" @submitFrom="searchInfo"></search-component>

            <div class="row mx-3">
                <table class="table table-striped table-hover">
                    <thead>
                        <tr>
                            <th scope="col" class="center">MÃ LÔ</th>
                            <th scope="col" class="center">TÊN LÔ HÀNG</th>
                            <th scope="col" class="center">NGÀY SX</th>
                            <th scope="col" class="center">SỐ LƯỢNG (Kg)</th>
                            <th scope="col" class="center">ĐƠN GIÁ (VND)</th>
                            <th scope="col" class="center ps-4"></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(item, index) in listShipment" :key="index">
                            <td class="center fw-bold">{{ item.id }}</td>
                            <td class="center">{{ item.name }}</td>
                            <td class="center">{{ item.date_manufacture }}</td>
                            <td class="center">{{ item.quantity }}</td>
                            <td class="center">{{ item.price }}</td>
                            <td>
                                <router-link :to="{ name: 'Chi-tiet-LH', params: { id: item.id } }">
                                    <button class="ms-2 btn-detail"><i class="fa-solid fa-info"></i></button>
                                </router-link>
                                <router-link :to="{ name: 'Cap-nhat-LH', params: { id: item.id } }">
                                    <button class="ms-2 btn-update"><i class="fa-solid fa-pencil"></i></button>
                                </router-link>
                                <router-link :to="{ name: 'Chi-tiet-LH', params: { id: item.id } }">
                                    <button class="ms-2 btn-remove"><i class="fa-solid fa-xmark"></i></button>
                                </router-link>
                            </td>
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
import defaultLayoutManufactureVue from '../../layouts/defaultLayoutManufacture.vue';
import ShipmentService from '@/service/shipment.service.js';

import moment from 'moment';
import shipmentService from '@/service/shipment.service.js';
export default {
    components: {
        layoutDefault: defaultLayoutManufactureVue,
        searchComponent: searchComponent,
        modalWarningComponent: modalWarningComponent
    },

    data() {
        return {
            listShipment: [],
        }
    },

    async created() {
        this.listShipment = await ShipmentService.getListShipment();
        this.listShipment.forEach(element => {
            element.date_manufacture = moment(element.date_manufacture).format('DD/MM/YYYY');
        });
    },

    methods: {
        async searchInfo(data) {
            if (data !== '') {
                try {
                    await shipmentService.getShipment(data).then((result) => {
                        this.listShipment = [result];
                    });
                } catch (error) {
                    new bootstrap.Modal(document.getElementById("ModalWarning"), {}).show();
                }
            } else {
                this.listShipment = await ShipmentService.getListShipment();
                this.listShipment.forEach(element => {
                    element.date_manufacture = moment(element.date_manufacture).format('DD/MM/YYYY');
                });
            }
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