<template>
    <layout-default>
        <template #contents>
            <!--Modal notification success and warning-->
            <modal-success-component msg="Đã thêm nhân viên!" @ok="getToListStaff"></modal-success-component>
            <modal-warning-component msg="Mã nhân viên đã tồn tại!"></modal-warning-component>

            <h5 class="header-text ms-3">THÊM MỚI NHÂN VIÊN__:</h5>
            <div class="d-flex justify-content-center mb-4">
                <div class="main-profile w-75  overflow-hidden">
                    <form class="row" @submit.prevent="onSubmitAddUser">
                        <div class="col-md-4 col-12">
                            <div class="mt-4 ms-5">
                                <h6 class="fw-bold text-secondary">TÀI KHOẢN NHÂN VIÊN:</h6>
                                <div class="form-floating mb-2">
                                    <input type="text" class="form-control" id="username" v-model="data['username']">
                                    <label for="username">Tên đăng nhập:</label>
                                </div>

                                <span class="messages-error" v-if="error['usernameIsset']">
                                    <i class="fa-solid fa-triangle-exclamation"></i> Tên đăng nhập đã tồn tại!

                                </span>

                                <div class="form-floating mb-2">
                                    <input type="text" class="form-control" id="password" v-model="data['password']">
                                    <label for="password">Mật khẩu:</label>
                                </div>

                                <div class="form-floating mb-2">
                                    <select id="role" class="form-select" aria-label="Default select example"
                                        v-model="data['role']">
                                        <option style="font-size: 14px;" value="1">Quyền quản trị</option>
                                        <option style="font-size: 14px;" value="0">Quyền nhân viên</option>
                                    </select>
                                    <label for="role">Quyền đăng nhập:</label>
                                </div>


                                <span class="messages-error" v-if="error['enoughAccount']">
                                    <i class="fa-solid fa-triangle-exclamation"></i> Vui lòng nhập thông tin tài khoản.
                                </span>

                                <h6 class="fw-bold text-secondary mt-5">AVATAR:</h6>
                                <div class="d-flex form-floating mb-2">
                                    <input class=" w-75 form-control" id="avatar" type="file">
                                    <label for="avatar" style="margin: -5px;">Thêm avatar:</label>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-8 col-12">
                            <div class="w-100 p-4">
                                <h6 class="fw-bold text-secondary">THÔNG TIN NHÂN VIÊN:</h6>
                                <div class="form-floating mb-2">
                                    <input type="text" class="form-control" id="id" v-model="data['id']">
                                    <label for="id">Mã nhân viên:</label>
                                </div>
                                <div class="form-floating mb-2">
                                    <input type="text" class="form-control" id="fullname" v-model="data['fullname']">
                                    <label for="fullname">Họ và tên:</label>
                                </div>
                                <div class="form-floating mb-2">
                                    <input type="date" class="form-control" id="birth-date" v-model="data['birth_date']">
                                    <label for="birth-date">Ngày sinh:</label>
                                </div>
                                <div class="form-floating mb-2">
                                    <select id="role" class="form-select" aria-label="Default select example"
                                        v-model="data['gender']">
                                        <option style="font-size: 14px;" value="Nam">Nam</option>
                                        <option style="font-size: 14px;" value="Nữ">Nữ</option>
                                    </select>
                                    <label for="gender">Giới tính:</label>
                                </div>
                                <div class="form-floating mb-2">
                                    <input type="text" class="form-control" id="id_number" v-model="data['id_number']">
                                    <label for="id_number">CCCD:</label>
                                </div>
                                <div class="form-floating mb-2">
                                    <input type="text" class="form-control" id="address" v-model="data['address']">
                                    <label for="address">Địa chỉ:</label>
                                </div>
                                <div class="form-floating mb-2">
                                    <input type="text" class="form-control" id="phone-number" v-model="data['phone']">
                                    <label for="phone-number">Số điện thoại:</label>
                                </div>
                                <div class="form-floating mb-2">
                                    <input type="email" class="form-control" id="email" v-model="data['email']">
                                    <label for="email-address">Email:</label>
                                </div>

                                <div class="form-floating mb-2">
                                    <input type="text" class="form-control" id="idDV" v-model="data['id_DV']">
                                    <label for="idDV">Đơn vị:</label>
                                </div>

                                <div class="form-floating mb-2">
                                    <input type="text" class="form-control" id="position" v-model="data['position']">
                                    <label for="position">Chức vụ:</label>
                                </div>
                                <div class="form-floating mb-2">
                                    <select id="role" class="form-select" aria-label="Default select example"
                                        v-model="data['id_salary']">
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
                                    <button class="btn" type="submit">Thêm nhân viên</button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </template>
    </layout-default>
</template>

<script>
import * as bootstrap from 'bootstrap/dist/js/bootstrap';
import router from '@/router';
import { ref } from 'vue';
import defaultLayoutManufactureVue from '../../layouts/defaultLayoutManufacture.vue';

import modalSuccessComponent from '@/components/manufactureManagement/modalSuccessComponent.vue';
import modalWarningComponent from '@/components/manufactureManagement/modalWarningComponent.vue';

import staffManagementService from '@/service/staffManagement.service'
import accountService from '@/service/account.service'
export default {
    data() {
        return {
        }
    },
    components: {
        layoutDefault: defaultLayoutManufactureVue,
        modalSuccessComponent: modalSuccessComponent,
        modalWarningComponent: modalWarningComponent
    },

    setup() {
        let error = ref([]);
        let data = [];
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
            data, error
        }
    },
    methods:
    {
        async onSubmitAddUser() {
            if (!this.data['id'] || !this.data['fullname'] || !this.data['birth_date'] || !this.data['gender'] || !this.data['id_number']
                || !this.data['address'] || !this.data['phone'] || !this.data['email']
                || !this.data['id_DV'] || !this.data['position'] || !this.data['id_salary']) {
                this.error['enoughInfor'] = true;
            } else {
                this.error['enoughInfor'] = false;
            }

            if (!this.data['username'] || !this.data['password'] || !this.data['role']) {
                this.error['enoughAccount'] = true;
            } else {
                this.error['enoughAccount'] = false;
                try {
                    await accountService.checkIsset(this.data['username']).then((result) => {
                        if (result.message) {
                            this.error['usernameIsset'] = true;
                        } else {
                            this.error['usernameIsset'] = false;
                            if (!this.error['enoughInfor']) {
                                try {
                                    staffManagementService.createStaff(this.data['id'], this.data['fullname'], this.data['birth_date'],
                                        this.data['gender'], this.data['id_number'], this.data['address'], this.data['phone'], this.data['email'],
                                        this.data['id_DV'], this.data['position'], this.data['id_salary'], this.data['username'], this.data['password'], this.data['role'])
                                        .then((result) => {

                                            let myModal = null;
                                            if (!result.message) {
                                                myModal = new bootstrap.Modal(document.getElementById("ModalWarning"), {});
                                            } else {
                                                myModal = new bootstrap.Modal(document.getElementById("myModal"), {});
                                            }
                                            myModal.show();

                                        })
                                } catch (err) {
                                    console.log(err);
                                }
                            }
                        }
                    });
                } catch (err) {
                    console.log(err);
                }
            }
        },

        getToListStaff() {
            this.$router.push('/danhsachnhanvien/');
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