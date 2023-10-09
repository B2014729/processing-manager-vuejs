<template>
    <div class="w-100">
        <div class="border-header d-flex justify-content-between">
            <h4 class="header-text ms-3 ">Dashboard</h4>
            <div class="d-flex align-items-center">
                <div>
                    <form action="" method="POST">
                        <input class="input-search" type="text" name="search" placeholder="Search...">
                        <button class="btn btn-secondary ms-1"><i class="fa-solid fa-magnifying-glass p-2"></i></button>
                    </form>
                </div>
                <div class="dropdown nav-right">
                    <a class="btn dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        <i class="fa-solid fa-bell me-1"></i> Notifications
                    </a>

                    <ul class="menu-child dropdown-menu px-3">
                        <li><router-link to="/home/" class="dropdown-item" href="#">Thông báo mới</router-link></li>
                        <li><router-link to="/canhan/" class="dropdown-item" href="#">Cài đặt thông báo</router-link></li>
                    </ul>
                </div>

                <div class="nav-right d-flex">
                    <button type="button" @click="onLogout" class="btn btn-secondary"><i
                            class="fa-solid fa-right-from-bracket px-2"></i></button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    methods: {
        async onLogout() {
            localStorage.setItem('user', '');
            alert('Bạn có muốn đăng xuất!')
            this.$router.push('/')
        }
    }
}
</script>

<style scoped>
* {
    margin: 0;
    padding: 0;
    -webkit-font-smoothing: antialiased;
    -webkit-text-shadow: rgba(0, 0, 0, .01) 0 0 1px;
    text-shadow: rgba(0, 0, 0, .01) 0 0 1px;

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

.input-search {
    border-radius: 4px;
    padding: 10px;
    height: 34px;
}

.menu-child>li {
    border-bottom: 1px solid #c8c8c8;
    padding: 2px 0;
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
    color: #848484;
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
    padding: 20px 0;
}

.nav-item i {
    font-size: 25px;
    padding-right: 3px;
}

.nav-item:hover {
    color: rgb(1, 143, 31);
}
</style>