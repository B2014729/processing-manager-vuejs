<template>
    <layout-default>
        <template #contents>
            <div class="row">
                <div class="col-xl-3 col-sm-6 col-12">
                    <router-link :to="{ name: 'Thong-ke-DT' }">
                        <card-component>
                            <template #icon-card>
                                <i class="fa-solid fa-dollar-sign fs-1 text-success"></i>
                            </template>
                            <template #counts>
                                <h4 class="text-success">{{ formatNumber(sumRevenue) }}</h4>
                            </template>
                            <template #title-card>
                                <span>Doanh thu (VND)</span>
                            </template>
                        </card-component>
                    </router-link>
                </div>
                <div class="col-xl-3 col-sm-6 col-12">
                    <router-link :to="{ name: 'Danh-sach-SP' }">
                        <card-component>
                            <template #icon-card>
                                <i class="fa-brands fa-product-hunt fs-1 text-success"></i>
                            </template>
                            <template #counts>
                                <h3 class="text-success">56</h3>
                            </template>
                            <template #title-card>
                                <span>Sản phẩm</span>
                            </template>
                        </card-component>
                    </router-link>
                </div>
                <div class="col-xl-3 col-sm-6 col-12">
                    <router-link :to="{ name: 'Danh-sach-quy-trinh' }">
                        <card-component>
                            <template #icon-card>
                                <i class="fa-solid fa-pencil fs-1 text-secondary"></i>
                            </template>
                            <template #counts>
                                <h3 class="text-warning">236</h3>
                            </template>
                            <template #title-card>
                                <span>Quy trình SX</span>
                            </template>
                        </card-component>
                    </router-link>
                </div>
                <div class="col-xl-3 col-sm-6 col-12">
                    <router-link :to="{ name: 'Danh-sach-LH' }">
                        <card-component>
                            <template #icon-card>
                                <i class="fa-solid fa-users fs-1 text-danger"></i>
                            </template>
                            <template #counts>
                                <h3 class="text-danger">27 848</h3>
                            </template>
                            <template #title-card>
                                <span>Khách hàng</span>
                            </template>
                        </card-component>
                    </router-link>
                </div>
            </div>

            <div>
                <chart-component description='Biểu đồ thống kê tất cả số lượng đơn hàng của từng sản phẩm.' :value="[
                    { x: 'Cá tra', y: 5 },
                    { x: 'Tôm', y: 8 },
                    { x: 'Cá ngừ', y: 4 },
                    { x: 'Mực', y: 7 },
                    { x: 'Khác', y: 9 },]
                    ">
                </chart-component>
            </div>
        </template>
    </layout-default>
</template>

<script>

import router from "@/router";

import defaultLayoutManufactureVue from '../../layouts/defaultLayoutManufacture.vue';
import card from '../../components/manufactureManagement/cardComponent.vue';
import chart from '../../components/manufactureManagement/chartComponent.vue';
import accountService from '@/service/account.service';
import ShipmentService from '@/service/shipment.service.js';

export default {
    components: {
        layoutDefault: defaultLayoutManufactureVue,
        cardComponent: card,
        chartComponent: chart
    },

    data() {
        return {
            sumRevenue: 0,
            listtShipment: [],
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

        function formatNumber(number) {
            return (new Intl.NumberFormat().format(number));
        }

        return {
            formatNumber
        }
    },

    async created() {
        this.listShipment = await ShipmentService.getListShipment();
        this.listShipment.forEach(element => {
            this.sumRevenue = this.sumRevenue + (element.price * element.quantity);
        });

    }
}
</script>

<style scoped></style>