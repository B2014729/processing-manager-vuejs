<template>
    <div class="">
        <nav class="navbar navbar-expand-md">
            <div class="container">
                <a class="navbar-brand d-md-none d-xs-block py-3" href="#">
                    <img src="#" height="40" alt="Company Logo">
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown"
                    aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul class="navbar-nav mx-auto">
                        <li class="nav-item">
                            <router-link class="nav-link" :to="{ name: 'Khach-hang' }">
                                <i class="fa-solid fa-house"></i> Trang chủ
                            </router-link>

                        </li>
                        <li class="nav-item mx-2">
                            <div class="dropdown nav-link">
                                <a class="dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                                    aria-expanded="false" style="color: rgba(0, 0, 0, 0.679); text-decoration: none;">
                                    Danh mục sản phẩm
                                </a>
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item" href="#">Action</a></li>
                                    <li><a class="dropdown-item" href="#">Another action</a></li>
                                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </div>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link" :to="{ name: 'Tra-cuu-SP' }">
                                Tra cứu thông tin
                            </router-link>

                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Giới thiệu</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Tư vấn</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Tuyển dụng</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Hoạt động</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Liên hệ</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
</template>
<script></script>
<style scoped>
@media screen and (min-width:777px) {
    .nav-link {
        min-width: 120px;
    }

    .navbar {
        padding: 0
    }
}

.nav-item {
    text-align: center;
}

.nav-item:hover {
    background-color: rgb(255, 255, 255);
    border-bottom: 1px solid rgba(57, 57, 57, 0.356);
    border-top: 1px solid rgba(57, 57, 57, 0.356);
}

.navbar {
    background-color: rgb(232, 232, 232);
    border-radius: 60px;
    height: 40px;
}

.active {
    font-weight: bold;
}
</style>