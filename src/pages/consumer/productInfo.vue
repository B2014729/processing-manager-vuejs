<template>
    <consumer-layout>
        <template #contents>
            <div class="d-flex justify-content-center">
                <div class="d-flex justify-content-center" style="width:500px;">
                    <div>
                        <h4 class="text-success fw-bold my-4">Thông tin sản xuất: {{ shipment.name }}</h4>
                        <div class="w-100 my-3" style="box-shadow: 0px 0px 12px 6px rgba(158, 131, 131, 0.678);">
                            <div v-if="Process.length === 0">
                                <p class="text-warning mt-2 ms-2">Chưa có thông tin nào được cập nhật tại đây!</p>
                            </div>
                            <div v-else class="card" style="border: none; border-radius: 0px;"
                                v-for="(item, index) in Process" :key="index">
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
                                            <p v-if="checkIssetInArray(index, dataIsUpdated)" class="card-text">
                                                <small class="text-warning">Đã chỉnh sửa!</small>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="w-100 d-flex justify-content-end my-2">
                                <router-link class="mx-2 text-success" :to="{ name: 'Danh-sach-nhan-vien' }">
                                    Chứng nhận
                                </router-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </template>
    </consumer-layout>
</template>
<script>
import shipmentService from '@/service/shipment.service';
import consumerLayout from '../../layouts/consumerLayout.vue';
import ProcessService from '@/service/process.service.js';
export default {
    components: {
        consumerLayout,
    },
    data() {
        return {
            id: this.$route.params.id,
            Process: [],
            shipment: {},
            dataIsUpdated: []
        }
    },

    setup() {
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
    },

    async created() {
        try {
            await ProcessService.getProcess(this.id).then((result) => {
                result.shift(); //Remove first block(Contructor block)
                this.Process = result
            });

            await ProcessService.checkDataIsChanged(this.id).then((result) => {
                this.dataIsUpdated = result;
            });

            await shipmentService.getShipment(this.id).then((result) => {
                console.log(result);
                this.shipment = result;
            });

        } catch (err) {
            console.log(err);
        }
    },


}
</script>
<style scoped></style>