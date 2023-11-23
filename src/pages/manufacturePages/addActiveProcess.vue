<template>
    <layout-default>
        <template #contents>
            <!--Modal notification success and warning-->
            <modal-success-component msg="Đã thêm hoạt động trên lô hàng!" @ok="goListProduct"></modal-success-component>

            <h5 class="header-text ms-3">THÊM HOẠT ĐỘNG MỚI CHO LÔ HÀNG __:</h5>
            <div class="d-flex justify-content-center mb-4">
                <div class="main-profile w-50 overflow-hidden">
                    <form @submit.prevent="submit">
                        <div class="mt-3 d-flex justify-content-center">
                            <div class="w-75">
                                <h6 class="fw-bold text-secondary">THÔNG TIN CẬP NHẬT:</h6>

                                <div class="form-floating mb-2">
                                    <input type="text" class="form-control" id="title" v-model="data['title']">
                                    <label for="title">Tiêu đề:</label>
                                </div>

                                <div class="form-floating mb-2">
                                    <textarea type="text" class="form-control" id="contents" v-model="data['contents']"
                                        style="height: 175px;"></textarea>
                                    <label for="contents">Nội dung:</label>
                                </div>

                                <span class="messages-error" v-if="error['enoughInfor']">
                                    <i class="fa-solid fa-triangle-exclamation"></i> Vui lòng nhập đầy đủ thông tin hoạt
                                    động!.
                                </span>

                                <div class="mb-3 d-flex align-items-end justify-content-end">
                                    <router-link :to="{ name: 'Danh-sach-quy-trinh' }">
                                        <button class="btn btn-secondary"><i
                                                class="fa-solid fa-arrow-left px-1"></i></button>
                                    </router-link>
                                    <button class="btn ms-2" type="submit">Thêm hoạt động</button>
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
import router from '@/router';
import * as bootstrap from 'bootstrap/dist/js/bootstrap';

import defaultLayoutManufactureVue from '../../layouts/defaultLayoutManufacture.vue';
import modalSuccessComponent from '@/components/manufactureManagement/modalSuccessComponent.vue';
import staffManagementService from '@/service/staffManagement.service.js'
import ProcessService from '@/service/process.service.js';
import accountService from '@/service/account.service';

export default {
    data() {
        return {
            data: [],
            id: this.$route.params.id,
            dataUpdate: '',
            user: 0,
        }
    },

    components: {
        layoutDefault: defaultLayoutManufactureVue,
        modalSuccessComponent: modalSuccessComponent,
    },

    setup() {
        let error = ref([]);
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

        return {
            error
        }
    },


    async created() {
        this.user = await staffManagementService.getProfile(localStorage.getItem('user'));
    },

    methods: {
        async submit() {
            if (!this.data['title'] || !this.data['contents']) {
                this.error['enoughInfor'] = true;
            } else {
                this.error['enoughInfor'] = false;

                let curDate = new Date();
                this.dataUpdate = curDate.getDate() + '/' + (curDate.getMonth() + 1) + '/' + curDate.getFullYear()
                    + ' ' + curDate.getHours() + ':' + (curDate.getMinutes() + 1);

                try {
                    await ProcessService.addActive(this.id, this.dataUpdate, this.data['title'], this.data['contents'], this.user.id).then((result) => {
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

        goListProduct() {
            this.$router.push(`/chitietquytrinh/${this.id}`);
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