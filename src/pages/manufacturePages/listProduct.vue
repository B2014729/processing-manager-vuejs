<template>
    <layout-default>
        <template #contents>
            <modal-warning-component msg="Mã sản phẩm không tồn tại!"></modal-warning-component>
            <h5 class="header-text ms-3">DANH SÁCH SẢN PHẨM__:</h5>

            <search-component msg="Tìm kiếm với mã sản phẩm!" @submitFrom="searchInfo"></search-component>

            <div class="row mx-3">
                <table class="table table-striped table-hover">
                    <thead>
                        <tr>
                            <th scope="col" class="center">MÃ SP</th>
                            <th scope="col" class="center w-25">HÌNH ẢNH</th>
                            <th scope="col" class="center">TÊN SẢN PHẨM</th>
                            <th scope="col" class="center">HẠN SỬ DỤNG</th>
                            <th scope="col" class="center ps-4"></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(item, index) in listProduct" :key="index">
                            <td class="center fw-bold">{{ item.id }}</td>
                            <td class="center">
                                <img :src="`${item.image}`" alt="" class="w-25">
                            </td>
                            <td class="center">{{ item.name }}</td>
                            <td class="center">{{ item.hsd }} Tháng</td>
                            <td>
                                <router-link :to="{ name: 'Chi-tiet-SP', params: { id: item.id } }">
                                    <button class="ms-2 btn-detail"><i class="fa-solid fa-info"></i></button>
                                </router-link>
                                <router-link :to="{ name: 'Cap-nhat-SP', params: { id: item.id } }">
                                    <button class="ms-2 btn-update"><i class="fa-solid fa-pencil"></i></button>
                                </router-link>
                                <button class="ms-2 btn-remove" @click="onDelete(item.id)"><i
                                        class="fa-solid fa-xmark"></i></button>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <div class="d-flex justify-content-end">
                    <router-link :to="{ name: 'Them-SP' }">
                        <button class="btn btn-success rounded-circle"><i class="fa-solid fa-plus"></i></button>
                    </router-link>
                </div>
            </div>
        </template>
    </layout-default>
</template>

<script>
import router from '@/router';
import * as bootstrap from 'bootstrap/dist/js/bootstrap';
import searchComponent from '@/components/manufactureManagement/searchComponent.vue';
import modalWarningComponent from '@/components/manufactureManagement/modalWarningComponent.vue';
import defaultLayoutManufactureVue from '../../layouts/defaultLayoutManufacture.vue';
import productService from '@/service/product.service';
import accountService from '@/service/account.service';

export default {
    components: {
        layoutDefault: defaultLayoutManufactureVue,
        searchComponent: searchComponent,
        modalWarningComponent: modalWarningComponent
    },

    setup() {
        try {
            if (localStorage.getItem('user') !== '') {
                accountService.getRole(localStorage.getItem('user')).then((result) => {
                    if (result !== 1) {
                        router.push('/')
                    }
                });
            }
            else {
                router.push('/')
            }
        } catch (err) {
            router.push('/')
            console.log(err)
        }
    },

    data() {
        return {
            listProduct: [],
        }
    },

    async created() {
        this.listProduct = await productService.getListProduct();
    },

    methods: {
        async onDelete(id) {
            if (confirm(`Bạn chắc chắn muốn xóa sản phẩm ${id}!`)) {
                await productService.deleteProduct(id).then((result) => {
                    if (result) {
                        this.$router.go();
                    } else {
                        console.log('loi')
                    }
                })
            }
        },

        async searchInfo(data) {
            if (data !== '') {
                try {
                    await productService.getProduct(data).then((result) => {
                        if (!result) {
                            new bootstrap.Modal(document.getElementById("ModalWarning"), {}).show();
                        } else {
                            this.listProduct = [result];
                        }
                    });
                } catch (error) {
                    new bootstrap.Modal(document.getElementById("ModalWarning"), {}).show();
                }
            } else {
                new bootstrap.Modal(document.getElementById("ModalWarning"), {}).show();
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