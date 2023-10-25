<template>
    <div class="border-header d-flex align-items-center justify-content-center">
        <router-link :to="{ name: 'Thong-ke-SX' }" class="logo-text">EAST COAST</router-link>
    </div>
    <nav class="nav-left">
        <ul>
            <li class="border-bottom mt-3">
                <router-link class="nav-item" :to="{ name: 'Thong-ke-SX' }">
                    <i class="fa-solid fa-scale-balanced"></i> THỐNG KÊ
                </router-link>
            </li>
            <li class="border-bottom mt-3">
                <router-link class="nav-item" :to="{ name: 'TT-ca-nhan' }">
                    <i class="fa-solid fa-user"></i> CÁ NHÂN
                </router-link>
            </li>
            <li class="border-bottom mt-3">
                <div class="btn-group dropend">
                    <button type="button" class="btn nav-item " data-bs-toggle="dropdown" aria-expanded="false">
                        <i class="fa-solid fa-list"></i> DANH MỤC LÔ HÀNG <i class="fa-solid fa-caret-right"
                            style="font-size: 15px; margin-left: 5px; margin-top: 5px;"></i>
                    </button>
                    <ul class="menu-child dropdown-menu px-3">
                        <li>
                            <router-link :to="{ name: 'Danh-sach-LH' }" class="dropdown-item">
                                Danh sách lô hàng
                            </router-link>
                        </li>

                        <li>
                            <router-link :to="{ name: 'Them-LH' }" class="dropdown-item">
                                Thêm lô hàng mới
                            </router-link>
                        </li>
                    </ul>
                </div>
            </li>

            <li class="border-bottom mt-3">
                <div class="btn-group dropend">
                    <button type="button" class="btn nav-item " data-bs-toggle="dropdown" aria-expanded="false">
                        <i class="fa-brands fa-product-hunt"></i> DANH MỤC SẢN PHẨM <i class="fa-solid fa-caret-right"
                            style="font-size: 15px; margin-left: 5px; margin-top: 5px;"></i>
                    </button>
                    <ul class="menu-child dropdown-menu px-3">
                        <li>
                            <router-link :to="{ name: 'Danh-sach-SP' }" class="dropdown-item">
                                Danh sách sản phẩm
                            </router-link>
                        </li>
                        <li>
                            <router-link :to="{ name: 'Them-SP' }" class="dropdown-item">
                                Thêm sẩn phẩm mới
                            </router-link>
                        </li>
                    </ul>
                </div>
            </li>
            <li class="border-bottom mt-3">
                <router-link class="nav-item" :to="{ name: 'Danh-sach-quy-trinh' }">
                    <i class="fa-solid fa-stairs"></i> QUY TRÌNH SẢN XUẤT
                </router-link>
            </li>
            <li class="border-bottom mt-3">
                <div class="btn-group dropend">
                    <button type="button" class="btn nav-item " data-bs-toggle="dropdown" aria-expanded="false">
                        <i class="fa-solid fa-users"></i> QUẢN LÍ NHÂN VIÊN <i class="fa-solid fa-caret-right"
                            style="font-size: 15px; margin-left: 5px; margin-top: 5px;"></i>
                    </button>
                    <ul class="menu-child dropdown-menu px-3">
                        <li>
                            <router-link :to="{ name: 'Danh-sach-nhan-vien' }" class="dropdown-item">
                                Danh sách nhân viên
                            </router-link>
                        </li>
                        <li>
                            <router-link :to="{ name: 'Bang-luong-nhan-vien' }" class="dropdown-item">
                                Bảng lương nhân viên
                            </router-link>
                        </li>
                        <li>
                            <router-link :to="{ name: 'Them-moi-nhan-vien' }" class="dropdown-item">
                                Thêm mới nhân viên
                            </router-link>
                        </li>
                    </ul>
                </div>
            </li>

            <li class="border-bottom mt-3">
                <router-link class="nav-item" :to="{ name: 'Danh-sach-nhan-vien' }">
                    <i class="fa-solid fa-book"></i> SỔ GHI
                </router-link>
            </li>
            <li class="border-bottom mt-3">
                <router-link class="nav-item" :to="{ name: 'Danh-sach-nhan-vien' }">
                    <i class="fa-solid fa-gear"></i> CÀI ĐẶT
                </router-link>
            </li>
        </ul>

    </nav>
</template>

<script>

export default {

    data() {
        return {
            active: true
        }
    },
}
</script>

<style scoped>
* {
    margin: 0;
    padding: 0;
    -webkit-font-smoothing: antialiased;
    -webkit-text-shadow: rgba(0, 0, 0, .01) 0 0 1px;
    text-shadow: rgba(0, 0, 0, .01) 0 0 1px;
    text-decoration: none;

}

div {
    display: block;
    position: relative;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
}

ul {
    list-style: none;
    margin-bottom: 0px;
}

.menu-child>li {
    border-bottom: 1px solid #c8c8c8;
    padding: 5px 0;
}

p {
    font-family: 'Rubik', sans-serif;
    font-size: 14px;
    line-height: 1.7;
    font-weight: 400;
    color: #000000;
    -webkit-font-smoothing: antialiased;
    -webkit-text-shadow: rgba(0, 0, 0, .01) 0 0 1px;
    text-shadow: rgba(0, 0, 0, .01) 0 0 1px;
}

.menu {
    min-height: 825px;
}

.border-header {
    border-bottom: solid #c8c8c8 1px;
}

.logo-text {
    color: rgb(1, 143, 31);
}

.logo-text,
.header-text {
    text-decoration: none;
    font-weight: bold;
    font-size: 24px;
    padding: 20px 0;
}

.header-text {
    color: #848484;
}

.main {
    background-color: #f4f3ef;
}

.nav-right {
    padding: 20px 20px;
}

.nav-right a {
    font-size: 16px;
    text-decoration: none;
    color: #66615b;
}

.nav-left {
    margin-top: 30px;
}

.nav-left .nav-item {
    font-size: 16px;
    font-weight: bold;
    color: #8d8d8d;
    padding-bottom: 15px;
    display: flex;
}

.nav-item i {
    font-size: 25px;
    padding-right: 3px;
}

.nav-item:hover {
    color: rgb(1, 143, 31);
}

.border-bottom .router-link-exact-active {
    color: rgb(1, 143, 31);
    background-color: white;
}
</style>