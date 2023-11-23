<template>
    <layout-default>
        <template #contents>
            <modal-warning-component msg="Mã nhân viên không tồn tại!"></modal-warning-component>
            <h5 class="header-text ms-3">DANH SÁCH NHÂN VIÊN__:</h5>

            <search-component msg="Tìm kiếm với mã nhân viên!" @submitFrom="searchInfo"></search-component>

            <div class="row mx-3">
                <table class="table table-striped table-hover">
                    <thead>
                        <tr>
                            <th scope="col">STT</th>
                            <th scope="col">MÃ SỐ</th>
                            <th scope="col">HỌ VÀ TÊN</th>
                            <th scope="col">ĐƠN VỊ</th>
                            <th scope="col">VỊ TRÍ</th>
                            <th scope="col" class="ps-4">CHỨC NĂNG</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(item, index) in listStaff" :key="index">
                            <th scope="row">{{ index + 1 }}</th>
                            <td class="fw-bold">{{ item.id }}</td>
                            <td>{{ item.fullname }}</td>
                            <td>{{ item.id_DV }}</td>
                            <td>{{ item.position }}</td>
                            <td>
                                <router-link :to="{ name: 'Chi-tiet-NV', params: { id: item.id } }">
                                    <button class="ms-2 btn-detail"><i class="fa-solid fa-info"></i></button>
                                </router-link>
                                <router-link :to="{ name: 'Cap-nhat-nhan-vien', params: { id: item.id } }">
                                    <button class="ms-2 btn-update"><i class="fa-solid fa-pencil"></i></button>
                                </router-link>
                                <button class="ms-2 btn-remove" @click="onDelete(item.id)"><i
                                        class="fa-solid fa-xmark"></i></button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </template>
    </layout-default>
</template>

<script>
import router from '@/router';
import * as bootstrap from 'bootstrap/dist/js/bootstrap';
import modalWarningComponent from '@/components/manufactureManagement/modalWarningComponent.vue';
import searchComponent from '@/components/manufactureManagement/searchComponent.vue';
import defaultLayoutManufactureVue from '../../layouts/defaultLayoutManufacture.vue';
import StaffManagementService from '@/service/staffManagement.service';
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
            listStaff: [],
        }
    },

    async created() {
        try {
            await StaffManagementService.getAll().then((result) => {
                this.listStaff = result;
            });
        } catch (error) {
            console.log(error);
        }

    },

    methods: {
        async onDelete(id) {
            if (confirm(`Bạn chắc chắn muốn xóa nhân viên ${id}!`)) {
                await StaffManagementService.deleteUser(id).then((result) => {
                    if (result.message) {
                        this.$router.go();
                    } else {
                        console.log('loi')
                    }
                })
            }
        },

        async searchInfo(data) {
            console.log(data);
            if (data !== '') {
                try {
                    await StaffManagementService.getUser(data).then((result) => {
                        this.listStaff = [result];
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