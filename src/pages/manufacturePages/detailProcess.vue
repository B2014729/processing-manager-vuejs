<template>
    <layout-default>
        <template #contents>
            <h5 class="header-text ms-3">QUY TRÌNH SẢN XUẤT {{ name }}__:</h5>
            <div class="w-100 d-flex justify-content-center">
                <div class="w-50 mb-3" style="box-shadow: 0px 0px 12px 6px rgba(121, 121, 121, 0.678);">
                    <div class="card" style="border: none; border-radius: 0px;" v-for="(item, index) in Process"
                        :key="index">
                        <div class="row g-0">
                            <div class="col-md-2">
                                <img src="../../assets/images/zyro-image.png" class="img-fluid rounded-start" alt="...">
                            </div>
                            <div class="col-md-10 border-bottom">
                                <div class="card-body">
                                    <h5 class="card-title fw-bold">{{ item.title }}</h5>
                                    <p class="card-text">{{ item.contents }}</p>
                                    <p class="card-text"><small class="text-muted">Date: {{ item.dateUpdate }}</small></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="w-100 d-flex justify-content-between my-2">
                        <router-link class="mx-2 text-success" :to="{ name: 'Danh-sach-nhan-vien' }">Chứng
                            nhận</router-link>
                        <button class="btn btn-secondary mx-2">Cập nhật tại đây</button>
                    </div>
                </div>
            </div>
        </template>
    </layout-default>
</template>
<script>

import defaultLayoutManufactureVue from '../../layouts/defaultLayoutManufacture.vue';
import ProcessService from '@/service/process.service.js';

export default {
    components: {
        layoutDefault: defaultLayoutManufactureVue,
    },
    data() {
        return {
            name: this.$route.params.name,
            Process: [],
        }
    },

    async created() {
        try {
            await ProcessService.getProcess(this.name).then((result) => {
                console.log(result);
                this.Process = result;
            });
        } catch (err) {
            console.log(err);
        }
    },
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
