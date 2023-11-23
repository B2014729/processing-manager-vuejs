<template>
    <layout-default>
        <template #contents>
            <h5 class="header-text ms-3">QUY TRÌNH SẢN XUẤT__:</h5>
            <div class="w-100 d-flex justify-content-center">
                <div class="w-50 mb-3" style="box-shadow: 0px 0px 12px 6px rgba(158, 131, 131, 0.678);">
                    <div v-if="Process.length === 0">
                        <p class="text-warning mt-2 ms-2">Chưa có thông tin nào được cập nhật tại đây!</p>
                    </div>
                    <div v-else class="card" style="border: none; border-radius: 0px;" v-for="(item, index) in Process"
                        :key="index">
                        <div class="row g-0">
                            <div class="col-md-2">
                                <img src="../../assets/images/zyro-image.png" class="img-fluid rounded-start h-100"
                                    alt="...">
                            </div>
                            <div class="col-md-10 border-bottom">
                                <div class="card-body">
                                    <h5 class="card-title fw-bold">{{ item.data.title }}</h5>
                                    <p class="card-text">{{ item.data.contents }}</p>
                                    <p class="card-text">
                                        <small class="text-muted">Ngày: {{ item.data.dateUpdate }}</small>
                                    </p>
                                    <p v-if="checkIssetInArray(index, dataIsUpdated)" class="card-text"><small
                                            class="text-warning">Đã
                                            chỉnh sửa!</small></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="w-100 d-flex justify-content-between my-2">
                        <router-link class="mx-2 text-success" :to="{ name: 'Danh-sach-nhan-vien' }">Chứng
                            nhận</router-link>
                        <div class="d-flex">
                            <router-link :to="{ name: 'Danh-sach-quy-trinh' }">
                                <button class="btn btn-secondary"><i class="fa-solid fa-arrow-left px-1"></i></button>
                            </router-link>
                            <router-link :to="{ name: 'Them-hoat-dong-moi', params: { id: id } }">
                                <button class="btn btn-secondary mx-2">Cập nhật tại đây</button>
                            </router-link>

                        </div>
                    </div>
                </div>
            </div>
        </template>
    </layout-default>
</template>
<script>
import router from '@/router';
import accountService from '@/service/account.service';
import defaultLayoutManufactureVue from '../../layouts/defaultLayoutManufacture.vue';
import ProcessService from '@/service/process.service.js';

export default {
    components: {
        layoutDefault: defaultLayoutManufactureVue,
    },
    data() {
        return {
            id: this.$route.params.id,
            Process: [],
            dataIsUpdated: []
        }
    },

    async created() {
        try {
            await ProcessService.getProcess(this.id).then((result) => {
                result.shift(); //Remove first block(Contructor block)
                this.Process = result
            });

            await ProcessService.checkDataIsChanged(this.id).then((result) => {
                this.dataIsUpdated = result;
                console.log(this.dataIsUpdated);
            });

        } catch (err) {
            console.log(err);
        }
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

        let checkIssetInArray = (index, array) => {
            for (let i = 0; i < array.length; i++) {
                if (index === array[i]) {
                    return true;
                }
            }
            return false;
        }

        return {
            checkIssetInArray
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
</style >
