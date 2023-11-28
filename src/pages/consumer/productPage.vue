<template>
    <consumer-layout>
        <template #contents>
            <div class="container">
                <div class="row p-5">
                    <div class="col-md-8 d-flex justify-content-end align-items-center">
                        <div class="w-75">
                            <p class="text-center fs-5 text-success fst-italic">
                                Với EAST COAST, chúng tôi mang đến nguồn thực phẩm tốt, sạch, phong phú và nhiều dinh
                                dưỡng,thân thiện với môi trường nhằm chia sẻ
                                những lo lắng của khách hàng khi chọn mua thực phẩm hàng ngày cho gia đình.
                            </p>
                            <span class="float-end fst-italic">_Join Mastar_</span>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <img src="https://chonthuonghieu.com/wp-content/uploads/listing-uploads/gallery/2021/05/bendinh3.jpg"
                            alt="" class="img-fluid rounded-circle">
                    </div>
                </div>
                <hr>
                <h3 class="text-center text-success">DANH SÁCH SẢN PHẨM</h3>

                <div class="row mt-2">
                    <search-component @submit="search($event)" v-model="searchText">
                    </search-component>
                    <div class="col-md-4 col-12" v-for="(product, index) in searchProduct" :key="index">
                        <card-product :product=product></card-product>
                    </div>
                </div>
            </div>
        </template>
    </consumer-layout>
</template>
<script>
import searchComponent from '@/components/consumer/searchComponent.vue';
import productService from '@/service/product.service';
import consumerLayout from '../../layouts/consumerLayout.vue';
import cardProduct from '@/components/consumer/cardProduct.vue';
export default {
    components: {
        consumerLayout,
        cardProduct,
        searchComponent
    },
    data() {
        return {
            listProduct: [],
            searchText: '',
        }
    },

    async created() {
        await productService.getListProduct().then((result) => {
            this.listProduct = result;
        });
    },

    computed: {
        productString() {
            return this.listProduct.map((product) => {
                const { name } = product;
                return name;
            });
        },

        searchProduct() {
            if (!this.searchText) {
                return this.listProduct;
            }
            return this.listProduct.filter((_product, index) => {
                console.log(_product.name + '_' + this.productString[index].includes(this.searchText));
                return this.productString[index].includes(this.searchText);
            });
        }
    },

    methods: {
        search() {
            console.log(this.searchProduct);
        },
    }
}
</script>
<style scoped></style>
