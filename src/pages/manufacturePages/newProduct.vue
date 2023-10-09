<template>
    <layout-default>
        <template #contents>
            <!--Modal notification success and warning-->
            <modal-success-component msg="Đã thêm mới sản phẩm!" @ok="goListProduct"></modal-success-component>

            <h5 class="header-text ms-3">THÊM SẢN PHẨM MỚI:</h5>
            <div class="d-flex justify-content-center mb-4">
                <div class="main-profile w-75 overflow-hidden">
                    <form @submit.prevent="submit" enctype="multipart/form-data">
                        <div class="row">
                            <div class="col-md-4 ms-4 col-12">
                                <h6 class="fw-bold text-secondary mt-4">HÌNH ẢNH:</h6>
                                <div class="d-flex form-floating my-2">
                                    <input class=" w-75 form-control" id="avatar" type="file" @change="previewFiles"
                                        ref="image">
                                    <label for="avatar" style="margin: -5px;">Thêm ảnh:</label>
                                </div>
                            </div>
                            <div class="mt-4 ms-4 col-md-7 col-12">
                                <h6 class="fw-bold text-secondary">THÔNG TIN SẢN PHẨM:</h6>

                                <div class="form-floating mb-2">
                                    <input type="text" class="form-control" id="name" v-model="data['name']">
                                    <label for="name">Tên sản phẩm:</label>
                                </div>

                                <div class="form-floating mb-2">
                                    <input type="number" class="form-control" id="hsd" v-model="data['hsd']">
                                    <label for="hsd">Hạn sử dụng (tháng):</label>
                                </div>

                                <div class="form-floating mb-2">
                                    <input type="text" class="form-control" id="preserve" v-model="data['preserve']">
                                    <label for="preserve">Bảo quản:</label>
                                </div>

                                <div class="form-floating mb-2">
                                    <input type="text" class="form-control" id="pack" v-model="data['pack']">
                                    <label for="pack">Đóng gói:</label>
                                </div>

                                <div class="form-floating mb-2">
                                    <input type="text" class="form-control" id="status" v-model="data['status']">
                                    <label for="status">Quy cách:</label>
                                </div>

                                <span class="messages-error" v-if="error['enoughInfor']">
                                    <i class="fa-solid fa-triangle-exclamation"></i> Vui lòng nhập đầy đủ thông tin sản
                                    phẩm.
                                </span>

                                <div class="mb-3 d-flex align-items-end justify-content-end">
                                    <button class="btn ms-2" type="submit">Thêm sản phẩm</button>
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
import productService from '@/service/product.service';


export default {
    data() {
        return {
            data: [],
            image: "",
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

    methods: {
        previewFiles() {
            this.image = this.$refs.image.files[0];
        },

        async submit() {
            if (!this.data['name'] || !this.data['hsd'] || !this.data['preserve'] || !this.data['pack'] || !this.data['status']) {
                this.error['enoughInfor'] = true;
            } else {
                this.error['enoughInfor'] = false;
                try {
                    const formData = new FormData();
                    formData.append('image', this.image);
                    formData.append('id', this.data['id']);
                    formData.append('name', this.data['name']);
                    formData.append('hsd', this.data['hsd']);
                    formData.append('preserve', this.data['preserve']);
                    formData.append('pack', this.data['pack']);
                    formData.append('status', this.data['status']);

                    await productService.newProduct(formData).then((result) => {
                        if (result) {
                            console.log(result)
                            var myModal = new bootstrap.Modal(document.getElementById("myModal"), {});
                            myModal.show();
                        }
                    });
                } catch (err) {
                    console.log(err);
                }
            }
        },

        goListProduct() {
            this.$router.push('/danhsachsanpham');
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