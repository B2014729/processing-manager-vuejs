<template>
    <layout-default>
        <template #contents>
            <h5 class="header-text ms-3">CHI TIẾT LÔ HÀNG__:</h5>
            <div class="ms-2 row">
                <div class="mb-3 col-md-7 col-12">
                    <h6 class="text-secondary fw-bold">THÔNG TIN SẢN PHẨM:</h6>
                    <div class="row">
                        <div class="col-md-5 col-12">
                            <!-- bug: GET http://localhost:8080/chitietlohang/undefined 404 (Not Found)-->
                            <img :src="`${productShipment.image}`" alt="" class="w-100">
                        </div>

                        <div class="col-md-7 col-12">
                            <h4 class="fw-bold">{{ productShipment.name }}</h4>
                            <ul>
                                <li>
                                    <span class="fw-bold">Quy cách:</span>
                                    {{ productShipment.status }}
                                </li>
                                <li>
                                    <span class="fw-bold">Hạn sử dụng: </span>{{ productShipment.hsd }} tháng kể từ ngày sản
                                    xuất.
                                </li>
                                <li>
                                    <span class="fw-bold">Bảo quản:</span> {{ productShipment.preserve }}.
                                </li>
                                <li>
                                    <span class="fw-bold">Đóng gói:</span> {{ productShipment.pack }}
                                </li>
                                <li>
                                    <span class="fw-bold">Đơn hàng tối thiểu:</span> 9 tấn.
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="border-start col-md-5 col-12">
                    <h6 class="text-secondary fw-bold">THÔNG TIN LÔ HÀNG:</h6>
                    <div>
                        <div class="status" :class="{ 'success': isTrue, 'warning': !isTrue }">
                            <h6 class="fw-bold p-1 text-center">{{ shipment.status }}</h6>
                        </div>
                        <div>
                            <ul>
                                <li> <span class="fw-bold">Ngày sản xuất: </span>{{ shipment.date_manufacture }}.</li>
                                <li> <span class="fw-bold">Số lượng: </span>{{ shipment.quantity }} tấn.</li>
                                <li> <span class="fw-bold">Đơn giá: </span>{{ shipment.price }} đ/kg.</li>
                                <br>

                                <li> <span class="fw-bold">Nhân viên quản lí: {{ userManager.fullname }}</span>
                                    <router-link :to="{ name: 'Chi-tiet-NV', params: { id: shipment.id_staff_Mn } }">
                                        ({{ shipment.id_staff_Mn }})
                                    </router-link>
                                </li>
                            </ul>
                            <div class="d-flex justify-content-end me-3">
                                <router-link :to="{ name: 'Cap-nhat-LH', params: { id: shipment.id } }">
                                    <button type="button" class="btn btn-secondary">Chỉnh sửa thông tin</button>
                                </router-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="ms-3 mt-2">
                <h6 class="text-secondary fw-bold">DANH SÁCH CÁC LÔ HÀNG:</h6>
                <div>
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
                            <tr v-for="( item, index ) in  listShipment " :key="index">
                                <td class="center fw-bold">{{ item.id }}</td>
                                <td class="center">{{ item.name }}</td>
                                <td class="center">{{ item.date_manufacture }}</td>
                                <td class="center">{{ item.quantity }}</td>
                                <td class="center">{{ item.price }}</td>
                                <td class="d-flex justify-content-center">

                                    <button class="ms-2 btn-detail" @click="onShipment(item.id)">
                                        <i class="fa-solid fa-info"></i>
                                    </button>

                                    <router-link :to="{ name: 'Cap-nhat-LH', params: { id: item.id } }">
                                        <button class="ms-2 btn-update"><i class="fa-solid fa-pencil"></i></button>
                                    </router-link>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <div class="d-flex justify-content-end me-3 mb-2">
                        <router-link :to="{ name: 'Danh-sach-LH' }">
                            <button class="btn btn-secondary">Quay lại</button>
                        </router-link>
                    </div>
                </div>
            </div>
        </template>
    </layout-default>
</template>

<script>
import moment from 'moment';

import defaultLayoutManufacture from '@/layouts/defaultLayoutManufacture.vue';
import ShipmentService from '@/service/shipment.service.js';
import StaffManagementService from '@/service/staffManagement.service.js';
import ProductSevice from '@/service/product.service.js';


export default {
    components: {
        layoutDefault: defaultLayoutManufacture
    },

    data() {
        return {
            id: this.$route.params.id,
            shipment: {},
            productShipment: {},
            userManager: {},
            listShipment: [],
            isTrue: false,
        }
    },

    async created() {
        //Shipment

        this.shipment = await ShipmentService.getShipment(this.id)
        this.shipment.date_manufacture = moment(this.shipment.date_manufacture).format('DD/MM/YYYY');
        if (this.shipment.status === 'Đã thanh toán') {
            this.isTrue = true;
        }
        //Product 
        this.productShipment = await ProductSevice.getProduct(this.shipment.id_product);

        //User Manager
        this.userManager = await StaffManagementService.getUser(this.shipment.id_staff_Mn);
        //List Shipment
        this.listShipment = await ShipmentService.getListShipment();
        this.listShipment.forEach(element => {
            element.date_manufacture = moment(element.date_manufacture).format('DD/MM/YYYY');
        });
    },

    methods: {
        async onShipment(id) {
            //Shipment
            this.shipment = await ShipmentService.getShipment(id);
            this.shipment.date_manufacture = moment(this.shipment.date_manufacture).format('DD/MM/YYYY');
            if (this.shipment.status === 'Đã thanh toán') {
                this.isTrue = true;
            } else {
                this.isTrue = false;
            }
            //Product 
            this.productShipment = await ProductSevice.getProduct(this.shipment.id_product);

            //User Manager
            this.userManager = await StaffManagementService.getUser(this.shipment.id_staff_Mn);

            this.$router.push(`/chitietlohang/${id}`);
        }
    }

}
</script>
<style lang='css' scoped>
.center {
    text-align: center;
}

.header-text {
    text-decoration: none;
    font-weight: bold;
    padding: 15px 0;
    color: #848484;
}

.status {
    width: 25%;
    border-radius: 15px;
}

.success {
    background-color: rgba(15, 226, 0, 0.703);
}

.warning {
    background-color: rgba(255, 179, 0, 0.663);
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