<template>
    <layout-default>
        <template #contents>
            <modal-warning-component msg="Mã lô hàng không tồn tại!"></modal-warning-component>

            <h5 class="header-text ms-3">QUY TRÌNH SẢN XUẤT__:</h5>

            <search-component msg="Tìm kiếm với mã lô hàng!" @submitFrom="searchInfo"></search-component>

            <div class="row">
                <div class="col-sm-12 col-md-6 col-lg-4 mb-4" v-for="(item, index) in listShipment" :key="index">
                    <router-link :to="{ name: 'Chi-tiet-quy-trinh', params: { id: item.id } }" class="center">
                        <div class="article-card">
                            <div class="content mb-3">
                                <p class="text-black fw-bold">Ms: {{ item.id }}</p>
                                <p class="title text-black fw-bold fs-6 text-uppercase">{{ item.name }} </p>
                                <p class="date text-black fs-6">Ngày sản xuất: {{ item.date_manufacture }}</p>

                            </div>
                            <img src="../../assets/images/background-card.jpg" alt="article-cover" />
                        </div>
                    </router-link>
                </div>
            </div>
        </template>
    </layout-default>
</template>

<script>
import moment from 'moment';
import * as bootstrap from 'bootstrap/dist/js/bootstrap';
import searchComponent from '@/components/manufactureManagement/searchComponent.vue';
import modalWarningComponent from '@/components/manufactureManagement/modalWarningComponent.vue';
import defaultLayoutManufactureVue from '../../layouts/defaultLayoutManufacture.vue';
import shipmentService from '@/service/shipment.service';

export default {
    components: {
        layoutDefault: defaultLayoutManufactureVue,
        searchComponent: searchComponent,
        modalWarningComponent: modalWarningComponent
    },

    data() {
        return {
            listShipment: [],
        }
    },

    async created() {

        this.listShipment = await shipmentService.getListShipment();
        this.listShipment.forEach(element => {
            element.date_manufacture = moment(element.date_manufacture).format('DD/MM/YYYY');
        });
    },

    methods: {
        async searchInfo(data) {
            if (data !== '') {
                try {
                    await shipmentService.getShipment(data).then((result) => {
                        this.listShipment = [result];
                    });
                    this.listShipment[0].date_manufacture = moment(this.listShipment[0].date_manufacture).format('DD/MM/YYYY');
                } catch (error) {
                    new bootstrap.Modal(document.getElementById("ModalWarning"), {}).show();
                }
            } else {
                this.listShipment = await shipmentService.getListShipment();
                this.listShipment.forEach(element => {
                    element.date_manufacture = moment(element.date_manufacture).format('DD/MM/YYYY');
                });
            }
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

.article-card {
    width: 100%;
    height: 220px;
    border-radius: 12px;
    overflow: hidden;
    position: relative;
    font-family: Arial, Helvetica, sans-serif;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    transition: all 300ms;
}

.article-card:hover {
    transform: translateY(-2px);
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
}

.article-card img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.article-card .content {
    box-sizing: border-box;
    width: 100%;
    position: absolute;
    padding: 30px 20px 20px 20px;
    height: auto;
    bottom: 0;
    background: linear-gradient(transparent, rgba(0, 0, 0, 0.6));
}

.article-card .date,
.article-card .title {
    margin: 0;
}

.article-card .date {
    font-size: 12px;
    color: rgba(255, 255, 255, 0.9);
    margin-bottom: 4px;
}

.article-card .title {
    font-size: 17px;
    color: #fff;
}
</style>