<template>
    <layout-default>
        <template #contents>
            <!--Modal notification success and warning-->
            <modal-success-component msg="Đã cập nhật thông tin sản phẩm!" @ok="goDetailShipment"></modal-success-component>

            <h5 class="header-text ms-3">CẬP NHẬT SẢN PHẨM:</h5>
            <div class="d-flex justify-content-center mb-4">
                <div class="main-profile w-75 overflow-hidden">
                    <form @submit.prevent="submit" enctype="multipart/form-data">
                        <div class="row">
                            <div class="col-md-4 ms-4 col-12">
                                <h6 class="fw-bold text-secondary mt-4">HÌNH ẢNH:</h6>
                                <img :src="`${product.image}`" alt="" class="w-100">
                                <div class="d-flex form-floating my-2">
                                    <input class=" w-75 form-control" id="avatar" type="file" @change="previewFiles"
                                        ref="image">
                                    <label for="avatar" style="margin: -5px;">Thêm ảnh:</label>
                                </div>
                            </div>
                            <div class="mt-4 ms-4 col-md-7 col-12">
                                <h6 class="fw-bold text-secondary">THÔNG TIN SẢN PHẨM:</h6>

                                <div class="form-floating mb-2">
                                    <input type="text" class="form-control" id="name" :value=product.name
                                        @input="product.name = $event.target.value">
                                    <label for="name">Tên sản phẩm:</label>
                                </div>

                                <div class="form-floating mb-2">
                                    <input type="number" class="form-control" id="hsd" :value=product.hsd
                                        @input="product.hsd = $event.target.value">
                                    <label for="hsd">Hạn sử dụng (tháng):</label>
                                </div>

                                <div class="form-floating mb-2">
                                    <input type="text" class="form-control" id="preserve" :value=product.preserve
                                        @input="product.preserve = $event.target.value">
                                    <label for="preserve">Bảo quản:</label>
                                </div>

                                <div class="form-floating mb-2">
                                    <input type="text" class="form-control" id="pack" :value=product.pack
                                        @input="product.pack = $event.target.value">
                                    <label for="pack">Đóng gói:</label>
                                </div>

                                <div class="form-floating mb-2">
                                    <input type="text" class="form-control" id="status" :value=product.status
                                        @input="product.status = $event.target.value">
                                    <label for="status">Quy cách:</label>
                                </div>

                                <span class="messages-error" v-if="error['enoughInfor']">
                                    <i class="fa-solid fa-triangle-exclamation"></i> Vui lòng nhập đầy đủ thông tin sản
                                    phẩm.
                                </span>

                                <div class="mb-3 d-flex align-items-end justify-content-end">
                                    <router-link :to="{ name: 'Chi-tiet-SP', params: { id: product.id } }">
                                        <button class="btn"><i class="fa-solid fa-arrow-left px-1"></i></button>
                                    </router-link>
                                    <button class="btn ms-2" type="submit">Cập nhật sản phẩm</button>
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
            product: {},
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

    async created() {
        await productService.getProduct(this.$route.params.id).then((result) => {
            this.product = result;
        });
    },

    methods:
    {
        previewFiles() {
            this.image = this.$refs.image.files[0];
        },

        async submit() {
            if (!this.product.id || !this.product.name || !this.product.hsd || !this.product.preserve
                || !this.product.pack || !this.product.status || !this.product.image) {
                this.error['enoughInfor'] = true;
            } else {
                this.error['enoughInfor'] = false;
                if (!this.image) {
                    this.image = this.product.image;
                }
                try {
                    const formData = new FormData();
                    formData.append('image', this.image);
                    formData.append('id', this.product.id);
                    formData.append('name', this.product.name);
                    formData.append('hsd', this.product.hsd);
                    formData.append('preserve', this.product.preserve);
                    formData.append('pack', this.product.pack);
                    formData.append('status', this.product.status);

                    await productService.updateProduct(formData).then((result) => {
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

        goDetailShipment() {
            this.$router.push(`/chitietsanpham/${this.product.id}`);
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