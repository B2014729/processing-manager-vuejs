<template>
    <layout-default>
        <template #contents>
            <!--Modal notification success and warning-->
            <modal-success-component msg="Đã cập nhật thông tin lô hàng!" @ok="goDetailShipment"></modal-success-component>

            <h5 class="header-text ms-3">CẬP NHẬT LÔ HÀNG__:</h5>
            <div class="d-flex justify-content-center mb-4">
                <div class="main-profile w-75  overflow-hidden">
                    <form class="row" @submit.prevent="submit">
                        <div class="col-md-4 col-12">
                            <div class="mt-4 ms-5">
                                <h6 class="fw-bold text-secondary">THÔNG TIN LÔ HÀNG:</h6>

                                <div class="form-floating mb-2">
                                    <input type="text" class="form-control" id="name" :value=shipment.name
                                        @input="shipment.name = $event.target.value">
                                    <label for="name">Tên lô hàng:</label>
                                </div>

                                <div class="form-floating mb-2">
                                    <select id="id_product" class="form-select" aria-label="Default select example"
                                        :value="shipment.id_product" @input="shipment.id_product = $event.target.value">
                                        <option v-for="(product, index) in listProduct" :key="index"
                                            style="font-size: 14px;" :value="`${product.id}`">
                                            {{ product.name }}
                                        </option>
                                    </select>
                                    <label for="id_product">Sảm phẩm:</label>
                                </div>

                                <div class="form-floating mb-2">
                                    <select id="id_staff_Mn" class="form-select" aria-label="Default select example"
                                        :value="shipment.id_staff_Mn" @input="shipment.id_staff_Mn = $event.target.value">>
                                        <option v-for="(staff, index) in staffManagement" :key="index"
                                            style="font-size: 14px;" :value="`${staff.id}`">
                                            {{ staff.fullname }}
                                        </option>
                                    </select>
                                    <label for="id_staff_Mn">Nhân viên quản lí:</label>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-8 col-12">
                            <div class="w-100 p-4">
                                <h6 class="fw-bold text-secondary">CHI TIẾT LÔ HÀNG:</h6>
                                <div class="form-floating mb-2">
                                    <input type="date" class="form-control" id="date_manufacture"
                                        :value="shipment.date_manufacture"
                                        @input="shipment.date_manufacture = $event.target.value">
                                    <label for="date_manufacture">Ngày sản xuất:</label>
                                </div>
                                <div class="form-floating mb-2">
                                    <input type="number" class="form-control" id="quantity" :value="shipment.quantity"
                                        @input="shipment.quantity = $event.target.value">
                                    <label for="quantity">Số lượng (Kg):</label>
                                </div>
                                <div class="form-floating mb-2">
                                    <input type="number" class="form-control" id="price" :value="shipment.price"
                                        @input="shipment.price = $event.target.value">
                                    <label for="price">Đơn giá (VND):</label>
                                </div>
                                <div class="form-floating mb-2">
                                    <select id="status" class="form-select" aria-label="Default select example"
                                        :value="shipment.status" @input="shipment.status = $event.target.value">>
                                        <option style="font-size: 14px;" value="Đang xử lí">Đang xử lí</option>
                                        <option style="font-size: 14px;" value="Đã thanh toán">Đã thanh toán</option>
                                    </select>
                                    <label for="status">Trạng thái:</label>
                                </div>

                                <span class="messages-error" v-if="error['enoughInfor']">
                                    <i class="fa-solid fa-triangle-exclamation"></i> Vui lòng nhập đầy đủ thông tin lô hàng.
                                </span>

                                <div class="mb-3 d-flex align-items-end justify-content-end">
                                    <router-link :to="{ name: 'Chi-tiet-LH', params: { id: shipment.id } }">
                                        <button class="btn"><i class="fa-solid fa-arrow-left px-1"></i></button>
                                    </router-link>
                                    <button class="btn ms-2" type="submit">Cập nhật lô hàng</button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </template>
    </layout-default>
</template>

<script>
import { ref } from 'vue';
import moment from 'moment';
import * as bootstrap from 'bootstrap/dist/js/bootstrap';

import defaultLayoutManufactureVue from '../../layouts/defaultLayoutManufacture.vue';

import modalSuccessComponent from '@/components/manufactureManagement/modalSuccessComponent.vue';

import ShipmentService from '@/service/shipment.service.js';
import ProductSevice from '@/service/product.service.js';
import StaffManagementService from '@/service/staffManagement.service';


export default {
    data() {
        return {
            id: this.$route.params.id,
            shipment: {},
            listProduct: [],
            staffManagement: [],
        }
    },

    components: {
        layoutDefault: defaultLayoutManufactureVue,
        modalSuccessComponent: modalSuccessComponent,
    },

    setup() {
        let error = ref([]);

        return {
            error
        }
    },

    async created() {
        await ShipmentService.getShipment(this.id).then((result) => {
            this.shipment = result;
        });
        this.shipment.date_manufacture = moment(this.shipment.date_manufacture).format('YYYY-MM-DD');

        await ProductSevice.getListProduct().then((result) => {
            this.listProduct = result;
        });

        await StaffManagementService.getStaffManagerShipment().then((result) => {
            this.staffManagement = result
        });

    },

    methods:
    {

        async submit() {
            if (!this.shipment.id || !this.shipment.name || !this.shipment.id_product || !this.shipment.id_staff_Mn
                || !this.shipment.date_manufacture || !this.shipment.quantity || !this.shipment.price || !this.shipment.status) {
                this.error['enoughInfor'] = true;
            } else {
                this.error['enoughInfor'] = false;
                try {
                    ShipmentService.updateShipment(this.shipment.id, this.shipment.name, this.shipment.id_product,
                        this.shipment.id_staff_Mn, this.shipment.date_manufacture, this.shipment.status, this.shipment.quantity,
                        this.shipment.price).then((result) => {
                            if (result) {
                                var myModal = new bootstrap.Modal(document.getElementById("myModal"), {});
                                myModal.show();
                            }
                        });
                } catch (err) {
                    console.log(err);
                }
            }
        },

        goDetailShipment() {
            this.$router.push(`/chitietlohang/${this.shipment.id}`);
        }
    }
}

</script>
<style lang="css" scoped>
.header-text {
    text-decoration: none;
    font-weight: bold;
    padding: 15px 0;
    color: #848484;
}

.main-profile {
    border-radius: 15px;
    background-color: white;
    box-shadow: 10px 5px 10px 5px rgba(115, 115, 115, 0.541);
}

.btn {
    background-color: var(--bs-dark-bg-subtle);
    box-shadow: 2px 2px 2px 2px #c7c6c6;
    color: black;
}

.btn:hover {
    background-color: rgb(158, 158, 158);
}

.messages-error {
    color: rgb(250, 192, 31);
    font-size: 14px;
}
</style>