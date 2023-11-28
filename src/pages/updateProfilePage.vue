<template>
    <layout-default>
        <template #contents>
            <h5 class="header-text ms-3">CẬP NHẬT THÔNG TIN__:</h5>
            <div class="d-flex justify-content-center mb-4">
                <div class="main-profile row w-75  overflow-hidden">
                    <div class="col-md-4 col-12">
                        <div class="w-100 m-3 rounded-circle overflow-hidden">
                            <img class="w-100"
                                src="https://media.istockphoto.com/id/1200677760/photo/portrait-of-handsome-smiling-young-man-with-crossed-arms.jpg?s=612x612&w=0&k=20&c=g_ZmKDpK9VEEzWw4vJ6O577ENGLTOcrvYeiLxi8mVuo="
                                alt="avatar-profile">
                        </div>
                        <div class="d-flex justify-content-center">
                            <input class="w-75" type="file">
                        </div>
                    </div>
                    <div class="col-md-8 col-12">
                        <div class="w-100 p-4">
                            <form @submit.prevent="onSubmitUpdate">
                                <div class=" form-floating mb-2">
                                    <input type="text" class="form-control" id="name" :value=user.fullname
                                        @input="user.fullname = $event.target.value">
                                    <label for="name">Họ và tên:</label>
                                </div>
                                <div class="form-floating mb-2">
                                    <input type="date" class="form-control" id="birth-date" :value=user.birth_date
                                        @input="user.birth_date = $event.target.value">
                                    <label for="birth-date">Ngày sinh:</label>
                                </div>

                                <div class="form-floating mb-2">
                                    <input type="text" class="form-control" id="gender" :value=user.gender
                                        @input="user.gender = $event.target.value">
                                    <label for="gender">Giới tính:</label>
                                </div>
                                <div class="form-floating mb-2">
                                    <input type="text" class="form-control" id="id_number" :value=user.id_number
                                        @input="user.id_number = $event.target.value">
                                    <label for="id_number">CCCD:</label>
                                </div>
                                <div class="form-floating mb-2">
                                    <input type="text" class="form-control" id="address" :value=user.address
                                        @input="user.address = $event.target.value">
                                    <label for="address">Địa chỉ:</label>
                                </div>
                                <div class="form-floating mb-2">
                                    <input type="number" class="form-control" id="phone-number" :value=user.phone
                                        @input="user.phone = $event.target.value">
                                    <label for="phone-number">Số điện thoại:</label>
                                </div>
                                <div class="form-floating mb-2">
                                    <input type="email" class="form-control" id="email-address" :value=user.email
                                        @input="user.email = $event.target.value">
                                    <label for="email-address">Email:</label>
                                </div>
                                <div class="form-floating mb-2">
                                    <input type="text" class="form-control" id="location" :value=user.id_DV
                                        @input="user.id_DV = $event.target.value">
                                    <label for="location">Đơn vị công tác:</label>
                                </div>
                                <div class="form-floating mb-2">
                                    <input type="text" class="form-control" id="location" :value=user.position
                                        @input="user.position = $event.target.value">
                                    <label for="location">Chức vụ:</label>
                                </div>
                                <div class="form-floating mb-2">
                                    <select id="role" class="form-select" aria-label="Default select example"
                                        :value=user.id_salary @input="user.id_salary = $event.target.value">
                                        <option style="font-size: 14px;" value="1.89">1.89</option>
                                        <option style="font-size: 14px;" value="2.12">2.12</option>
                                    </select>
                                    <label for="id_salary">Hệ số lương:</label>
                                </div>

                                <span class="messages-error" v-if="error['enoughInfor']">
                                    <i class="fa-solid fa-triangle-exclamation"></i> Vui lòng nhập đầy đủ thông tin nhân
                                    viên.
                                </span>

                                <div class="mb-3 d-flex align-items-end justify-content-end">
                                    <router-link :to="{ name: 'TT-ca-nhan', params: { id: this.$route.params.id } }">
                                        <button class="btn"><i class="fa-solid fa-arrow-left px-1"></i></button>
                                    </router-link>
                                    <button class="btn ms-3" type="submit">Cập nhật</button>
                                </div>
                            </form>
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
import { ref } from 'vue'
import defaultLayoutManufactureVue from '../layouts/defaultLayoutManufacture.vue';

import staffManagementService from '@/service/staffManagement.service';
import accountService from '@/service/account.service';
export default {
    components: {
        layoutDefault: defaultLayoutManufactureVue,
    },
    data() {
        return {
            user: {},
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
        let data = [];
        let error = ref([]);

        return { data, error }
    },
    methods:
    {
        async onSubmitUpdate() {
            if (!this.user.fullname || !this.user.birth_date ||
                !this.user.gender || !this.user.phone || !this.user.id_number || !this.user.address || !this.user.email ||
                !this.user.id_DV || !this.user.position || !this.user.id_salary) {
                this.error['enoughInfor'] = true;
            } else {
                this.error['enoughInfor'] = false;
                try {
                    let token = localStorage.getItem('user');
                    await staffManagementService.updateProfile(token, this.user.fullname, this.user.birth_date,
                        this.user.gender, this.user.phone, this.user.id_number, this.user.address, this.user.email,
                        this.user.id_DV, this.user.position, this.user.id_salary).then((result) => {
                            if (result.message) {
                                alert('Thông tin đã được cập nhật!')
                                this.$router.push(`/canhan`)
                            }
                        })
                } catch (error) {
                    console.log(error)
                }
            }
        }
    },

    async created() {
        this.user = await staffManagementService.getProfile(localStorage.getItem('user'));
        this.user.birth_date = moment(this.user.birth_date).format('YYYY-MM-DD');
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