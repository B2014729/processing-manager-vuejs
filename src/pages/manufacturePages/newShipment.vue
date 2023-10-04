<template>
    <layout-default>
        <template #contents>
            <!--Modal notification success-->
            <modal-success-component msg="Đã cập nhật thông tin lô hàng!" @ok="goDetailShipment"></modal-success-component>

            <h5 class="header-text ms-3">THÊM MỚI LÔ HÀNG__:</h5>
            <div class="d-flex justify-content-center mb-4">
                <div class="main-profile w-75  overflow-hidden">
                    <form class="row" @submit.prevent="onSubmitAddShipment">
                        <div class="col-md-4 col-12">
                            <div class="mt-4 ms-5">
                                <h6 class="fw-bold text-secondary">THÔNG TIN LÔ HÀNG:</h6>
                                <div class="form-floating mb-2">
                                    <input type="text" class="form-control" id="id" v-model="data['id']">
                                    <label for="id">Mã lô hàng:</label>
                                </div>

                                <span class="messages-error" v-if="error['shipmentIsset']">
                                    <i class="fa-solid fa-triangle-exclamation"></i> Mã lô hàng đã tồn tại!
                                </span>

                                <div class="form-floating mb-2">
                                    <input type="text" class="form-control" id="name" v-model="data['name']">
                                    <label for="name">Tên lô hàng:</label>
                                </div>

                                <div class="form-floating mb-2">
                                    <select id="id_product" class="form-select" aria-label="Default select example"
                                        v-model="data['id_product']">
                                        <option v-for="(product, index) in listProduct" :key="index"
                                            style="font-size: 14px;" :value="`${product.id}`">
                                            {{ product.name }}
                                        </option>
                                    </select>
                                    <label for="id_product">Sảm phẩm:</label>
                                </div>

                                <div class="form-floating mb-2">
                                    <select id="id_staff_Mn" class="form-select" aria-label="Default select example"
                                        v-model="data['id_staff_Mn']">
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
                                        v-model="data['date_manufacture']">
                                    <label for="date_manufacture">Ngày sản xuất:</label>
                                </div>
                                <div class="form-floating mb-2">
                                    <input type="number" class="form-control" id="quantity" v-model="data['quantity']">
                                    <label for="quantity">Số lượng (Kg):</label>
                                </div>
                                <div class="form-floating mb-2">
                                    <input type="number" class="form-control" id="price" v-model="data['price']">
                                    <label for="price">Đơn giá (VND):</label>
                                </div>
                                <div class="form-floating mb-2">
                                    <select id="status" class="form-select" aria-label="Default select example"
                                        v-model="data['status']">
                                        <option style="font-size: 14px;" value="Đang xử lí">Đang xử lí</option>
                                        <option style="font-size: 14px;" value="Đã thanh toán">Đã thanh toán</option>
                                    </select>
                                    <label for="status">Trạng thái:</label>
                                </div>

                                <span class="messages-error" v-if="error['enoughInfor']">
                                    <i class="fa-solid fa-triangle-exclamation"></i> Vui lòng nhập đầy đủ thông tin lô hàng.
                                </span>

                                <div class="mb-3 d-flex align-items-end justify-content-end">
                                    <button class="btn" type="submit">Thêm lô hàng</button>
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
import * as bootstrap from 'bootstrap/dist/js/bootstrap';

import defaultLayoutManufactureVue from '../../layouts/defaultLayoutManufacture.vue';
import modalSuccessComponent from '@/components/manufactureManagement/modalSuccessComponent.vue';

import ShipmentService from '@/service/shipment.service.js';
import ProductSevice from '@/service/product.service.js'
import StaffManagementService from '@/service/staffManagement.service';

export default {
    data() {
        return {
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
        let data = [];

        return {
            data, error
        }
    },

    async created() {
        await ProductSevice.getListProduct().then((result) => {
            this.listProduct = result;
        });

        await StaffManagementService.getStaffManagerShipment().then((result) => {
            this.staffManagement = result
        });

    },

    methods:
    {
        async onSubmitAddShipment() {
            if (!this.data['id'] || !this.data['name'] || !this.data['id_product'] || !this.data['id_staff_Mn']
                || !this.data['date_manufacture'] || !this.data['quantity'] || !this.data['price'] || !this.data['status']) {
                this.error['enoughInfor'] = true;
            } else {
                this.error['enoughInfor'] = false;
                try {
                    await ShipmentService.checkIsset(this.data['id']).then((result) => {
                        this.error['shipmentIsset'] = result;
                        if (!result) {
                            try {
                                ShipmentService.newShipment(this.data['id'], this.data['name'], this.data['id_product'],
                                    this.data['id_staff_Mn'], this.data['date_manufacture'], this.data['status'], this.data['quantity'],
                                    this.data['price']).then((result) => {
                                        if (result) {
                                            var myModal = new bootstrap.Modal(document.getElementById("myModal"), {});
                                            myModal.show();
                                        }
                                    });
                            } catch (err) {
                                console.log(err);
                            }
                        }
                    });
                } catch (err) {
                    console.log(err);
                }
            }
        },

        onModal() {
            this.$router.push('/danhsachlohang/');
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