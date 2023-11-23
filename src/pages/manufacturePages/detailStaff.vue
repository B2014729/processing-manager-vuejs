<template>
    <layout-default>
        <template #contents>
            <h5 class="header-text ms-3">{{ title }}</h5>
            <div class="d-flex justify-content-center mt-5">
                <div class="main-profile row w-75  overflow-hidden">
                    <div class="col-md-4 col-sm-6 col-12">
                        <div class="w-100 m-3 rounded-circle overflow-hidden">
                            <img class="w-100"
                                src="https://media.istockphoto.com/id/1200677760/photo/portrait-of-handsome-smiling-young-man-with-crossed-arms.jpg?s=612x612&w=0&k=20&c=g_ZmKDpK9VEEzWw4vJ6O577ENGLTOcrvYeiLxi8mVuo="
                                alt="avatar-profile">
                        </div>
                    </div>
                    <div class="col-md-8 col-sm-6 col-12">
                        <div class="w-100 mt-3 p-4 info overflow-hidden">
                            <div>
                                <h3 class="fw-bold">{{ user.fullname }}</h3>
                                <span>({{ user.position }}) </span>
                            </div>
                            <div class="mt-3">
                                <ul>
                                    <li>
                                        <span class="fw-bold">Ngày sinh: </span>
                                        {{ user.birth_date }}
                                    </li>
                                    <li>
                                        <span class="fw-bold">Giới tính: </span>
                                        {{ user.gender }}
                                    </li>
                                    <li>
                                        <span class="fw-bold">CCCD: </span>
                                        {{ user.id_number }}
                                    </li>
                                    <li>
                                        <span class="fw-bold">Địa chỉ: </span>
                                        {{ user.address }}
                                    </li>
                                    <li>
                                        <span class="fw-bold">Số điện thoại: </span>
                                        {{ user.phone }}
                                    </li>
                                    <li>
                                        <span class="fw-bold">Email: </span>
                                        {{ user.email }}
                                    </li>
                                    <li>
                                        <span class="fw-bold">Đơn vị: </span>
                                        {{ user.id_DV }}
                                    </li>
                                    <li>
                                        <span class="fw-bold">Hệ số lương: </span>
                                        {{ user.id_salary }}
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div class="d-flex align-items-end justify-content-end pb-4" style="height: 100px;">
                            <router-link :to="{ name: 'Danh-sach-nhan-vien' }">
                                <button class="btn"><i class="fa-solid fa-arrow-left px-1"></i></button>
                            </router-link>
                            <router-link :to="{ name: 'Cap-nhat-nhan-vien', params: { id: user.id } }">
                                <button class="btn ms-3">Cập nhật thông tin</button>
                            </router-link>

                        </div>
                    </div>
                </div>
            </div>
        </template>
    </layout-default>
</template>

<script>
import moment from 'moment';
import router from '@/router';
import defaultLayoutManufactureVue from '../../layouts/defaultLayoutManufacture.vue';

import stafManagementService from '@/service/staffManagement.service';
import accountService from '@/service/account.service';
export default {
    components: {
        layoutDefault: defaultLayoutManufactureVue,
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
            user: {},
        }
    },

    props: {
        title: {
            type: String,
            default: 'THÔNG TIN CÁ NHÂN__:',
        },
    },

    async created() {
        this.user = await stafManagementService.getUser(this.$route.params.id)
        this.user.birth_date = moment(this.user.birth_date).format('DD-MM-YYYY');
    },
}
</script>

<style scoped>
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

.info {
    border-radius: 45px 0px 170px 15px;
    background-color: #f1f1f1;
    box-shadow: 6px 3px 3px 3px #c7c6c6;
}

p {
    margin: 3px;
}

.btn {
    background-color: var(--bs-dark-bg-subtle);
    box-shadow: 2px 2px 2px 2px #c7c6c6;
    color: black;
}

.btn:hover {
    background-color: rgb(158, 158, 158);
}
</style>