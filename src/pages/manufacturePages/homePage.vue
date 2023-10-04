<template>
    <layout-default>
        <template #contents>
            <div class="row">
                <div class="col-xl-3 col-sm-6 col-12">
                    <router-link :to="{ name: 'Danh-sach-LH' }">
                        <card-component>
                            <template #icon-card>
                                <i class="fa-solid fa-dollar-sign fs-1 text-success"></i>
                            </template>
                            <template #counts>
                                <h4 class="text-success">178 567 000</h4>
                            </template>
                            <template #title-card>
                                <span>Doanh thu (VND)</span>
                            </template>
                        </card-component>
                    </router-link>
                </div>
                <div class="col-xl-3 col-sm-6 col-12">
                    <router-link :to="{ name: 'Danh-sach-LH' }">
                        <card-component>
                            <template #icon-card>
                                <i class="fa-brands fa-product-hunt fs-1 text-success"></i>
                            </template>
                            <template #counts>
                                <h3 class="text-success">365 590</h3>
                            </template>
                            <template #title-card>
                                <span>Sản phẩm</span>
                            </template>
                        </card-component>
                    </router-link>
                </div>
                <div class="col-xl-3 col-sm-6 col-12">
                    <router-link :to="{ name: 'Danh-sach-LH' }">
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
                <chart-component></chart-component>
            </div>
        </template>
    </layout-default>
</template>

<script>
import { ref } from 'vue';
import router from "@/router";

import defaultLayoutManufactureVue from '../../layouts/defaultLayoutManufacture.vue';
import card from '../../components/manufactureManagement/cardComponent.vue';
import chart from '../../components/manufactureManagement/chartComponent.vue';
import accountService from '@/service/account.service';
import { useRoute } from 'vue-router';

export default {
    components: {
        layoutDefault: defaultLayoutManufactureVue,
        cardComponent: card,
        chartComponent: chart
    },
    setup() {
        const route = useRoute();
        let login = ref(false);
        let iduser = route.params.id || 32365;
        try {
            accountService.session().then((result) => {
                for (let i = 0; i < result.length; i++) {
                    if (result[i].id == iduser && result[i].role === 1) {
                        login.value = true;
                        console.log(login.value)
                    }
                }
            });
        } catch (err) {
            console.log(err)
        }

        setTimeout(() => {
            if (!login.value) {
                router.push('/')
            }
        }, 100)

        return {
            login
        }
    }
}
</script>

<style scoped></style>