<template>
    <layout-default>
        <template #contents>
            <modal-warning-component msg="Mã nhân viên không tồn tại!"></modal-warning-component>

            <h5 class="header-text ms-3">BẢNG LƯƠNG NHÂN VIÊN__:</h5>

            <search-component msg="Tìm kiếm với mã nhân viên!" @submitFrom="searchInfo"></search-component>

            <div class="row mx-3">
                <table class="table table-striped table-hover">
                    <thead>
                        <tr>
                            <th scope="col">MÃ SỐ</th>
                            <th scope="col">HỌ VÀ TÊN</th>
                            <th scope="col">VỊ TRÍ</th>
                            <th scope="col">HỆ SỐ LƯƠNG</th>
                            <th scope="col">LƯƠNG CƠ BẢN</th>
                            <th scope="col">PHỤ CẤP</th>
                            <th scope="col">BẢO HIỂM (%)</th>
                            <th scope="col">TỔNG (VND)</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(  staff, index  ) in   payStaff  " :key="index">
                            <th scope="row">{{ staff.id }}</th>
                            <td>{{ staff.fullname }}</td>
                            <td>{{ staff.position }}</td>
                            <td class="center">{{ formatNumber(staff.id_salary) }}</td>
                            <td class="center">{{ staff.basic }}</td>
                            <td class="center">{{ staff.support }}</td>
                            <td class="center">{{ staff.BH }} </td>
                            <td>{{ formatNumber(staff.basic * staff.id_salary + staff.support) }} </td>
                        </tr>
                        <tr>

                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <th>Tổng lương (VND):</th>
                            <td class="fw-bold">{{ formatNumber(this.sumSalary) }}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </template>
    </layout-default>
</template>

<script>
import * as bootstrap from 'bootstrap/dist/js/bootstrap';
import router from '@/router';
import searchComponent from '../../components/manufactureManagement/searchComponent.vue';
import modalWarningComponent from '@/components/manufactureManagement/modalWarningComponent.vue';

import defaultLayoutManufactureVue from '../../layouts/defaultLayoutManufacture.vue';
import StaffManagementService from '@/service/staffManagement.service.js';
import accountService from '@/service/account.service';
export default {

    components: {
        layoutDefault: defaultLayoutManufactureVue,
        searchComponent: searchComponent,
        modalWarningComponent: modalWarningComponent,
    },

    setup() {
        function formatNumber(number) {
            return (new Intl.NumberFormat().format(number));
        }
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
            formatNumber
        }
    },

    data() {
        return {
            payStaff: [],
            sumSalary: 0,

        }
    },

    async created() {
        await StaffManagementService.getSalaryStaff().then((result) => {
            this.payStaff = result;
        });

        this.payStaff.forEach(element => {
            this.sumSalary = this.sumSalary + (element.basic * element.id_salary + element.support);
        });
    },


    methods: {
        async searchInfo(data) {
            if (data !== '') {
                try {
                    await StaffManagementService.getUser(data).then((result) => {
                        this.payStaff = [result];
                        this.sumSalary = result.basic * result.id_salary + result.support;
                    });
                } catch (error) {
                    console.log(error);
                    new bootstrap.Modal(document.getElementById("ModalWarning"), {}).show();
                }
            } else {
                new bootstrap.Modal(document.getElementById("ModalWarning"), {}).show();
            }

        }
    }
}
</script>

<style scoped>
.header-text {
    text-decoration: none;
    font-weight: bold;
    padding: 15px 0;
    color: #848484;
}

.center {
    text-align: center;
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