<template>
    <consumer-layout>
        <template #contents>
            <div class="container p-4 d-flex justify-content-center">
                <div class="w-75">
                    <h3 class="text-success mb-3">Chi tiết sản phẩm:</h3>
                    <div class="row">
                        <div class="col-md-4">
                            <img :src=product.image class="img-fluid">
                        </div>
                        <div class="col-md-8">
                            <h4 class="fw-bold fst-italic ms-4">{{ product.name }}</h4>
                            <ul>
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
                    <hr>
                </div>
            </div>
            <div class="container">
                <h3 class="text-center text-success">SẢN PHẨM TƯƠNG TỰ</h3>
                <div class="row mt-2">
                    <div class="col-md-4 col-12" v-for="(product, index) in listProduct" :key="index">
                        <card-product :product=product></card-product>
                    </div>
                </div>
            </div>
        </template>
    </consumer-layout>
</template>
<script>
import productService from '@/service/product.service';
import consumerLayout from '../../layouts/consumerLayout.vue';
import cardProduct from '@/components/consumer/cardProduct.vue';

export default {
    components: {
        consumerLayout,
        cardProduct,
    },
    props: {
        idProduct: {
            type: String,
            required: true,
        }
    },

    data() {
        return {
            product: {},
            listProduct: [],
        }
    },

    async created() {
        await productService.getProduct(this.idProduct).then((result) => {
            this.product = result;
            console.log(this.product);
        });

        await productService.getListProduct().then((result) => {
            this.listProduct = result;
        });
    },

    methods: {
        async updateData(idproduct) {
            await productService.getProduct(idproduct).then((result) => {
                this.product = result;
            });
        }
    },

    beforeRouteUpdate(to, from, next) {
        const idproduct = to.params.idProduct;
        this.updateData(idproduct);
        next()
    }
}
</script>
<style scope></style>
