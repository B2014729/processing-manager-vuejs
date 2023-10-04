<template>
    <layout-default>
        <template #contents>
            <h5 class="header-text ms-3">{{ title }}</h5>
            <div class="d-flex justify-content-center mt-5">
                <div class="main-profile row w-75  overflow-hidden">
                    <div class="col-md-4 col-sm-6 col-12">
                        <div class="w-100 m-3 overflow-hidden ">
                            <img class="w-100 mt-3 rounded-circle" :src="`${product.image}`" alt="image -product">
                        </div>
                    </div>
                    <div class="col-md-8 col-sm-6 col-12">
                        <div class="w-100 mt-3 p-4 info overflow-hidden">
                            <div>
                                <h3 class="fw-bold">{{ product.name }}</h3>
                            </div>
                            <div class="mt-3">
                                <ul>
                                    <li>
                                        <span class="fw-bold">Mã sản phẩm: </span>
                                        {{ product.id }}
                                    </li>
                                    <li>
                                        <span class="fw-bold">Quy cách: </span>
                                        {{ product.status }}
                                    </li>
                                    <li>
                                        <span class="fw-bold">Hạn sử dụng: </span>
                                        {{ product.hsd }} tháng kể từ ngày sản xuất.
                                    </li>
                                    <li>
                                        <span class="fw-bold">Bảo quản: </span>
                                        {{ product.preserve }}
                                    </li>
                                    <li>
                                        <span class="fw-bold">Đóng gói: </span>
                                        {{ product.pack }}
                                    </li>
                                    <li>
                                        <span class="fw-bold">Lô hàng tối thiểu: </span>
                                        5 tấn.
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div class="d-flex align-items-end justify-content-end pb-4" style="height: 100px;">
                            <router-link :to="{ name: 'Danh-sach-SP' }">
                                <button class="btn"><i class="fa-solid fa-arrow-left px-1"></i></button>
                            </router-link>
                            <router-link :to="{ name: 'Cap-nhat-SP', params: { id: product.id } }">
                                <button class="btn ms-3">Cập nhật thông tin</button>
                            </router-link>

                        </div>
                    </div>
                </div>
            </div>
        </template>
    </layout-default>
</template>

<script>
import defaultLayoutManufactureVue from '../../layouts/defaultLayoutManufacture.vue';

import productService from '@/service/product.service';
export default {
    components: {
        layoutDefault: defaultLayoutManufactureVue,
    },

    data() {
        return {
            product: {},
        }
    },

    props: {
        title: {
            type: String,
            default: 'THÔNG TIN CÁ NHÂN__:',
        },
    },

    async created() {
        await productService.getProduct(this.$route.params.id).then((result) => {
            this.product = result;
        });
    },
}
</script>

<style scoped>
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

.info {
    border-radius: 45px 0px 170px 15px;
    background-color: #f1f1f1;
    box-shadow: 6px 3px 3px 3px #c7c6c6;
}

p {
    margin: 3px;
}

.btn {
    background-color: var(--bs-dark-bg-subtle);
    box-shadow: 2px 2px 2px 2px #c7c6c6;
    color: black;
}

.btn:hover {
    background-color: rgb(158, 158, 158);
}
</style>